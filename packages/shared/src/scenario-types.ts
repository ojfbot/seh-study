import type { Category, CardState } from './types.js'

// ── Scenario identifiers ────────────────────────────────────────────────────

export type ScenarioId = string
export type ScenarioNodeId = string
export type ScenarioDifficulty = 'beginner' | 'intermediate' | 'advanced'

// ── Template types (pre-authored content) ───────────────────────────────────

export interface ScenarioMeta {
  id: ScenarioId
  title: string
  subtitle: string
  difficulty: ScenarioDifficulty
  categories: Category[]
  termIndices: number[]
  estimatedMinutes: number
}

export interface DecisionOption {
  id: string
  text: string
  termIndices: number[]
  isCorrect: boolean
  isAcceptable: boolean
  feedback: string
  nextNodeId: ScenarioNodeId | null
  scoreImpact: { risk: number; schedule: number; budget: number }
}

export interface ScenarioNode {
  id: ScenarioNodeId
  phase: string
  title: string
  narrative: string
  termHighlights: number[]
  decisions: DecisionOption[]
  defaultNextNodeId: ScenarioNodeId | null
}

export interface ScenarioTemplate {
  meta: ScenarioMeta
  nodes: ScenarioNode[]
  startNodeId: ScenarioNodeId
  debriefTemplate: {
    successNarrative: string
    failureNarrative: string
    successThreshold: number
  }
}

// ── Runtime state ───────────────────────────────────────────────────────────

export interface ScenarioDecision {
  nodeId: ScenarioNodeId
  optionId: string
  isCorrect: boolean
  isAcceptable: boolean
  termIndices: number[]
  timestamp: string
}

export interface MissionStatus {
  risk: number
  schedule: number
  budget: number
  phase: string
  termsEncountered: number[]
  termsCorrect: number[]
  termsMissed: number[]
}

export interface ScenarioRunState {
  scenarioId: ScenarioId
  currentNodeId: ScenarioNodeId
  decisions: ScenarioDecision[]
  missionStatus: MissionStatus
  startedAt: string
  completedAt: string | null
}

export interface ScenarioDebrief {
  scenarioId: ScenarioId
  score: number
  decisions: ScenarioDecision[]
  missionStatus: MissionStatus
  termsPromoted: number[]
  termsDemoted: number[]
  completedAt: string
}

export interface ScenarioProgress {
  completedScenarios: Record<
    ScenarioId,
    { bestScore: number; attempts: number; lastCompletedAt: string }
  >
}
