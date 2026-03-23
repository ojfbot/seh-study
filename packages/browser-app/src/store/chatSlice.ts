import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Message } from '@ojfbot/seh-study-shared'

interface ChatState {
  messages: Message[]
  draftInput: string
  isLoading: boolean
  streamingContent: string
}

const initialState: ChatState = {
  messages: [],
  draftInput: '',
  isLoading: false,
  streamingContent: '',
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setDraftInput(state, action: PayloadAction<string>) { state.draftInput = action.payload },
    setLoading(state, action: PayloadAction<boolean>) { state.isLoading = action.payload },
    setStreamingContent(state, action: PayloadAction<string>) { state.streamingContent = action.payload },
    addMessage(state, action: PayloadAction<Message>) { state.messages.push(action.payload) },
    clearMessages(state) { state.messages = [] },
  },
})

export const { setDraftInput, setLoading, setStreamingContent, addMessage, clearMessages } = chatSlice.actions
export default chatSlice.reducer
