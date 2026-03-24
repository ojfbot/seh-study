import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
  ScenarioId,
  ScenarioRunState,
  ScenarioDebrief,
  ScenarioProgress,
} from '@ojfbot/seh-study-shared'

// ── localStorage persistence ────────────────────────────────────────────────

const PROGRESS_KEY = 'seh-study:scenario-progress'
const ACTIVE_KEY = 'seh-study:scenario-active'

function loadProgress(): ScenarioProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (raw) return JSON.parse(raw) as ScenarioProgress
  } catch { /* ignore */ }
  return { completedScenarios: {} }
}

function saveProgress(progress: ScenarioProgress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

function loadActiveRun(): ScenarioRunState | null {
  try {
    const raw = localStorage.getItem(ACTIVE_KEY)
    if (raw) return JSON.parse(raw) as ScenarioRunState
  } catch { /* ignore */ }
  return null
}

function saveActiveRun(run: ScenarioRunState | null) {
  if (run) {
    localStorage.setItem(ACTIVE_KEY, JSON.stringify(run))
  } else {
    localStorage.removeItem(ACTIVE_KEY)
  }
}

// ── Slice state ─────────────────────────────────────────────────────────────

interface ScenarioSliceState {
  selectedScenarioId: ScenarioId | null
  activeRun: ScenarioRunState | null
  showFeedback: boolean
  lastDecisionFeedback: string | null
  debrief: ScenarioDebrief | null
  progress: ScenarioProgress
}

const initialState: ScenarioSliceState = {
  selectedScenarioId: null,
  activeRun: loadActiveRun(),
  showFeedback: false,
  lastDecisionFeedback: null,
  debrief: null,
  progress: loadProgress(),
}

const scenarioSlice = createSlice({
  name: 'scenario',
  initialState,
  reducers: {
    selectScenario(state, action: PayloadAction<ScenarioId | null>) {
      state.selectedScenarioId = action.payload
      state.debrief = null
    },
    setActiveRun(state, action: PayloadAction<ScenarioRunState>) {
      state.activeRun = action.payload
      state.showFeedback = false
      state.lastDecisionFeedback = null
      state.debrief = null
      saveActiveRun(action.payload)
    },
    updateRun(state, action: PayloadAction<{ run: ScenarioRunState; feedback: string }>) {
      state.activeRun = action.payload.run
      state.showFeedback = true
      state.lastDecisionFeedback = action.payload.feedback
      saveActiveRun(action.payload.run)
    },
    advanceNode(state) {
      state.showFeedback = false
      state.lastDecisionFeedback = null
    },
    completeScenario(state, action: PayloadAction<ScenarioDebrief>) {
      const debrief = action.payload
      state.debrief = debrief
      state.activeRun = null
      state.showFeedback = false
      state.lastDecisionFeedback = null
      saveActiveRun(null)

      // Update progress
      const prev = state.progress.completedScenarios[debrief.scenarioId]
      state.progress.completedScenarios[debrief.scenarioId] = {
        bestScore: Math.max(prev?.bestScore ?? 0, debrief.score),
        attempts: (prev?.attempts ?? 0) + 1,
        lastCompletedAt: debrief.completedAt,
      }
      saveProgress(state.progress)
    },
    abandonScenario(state) {
      state.activeRun = null
      state.showFeedback = false
      state.lastDecisionFeedback = null
      state.debrief = null
      saveActiveRun(null)
    },
  },
})

export const {
  selectScenario,
  setActiveRun,
  updateRun,
  advanceNode,
  completeScenario,
  abandonScenario,
} = scenarioSlice.actions
export default scenarioSlice.reducer
