/**
 * Scenario engine — pure functions for interactive SE text adventures.
 *
 * Follows the same pattern as sr-engine.ts: no side effects, injectable `now`.
 */
import type { CardState } from './types.js'
import { promote, demote } from './sr-engine.js'
import type {
  ScenarioTemplate,
  ScenarioRunState,
  ScenarioNode,
  ScenarioDecision,
  MissionStatus,
  ScenarioDebrief,
} from './scenario-types.js'

// ── Helpers ─────────────────────────────────────────────────────────────────

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function uniqueIndices(arrays: number[][]): number[] {
  return [...new Set(arrays.flat())]
}

// ── Core functions ──────────────────────────────────────────────────────────

/** Create initial run state for a scenario. */
export function initScenarioRun(
  template: ScenarioTemplate,
  now = new Date(),
): ScenarioRunState {
  const startNode = template.nodes.find(n => n.id === template.startNodeId)
  return {
    scenarioId: template.meta.id,
    currentNodeId: template.startNodeId,
    decisions: [],
    missionStatus: {
      risk: 30,
      schedule: 80,
      budget: 80,
      phase: startNode?.phase ?? '',
      termsEncountered: [],
      termsCorrect: [],
      termsMissed: [],
    },
    startedAt: now.toISOString(),
    completedAt: null,
  }
}

/** Look up the current node from the template. */
export function getCurrentNode(
  template: ScenarioTemplate,
  run: ScenarioRunState,
): ScenarioNode | null {
  return template.nodes.find(n => n.id === run.currentNodeId) ?? null
}

/** Apply a decision and advance the scenario. */
export function applyDecision(
  template: ScenarioTemplate,
  run: ScenarioRunState,
  optionId: string,
  now = new Date(),
): ScenarioRunState {
  const node = getCurrentNode(template, run)
  if (!node) return run

  const option = node.decisions.find(d => d.id === optionId)
  if (!option) return run

  const decision: ScenarioDecision = {
    nodeId: node.id,
    optionId: option.id,
    isCorrect: option.isCorrect,
    isAcceptable: option.isAcceptable,
    termIndices: option.termIndices,
    timestamp: now.toISOString(),
  }

  // Update mission status gauges
  const ms = run.missionStatus
  const newTermsEncountered = uniqueIndices([
    ms.termsEncountered,
    node.termHighlights,
    option.termIndices,
  ])
  const newTermsCorrect =
    option.isCorrect || option.isAcceptable
      ? uniqueIndices([ms.termsCorrect, option.termIndices])
      : ms.termsCorrect
  const newTermsMissed =
    !option.isCorrect && !option.isAcceptable
      ? uniqueIndices([ms.termsMissed, option.termIndices])
      : ms.termsMissed

  // Determine next node
  const nextNodeId = option.nextNodeId ?? node.defaultNextNodeId
  const nextNode = nextNodeId
    ? template.nodes.find(n => n.id === nextNodeId)
    : null

  const newMissionStatus: MissionStatus = {
    risk: clamp(ms.risk + option.scoreImpact.risk, 0, 100),
    schedule: clamp(ms.schedule + option.scoreImpact.schedule, 0, 100),
    budget: clamp(ms.budget + option.scoreImpact.budget, 0, 100),
    phase: nextNode?.phase ?? ms.phase,
    termsEncountered: newTermsEncountered,
    termsCorrect: newTermsCorrect,
    termsMissed: newTermsMissed,
  }

  return {
    ...run,
    currentNodeId: nextNodeId ?? run.currentNodeId,
    decisions: [...run.decisions, decision],
    missionStatus: newMissionStatus,
    completedAt: nextNodeId === null ? now.toISOString() : null,
  }
}

/** Check if the scenario has reached a terminal node. */
export function isScenarioComplete(
  template: ScenarioTemplate,
  run: ScenarioRunState,
): boolean {
  if (run.completedAt !== null) return true
  const node = getCurrentNode(template, run)
  if (!node) return true
  // Terminal if we already made a decision on this node and there's no next
  const lastDecision = run.decisions[run.decisions.length - 1]
  if (lastDecision?.nodeId === node.id) {
    const option = node.decisions.find(d => d.id === lastDecision.optionId)
    const nextId = option?.nextNodeId ?? node.defaultNextNodeId
    return nextId === null
  }
  return false
}

/** Compute a score (0-100) from the run state. */
export function computeScore(run: ScenarioRunState): number {
  const { decisions, missionStatus } = run
  if (decisions.length === 0) return 0

  // Decision quality: correct=10, acceptable=4, incorrect=0
  const maxDecisionPoints = decisions.length * 10
  const decisionPoints = decisions.reduce((sum, d) => {
    if (d.isCorrect) return sum + 10
    if (d.isAcceptable) return sum + 4
    return sum
  }, 0)
  const decisionScore = (decisionPoints / maxDecisionPoints) * 70

  // Mission health bonus (30% weight)
  const healthAvg =
    (clamp(100 - missionStatus.risk, 0, 100) +
      missionStatus.schedule +
      missionStatus.budget) /
    3
  const healthScore = (healthAvg / 100) * 30

  return Math.round(decisionScore + healthScore)
}

/** Generate a full debrief from a completed scenario run. */
export function computeDebrief(
  template: ScenarioTemplate,
  run: ScenarioRunState,
  now = new Date(),
): ScenarioDebrief {
  const score = computeScore(run)
  const { termsCorrect, termsMissed } = run.missionStatus

  return {
    scenarioId: run.scenarioId,
    score,
    decisions: run.decisions,
    missionStatus: run.missionStatus,
    termsPromoted: termsCorrect,
    termsDemoted: termsMissed.filter(t => !termsCorrect.includes(t)),
    completedAt: run.completedAt ?? now.toISOString(),
  }
}

/** Apply scenario debrief results to the SR card deck. */
export function applySrUpdates(
  cards: CardState[],
  debrief: ScenarioDebrief,
  now = new Date(),
): CardState[] {
  const promoteSet = new Set(debrief.termsPromoted)
  const demoteSet = new Set(debrief.termsDemoted)

  return cards.map(card => {
    if (promoteSet.has(card.termIndex)) return promote(card, now)
    if (demoteSet.has(card.termIndex)) return demote(card, now)
    return card
  })
}
