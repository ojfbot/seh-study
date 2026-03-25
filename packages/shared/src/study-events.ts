/**
 * Study event stream — structured interaction logging for adaptive learning.
 *
 * Every user interaction emits a StudyEvent. These feed the performance model
 * and (later) the agent training data pipeline.
 *
 * Pure types + helper functions. No side effects — persistence is the caller's job.
 */
import type { StudyMode, Category } from './types.js'
import type { ScenarioId, ScenarioNodeId, ScenarioDifficulty } from './scenario-types.js'

// ── Event types ─────────────────────────────────────────────────────────────

/** Flashcard/quiz/match interaction. */
export interface CardReviewEvent {
  type: 'card-review'
  timestamp: string
  mode: StudyMode
  termIndex: number
  correct: boolean
  responseTimeMs: number
  /** Which box the card was in BEFORE this review. */
  boxBefore: number
}

/** A single decision within a scenario. */
export interface ScenarioDecisionEvent {
  type: 'scenario-decision'
  timestamp: string
  scenarioId: ScenarioId
  nodeId: ScenarioNodeId
  optionId: string
  correct: boolean
  acceptable: boolean
  termIndices: number[]
  responseTimeMs: number
  /** Snapshot of mission status after this decision. */
  missionStatus: { risk: number; schedule: number; budget: number }
}

/** Scenario completed (or abandoned). */
export interface ScenarioCompleteEvent {
  type: 'scenario-complete'
  timestamp: string
  scenarioId: ScenarioId
  score: number
  difficulty: ScenarioDifficulty
  categories: Category[]
  totalDecisions: number
  correctDecisions: number
  durationMs: number
  abandoned: boolean
}

/** Study session start/end boundaries. */
export interface SessionEvent {
  type: 'session-start' | 'session-end'
  timestamp: string
  mode: StudyMode | 'scenario'
}

export type StudyEvent =
  | CardReviewEvent
  | ScenarioDecisionEvent
  | ScenarioCompleteEvent
  | SessionEvent

// ── Event helpers ───────────────────────────────────────────────────────────

/** Create a card review event. */
export function cardReviewEvent(
  mode: StudyMode,
  termIndex: number,
  correct: boolean,
  boxBefore: number,
  responseTimeMs: number,
  now = new Date(),
): CardReviewEvent {
  return {
    type: 'card-review',
    timestamp: now.toISOString(),
    mode,
    termIndex,
    correct,
    responseTimeMs,
    boxBefore,
  }
}

/** Create a scenario decision event. */
export function scenarioDecisionEvent(
  scenarioId: ScenarioId,
  nodeId: ScenarioNodeId,
  optionId: string,
  correct: boolean,
  acceptable: boolean,
  termIndices: number[],
  missionStatus: { risk: number; schedule: number; budget: number },
  responseTimeMs: number,
  now = new Date(),
): ScenarioDecisionEvent {
  return {
    type: 'scenario-decision',
    timestamp: now.toISOString(),
    scenarioId,
    nodeId,
    optionId,
    correct,
    acceptable,
    termIndices,
    responseTimeMs,
    missionStatus,
  }
}

/** Create a scenario completion event. */
export function scenarioCompleteEvent(
  scenarioId: ScenarioId,
  score: number,
  difficulty: ScenarioDifficulty,
  categories: Category[],
  totalDecisions: number,
  correctDecisions: number,
  durationMs: number,
  abandoned: boolean,
  now = new Date(),
): ScenarioCompleteEvent {
  return {
    type: 'scenario-complete',
    timestamp: now.toISOString(),
    scenarioId,
    score,
    difficulty,
    categories,
    totalDecisions,
    correctDecisions,
    durationMs,
    abandoned,
  }
}
