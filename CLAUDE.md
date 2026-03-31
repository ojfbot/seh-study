# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Commands

```bash
pnpm install                          # install all workspace dependencies
pnpm build                            # compile all packages
pnpm test                             # run vitest
pnpm test:watch                       # vitest watch mode
pnpm lint                             # biome check
pnpm dev:all                          # start api + browser-app concurrently
pnpm --filter @ojfbot/seh-study-api build        # build one package
pnpm vitest run packages/shared/src/__tests__/types.test.ts
```

## Architecture

Four packages in pnpm workspaces:

| Package | Role |
|---------|------|
| `shared` | Glossary data, types, category map, Leitner SR engine, constants |
| `agent-graph` | LangGraph state machine — quiz-generator + explainer nodes |
| `api` | Express server (port 3031), GET /health + /api/tools, domain routes |
| `browser-app` | React + Carbon Design System frontend (port 3030), Module Federation remote |

## Tabs

| Tab | Slug | Purpose |
|-----|------|---------|
| Study | `study` | Flashcard deck + quiz modes with spaced repetition |
| Browse | `browse` | Searchable glossary grouped by category |
| Progress | `progress` | Mastery dashboard — box distribution, category heatmap, streak |

## Data

- 238 glossary terms from NASA Systems Engineering Handbook (`seh-glossary.json`)
- 10 topic categories (lifecycle, requirements, design, reviews, risk, verification, project-mgmt, configuration, human-factors, technology)
- Leitner 5-box spaced repetition: Box 1 (now) → Box 2 (1d) → Box 3 (3d) → Box 4 (7d) → Box 5 (14d, mastered)
- Card state persisted to localStorage

## Key conventions

- All new Express routes must apply `authenticateJWT` (or `MOCK_AUTH=true` for dev).
- No direct Anthropic API calls — all AI goes through frame-agent (port 4001).
- LangGraph nodes: `async function myNode(state): Promise<Partial<State>>` — return partial state, never throw.
- CSS class names prefixed with `seh-study-` to avoid shell collisions.
- Module Federation: `cssInjectedByJs` BEFORE `federation` in vite.config.ts.

## Deployment

**NEVER deploy directly to production** via CLI (`vercel deploy --prod`, `vercel promote`, etc.).
All production deployments go through the GitHub PR → CI → merge → automated deploy pipeline.
The only exception is `workflow_dispatch` for manual CI triggers.
Local Vercel CLI usage is restricted to preview deploys only.
