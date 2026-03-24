import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CardState, StudyMode, Category, LeitnerBox, StudySession } from '@ojfbot/seh-study-shared'
import { initAllCards, promote, demote, GLOSSARY } from '@ojfbot/seh-study-shared'
import { scenarioSrUpdate } from './scenarioActions.js'

const STORAGE_KEY = 'seh-study:cards'
const SESSION_KEY = 'seh-study:sessions'

function loadCards(): CardState[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as CardState[]
      if (parsed.length === GLOSSARY.length) return parsed
    }
  } catch { /* ignore */ }
  return initAllCards(GLOSSARY.length)
}

function saveCards(cards: CardState[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards))
}

function loadSessions(): StudySession[] {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (raw) return JSON.parse(raw) as StudySession[]
  } catch { /* ignore */ }
  return []
}

function saveSessions(sessions: StudySession[]) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessions))
}

interface StudyState {
  cards: CardState[]
  sessions: StudySession[]
  mode: StudyMode
  currentDeck: number[]        // term indices for current study session
  currentIndex: number         // position in deck
  showAnswer: boolean
  selectedCategories: Category[]
  activeSession: StudySession | null
}

const initialState: StudyState = {
  cards: loadCards(),
  sessions: loadSessions(),
  mode: 'flashcard',
  currentDeck: [],
  currentIndex: 0,
  showAnswer: false,
  selectedCategories: [],
  activeSession: null,
}

const studySlice = createSlice({
  name: 'study',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<StudyMode>) {
      state.mode = action.payload
    },
    setSelectedCategories(state, action: PayloadAction<Category[]>) {
      state.selectedCategories = action.payload
    },
    startSession(state, action: PayloadAction<{ deck: number[] }>) {
      const session: StudySession = {
        id: crypto.randomUUID(),
        startedAt: new Date().toISOString(),
        endedAt: null,
        cardsReviewed: 0,
        correct: 0,
        mode: state.mode,
      }
      state.currentDeck = action.payload.deck
      state.currentIndex = 0
      state.showAnswer = false
      state.activeSession = session
    },
    flipCard(state) {
      state.showAnswer = !state.showAnswer
    },
    answerCard(state, action: PayloadAction<{ correct: boolean }>) {
      const termIndex = state.currentDeck[state.currentIndex]
      if (termIndex == null) return

      const cardIdx = state.cards.findIndex(c => c.termIndex === termIndex)
      if (cardIdx === -1) return

      const now = new Date()
      state.cards[cardIdx] = action.payload.correct
        ? promote(state.cards[cardIdx], now)
        : demote(state.cards[cardIdx], now)

      if (state.activeSession) {
        state.activeSession.cardsReviewed++
        if (action.payload.correct) state.activeSession.correct++
      }

      saveCards(state.cards)

      // Advance to next card
      if (state.currentIndex < state.currentDeck.length - 1) {
        state.currentIndex++
        state.showAnswer = false
      }
    },
    endSession(state) {
      if (state.activeSession) {
        state.activeSession.endedAt = new Date().toISOString()
        state.sessions.push(state.activeSession)
        saveSessions(state.sessions)
        state.activeSession = null
      }
      state.currentDeck = []
      state.currentIndex = 0
      state.showAnswer = false
    },
    resetProgress(state) {
      state.cards = initAllCards(GLOSSARY.length)
      state.sessions = []
      saveCards(state.cards)
      saveSessions(state.sessions)
    },
    /** Update a single card directly (for quiz mode). */
    updateCard(state, action: PayloadAction<{ termIndex: number; box: LeitnerBox }>) {
      const idx = state.cards.findIndex(c => c.termIndex === action.payload.termIndex)
      if (idx !== -1) {
        const now = new Date()
        if (action.payload.box > state.cards[idx].box) {
          state.cards[idx] = promote(state.cards[idx], now)
        } else {
          state.cards[idx] = demote(state.cards[idx], now)
        }
        saveCards(state.cards)
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(scenarioSrUpdate, (state, action) => {
      const now = new Date()
      const promoteSet = new Set(action.payload.termsPromoted)
      const demoteSet = new Set(action.payload.termsDemoted)
      for (let i = 0; i < state.cards.length; i++) {
        if (promoteSet.has(state.cards[i].termIndex)) {
          state.cards[i] = promote(state.cards[i], now)
        } else if (demoteSet.has(state.cards[i].termIndex)) {
          state.cards[i] = demote(state.cards[i], now)
        }
      }
      saveCards(state.cards)
    })
  },
})

export const {
  setMode,
  setSelectedCategories,
  startSession,
  flipCard,
  answerCard,
  endSession,
  resetProgress,
  updateCard,
} = studySlice.actions
export default studySlice.reducer
