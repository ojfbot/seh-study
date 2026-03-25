/**
 * Redux middleware that observes existing study/scenario actions
 * and records structured StudyEvents to the events slice.
 *
 * This keeps event instrumentation in one place rather than
 * modifying every UI component.
 */
import type { Middleware } from '@reduxjs/toolkit'
import {
  cardReviewEvent, scenarioDecisionEvent, scenarioCompleteEvent,
  SCENARIOS,
  type ScenarioTemplate, type CardState, type StudyMode,
  type ScenarioRunState, type ScenarioDebrief, type ScenarioDecision,
} from '@ojfbot/seh-study-shared'
import { recordEvent } from './eventsSlice.js'

// Track timing between actions
let lastActionTimestamp = Date.now()

function elapsed(): number {
  const now = Date.now()
  const ms = now - lastActionTimestamp
  lastActionTimestamp = now
  return ms
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- middleware needs loose state typing to avoid circular imports
export const eventMiddleware: Middleware = (store) => (next) => (action: unknown) => {
  const typedAction = action as { type: string; payload?: Record<string, unknown> }
  const stateBefore = store.getState()

  // Execute the action first so state is updated
  const result = next(action)

  switch (typedAction.type) {
    case 'study/answerCard': {
      const payload = typedAction.payload as { correct: boolean } | undefined
      if (!payload) break

      const termIndex = stateBefore.study.currentDeck[stateBefore.study.currentIndex]
      if (termIndex == null) break

      const cardBefore = stateBefore.study.cards.find(
        (c: { termIndex: number }) => c.termIndex === termIndex,
      )
      const boxBefore = cardBefore?.box ?? 1

      store.dispatch(
        recordEvent(
          cardReviewEvent(
            stateBefore.study.mode,
            termIndex,
            payload.correct,
            boxBefore,
            elapsed(),
          ),
        ),
      )
      break
    }

    case 'scenario/updateRun': {
      const payload = typedAction.payload as { run: ScenarioRunState; feedback: string } | undefined
      if (!payload?.run) break

      const prevRun = stateBefore.scenario.activeRun
      if (!prevRun) break

      // Find the new decision (last one in the updated run)
      const decisions = payload.run.decisions
      const lastDecision = decisions[decisions.length - 1]
      if (!lastDecision) break

      const ms = payload.run.missionStatus
      store.dispatch(
        recordEvent(
          scenarioDecisionEvent(
            payload.run.scenarioId,
            lastDecision.nodeId,
            lastDecision.optionId,
            lastDecision.isCorrect,
            lastDecision.isAcceptable,
            lastDecision.termIndices,
            { risk: ms.risk, schedule: ms.schedule, budget: ms.budget },
            elapsed(),
          ),
        ),
      )
      break
    }

    case 'scenario/completeScenario': {
      const debrief = typedAction.payload as ScenarioDebrief | null
      if (!debrief) break

      const prevRun = stateBefore.scenario.activeRun
      const startedAt = prevRun?.startedAt
      const durationMs = startedAt
        ? Date.now() - new Date(startedAt).getTime()
        : 0

      const totalDecisions = debrief.decisions.length
      const correctDecisions = debrief.decisions.filter(
        (d: { isCorrect: boolean }) => d.isCorrect,
      ).length

      // Look up scenario meta for difficulty/categories
      const template = SCENARIOS.find(
        (s: ScenarioTemplate) => s.meta.id === debrief.scenarioId,
      )

      store.dispatch(
        recordEvent(
          scenarioCompleteEvent(
            debrief.scenarioId,
            debrief.score,
            template?.meta.difficulty ?? 'beginner',
            template?.meta.categories ?? [],
            totalDecisions,
            correctDecisions,
            durationMs,
            false,
          ),
        ),
      )
      break
    }

    case 'scenario/abandonScenario': {
      const prevRun = stateBefore.scenario.activeRun
      if (!prevRun) break

      const startedAt = prevRun.startedAt
      const durationMs = Date.now() - new Date(startedAt).getTime()

      store.dispatch(
        recordEvent(
          scenarioCompleteEvent(
            prevRun.scenarioId,
            0,
            'beginner',
            [],
            prevRun.decisions.length,
            prevRun.decisions.filter((d: { isCorrect: boolean }) => d.isCorrect).length,
            durationMs,
            true,
          ),
        ),
      )
      break
    }
  }

  return result
}
