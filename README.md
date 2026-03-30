# SEH Study

> Spaced repetition study tool for the NASA Systems Engineering Handbook.

SEH Study helps engineers learn and retain the 238 glossary terms from NASA's Systems Engineering Handbook using Leitner spaced repetition. Terms are organized across 10 topic categories with flashcard, quiz, and browse modes. A LangGraph agent generates contextual quiz questions on demand.

## Features

- **238 glossary terms** from the NASA Systems Engineering Handbook
- **Leitner 5-box spaced repetition** — Box 1 (now), Box 2 (1 day), Box 3 (3 days), Box 4 (7 days), Box 5 (14 days, mastered)
- **10 topic categories** — lifecycle, requirements, design, reviews, risk, verification, project management, configuration, human factors, technology
- **3-tab dashboard** — Study (flashcards + quiz), Browse (searchable glossary), Progress (mastery heatmap + streaks)
- **LangGraph quiz generator** — AI-generated scenario questions via frame-agent
- **Module Federation remote** — renders inside the Frame OS shell

## Architecture

```
packages/
  shared/        Glossary data, types, category map, Leitner SR engine, constants
  agent-graph/   LangGraph state machine — quiz-generator + explainer nodes
  api/           Express server (:3031) — GET /health, GET /api/tools, domain routes
  browser-app/   React + Carbon DS (:3030) — 3-tab dashboard, Module Federation remote
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 5, Module Federation |
| UI | React 18, Carbon Design System |
| State | Redux Toolkit, localStorage (card progress) |
| AI | LangGraph (quiz generation), routed through frame-agent |
| Language | TypeScript |

## Getting Started

**Prerequisites:** Node >= 24 (via `fnm use`), pnpm 9

```bash
pnpm install
pnpm dev:all    # API on :3031, frontend on :3030
```

## Data Model

Terms are stored in `seh-glossary.json` with this structure:

- **Term** — the glossary entry name
- **Definition** — NASA's official definition
- **Category** — one of 10 topic categories
- **Leitner box** — current retention level (1-5), persisted to localStorage
- **Next review** — calculated from box level and last review timestamp

## Roadmap

- [x] Monorepo scaffold (4 packages)
- [x] Module Federation remote registered in shell
- [x] 238-term glossary with 10 categories
- [x] Leitner spaced repetition engine
- [x] Study, Browse, Progress tabs
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
| **seh-study** | **NASA SEH spaced repetition study tool (this repo)** |
| [daily-logger](https://github.com/ojfbot/daily-logger) | Automated daily dev blog pipeline |
| [purefoy](https://github.com/ojfbot/purefoy) | Roger Deakins cinematography knowledge base |
| [MrPlug](https://github.com/ojfbot/MrPlug) | Chrome extension for AI UI feedback |
| [frame-ui-components](https://github.com/ojfbot/frame-ui-components) | Shared component library (Carbon DS) |
