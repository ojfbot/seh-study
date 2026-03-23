import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PanelTab } from '@ojfbot/seh-study-shared'

interface Thread {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

interface ThreadsState {
  threads: Thread[]
  activeThreadId: string | null
  sidebarExpanded: boolean
  activePanelTab: PanelTab
}

const initialState: ThreadsState = {
  threads: [{ id: 'default', name: 'Main', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }],
  activeThreadId: 'default',
  sidebarExpanded: false,
  activePanelTab: 'sessions',
}

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    toggleSidebar(state) { state.sidebarExpanded = !state.sidebarExpanded },
    setSidebarExpanded(state, action: PayloadAction<boolean>) { state.sidebarExpanded = action.payload },
    setActivePanelTab(state, action: PayloadAction<PanelTab>) { state.activePanelTab = action.payload },
    setActiveThread(state, action: PayloadAction<string>) { state.activeThreadId = action.payload },
    addThread(state, action: PayloadAction<{ id: string; name: string }>) {
      state.threads.push({ ...action.payload, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() })
      state.activeThreadId = action.payload.id
    },
    removeThread(state, action: PayloadAction<string>) {
      if (state.threads.length <= 1) return
      state.threads = state.threads.filter(t => t.id !== action.payload)
      if (state.activeThreadId === action.payload) {
        state.activeThreadId = state.threads[state.threads.length - 1].id
      }
    },
  },
})

export const { toggleSidebar, setSidebarExpanded, setActivePanelTab, setActiveThread, addThread, removeThread } = threadsSlice.actions
export default threadsSlice.reducer
