# SEH Study

> Adaptive systems engineering training platform — branching mission scenarios with AI-driven learning paths, built on the NASA Systems Engineering Handbook.

SEH Study trains engineers to make real systems engineering decisions under uncertainty. 148 branching scenarios put you in the role of a mission systems engineer, where each choice shifts risk, schedule, and budget gauges. An adaptive learning engine (EWMA performance model + 5-factor scenario recommender) tracks your weaknesses across 10 SE topic categories and selects the next scenario to close your knowledge gaps. Leitner spaced repetition flashcards reinforce the 238 glossary terms that underpin every scenario.

## Features

- **148 branching scenarios** generated from the NASA SEH PDF — text-adventure-style decision trees with multiple nodes, choices, and 3-axis scoring (Risk / Schedule / Budget)
- **Adaptive learning engine** — EWMA performance model tracks per-term accuracy and per-category strength; 5-factor recommender selects the next best scenario
- **Mission status simulation** — real-time Risk, Schedule, and Budget gauges respond to each decision
- **Scenario debrief** — post-scenario review with term promotion/demotion based on decision quality
- **238 glossary terms** from the NASA Systems Engineering Handbook with Leitner 5-box spaced repetition
- **10 topic categories** — lifecycle, requirements, design, reviews, risk, verification, project management, configuration, human factors, technology
- **4-tab dashboard** — Study (flashcards), Browse (searchable glossary), Progress (mastery heatmap), Scenarios (adaptive mission runner)
- **Structured event stream** — every interaction emits typed events (`card-review`, `scenario-decision`, `scenario-complete`, `session-start/end`) feeding the performance model
- **Module Federation remote** — renders inside the Frame OS shell

## Architecture

```
packages/
  shared/          Glossary data, types, Leitner SR engine, scenario engine,
                   performance model (EWMA), adaptive recommender, study events
  agent-graph/     LangGraph state machine — quiz-generator + explainer nodes
  api/             Express server (:3031) — GET /health, GET /api/tools, domain routes
  browser-app/     React + Carbon DS (:3030) — 4-tab dashboard, Module Federation remote
```

### Adaptive Learning Pipeline

```
StudyEvent stream → buildPerformanceModel() → PerformanceModel
                                                  ├── termPerformance[]     (EWMA accuracy per term)
                                                  ├── categoryStrength[]    (weighted accuracy per category)
                                                  ├── weakCategories[]      (sorted, weakest first)
                                                  └── weakTerms[]           (accuracy < 0.7)
                                                          ↓
                                              recommendScenarios()
                                                  ├── Category weakness   (30%)
                                                  ├── Term gap            (25%)
                                                  ├── Difficulty match    (20%)
                                                  ├── Freshness           (15%)
                                                  └── Unplayed bonus      (10%)
```

### Scenario Decision Model

Each scenario is a directed graph of `ScenarioNode`s. At each node, the learner chooses from `DecisionOption`s that carry:

- **Correctness** — `isCorrect` / `isAcceptable` (correct = 1.0, acceptable = 0.4, wrong = 0 in EWMA)
- **Score impact** — `{ risk, schedule, budget }` deltas applied to mission status
- **Term links** — `termIndices[]` connecting the decision back to glossary terms
- **Branching** — `nextNodeId` routes to different narrative branches based on the choice

Scenarios complete with a debrief that promotes or demotes linked terms in the Leitner system based on decision quality.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 5, Module Federation |
| UI | React 18, Carbon Design System |
| State | Redux Toolkit, localStorage (card progress + events) |
| AI | LangGraph (quiz generation), routed through frame-agent |
| Learning | Leitner 5-box SR, EWMA performance model, 5-factor adaptive recommender |
| Language | TypeScript |

## Getting Started

**Prerequisites:** Node >= 24 (via `fnm use`), pnpm 9

```bash
pnpm install
pnpm dev:all    # API on :3031, frontend on :3030
```

## Data Model

**Terms** — 238 glossary entries with term name, NASA definition, category, Leitner box (1-5), and next review timestamp. Persisted to localStorage.

**Scenarios** — 148 generated scenario templates, each containing metadata (difficulty, categories, term links, estimated duration), a directed graph of narrative nodes with decision options, and a debrief template with success/failure narratives.

**Events** — Structured event stream (capped at 5,000 events in localStorage) recording every card review, scenario decision, scenario completion, and session boundary. Feeds the performance model on each read.

**Performance Model** — Computed on-demand from the event stream. Per-term EWMA accuracy (alpha = 0.3), per-category weighted strength, scenario score history, and sorted weak-term/weak-category lists.

## Roadmap

- [x] Monorepo scaffold (4 packages)
- [x] Module Federation remote registered in shell
- [x] 238-term glossary with 10 categories
- [x] Leitner spaced repetition engine
- [x] Study, Browse, Progress, Scenarios tabs
- [x] 148 branching scenarios generated from NASA SEH PDF
- [x] Scenario engine (mission status, branching, debrief)
- [x] EWMA performance model (per-term, per-category)
- [x] Adaptive scenario recommender (5-factor scoring)
- [x] Structured event stream system
- [ ] LangGraph quiz generator integration
- [ ] Progress sync across devices (frame-agent persistence)
- [ ] Category-filtered study sessions

## License

MIT

## Frame OS Ecosystem

Part of [Frame OS](https://github.com/ojfbot/shell) — an AI-native application OS.

| Repo | Description |
|------|-------------|
| [shell](https://github.com/ojfbot/shell) | Module Federation host + frame-agent LLM gateway |
| [core](https://github.com/ojfbot/core) | Workflow framework — 30+ slash commands + TypeScript engine |
| [cv-builder](https://github.com/ojfbot/cv-builder) | AI-powered resume builder with LangGraph agents |
| [blogengine](https://github.com/ojfbot/BlogEngine) | AI blog content creation platform |
| [TripPlanner](https://github.com/ojfbot/TripPlanner) | AI trip planner with 11-phase pipeline |
| [core-reader](https://github.com/ojfbot/core-reader) | Documentation viewer for the core framework |
| [lean-canvas](https://github.com/ojfbot/lean-canvas) | AI-powered lean canvas business model tool |
| [gastown-pilot](https://github.com/ojfbot/gastown-pilot) | Multi-agent coordination dashboard |
| **seh-study** | **Adaptive SE training platform — branching scenarios + AI learning (this repo)** |
| [daily-logger](https://github.com/ojfbot/daily-logger) | Automated daily dev blog pipeline |
| [purefoy](https://github.com/ojfbot/purefoy) | Roger Deakins cinematography knowledge base |
| [MrPlug](https://github.com/ojfbot/MrPlug) | Chrome extension for AI UI feedback |
| [frame-ui-components](https://github.com/ojfbot/frame-ui-components) | Shared component library (Carbon DS) |
