import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appSlice'

export const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof appStore.getState>

export type AppDispatch = typeof appStore.dispatch
