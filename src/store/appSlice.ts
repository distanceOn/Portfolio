import { createSlice } from '@reduxjs/toolkit'

type AppSliceState = {
  button: boolean
}
const initialState: AppSliceState = {
  button: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeButton: (state) => {
      state.button = !state.button
    },
  },
})

export const { changeButton } = appSlice.actions

export const appReducer = appSlice.reducer
