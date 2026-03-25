import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import threadsReducer from './threadsSlice.js'
import chatReducer from './chatSlice.js'
import studyReducer from './studySlice.js'
import scenarioReducer from './scenarioSlice.js'
import eventsReducer from './eventsSlice.js'
import { eventMiddleware } from './eventMiddleware.js'

export const store = configureStore({
  reducer: {
    threads: threadsReducer,
    chat: chatReducer,
    study: studyReducer,
    scenario: scenarioReducer,
    events: eventsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
