import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { StudyEvent } from '@ojfbot/seh-study-shared'

const STORAGE_KEY = 'seh-study:events'
const MAX_EVENTS = 5000

function loadEvents(): StudyEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as StudyEvent[]
  } catch { /* ignore */ }
  return []
}

function saveEvents(events: StudyEvent[]) {
  // Keep only most recent MAX_EVENTS to avoid unbounded growth
  const trimmed = events.length > MAX_EVENTS ? events.slice(-MAX_EVENTS) : events
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
}

interface EventsState {
  events: StudyEvent[]
}

const initialState: EventsState = {
  events: loadEvents(),
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    recordEvent(state, action: PayloadAction<StudyEvent>) {
      state.events.push(action.payload)
      saveEvents(state.events)
    },
    recordEvents(state, action: PayloadAction<StudyEvent[]>) {
      state.events.push(...action.payload)
      saveEvents(state.events)
    },
    clearEvents(state) {
      state.events = []
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})

export const { recordEvent, recordEvents, clearEvents } = eventsSlice.actions
export default eventsSlice.reducer
