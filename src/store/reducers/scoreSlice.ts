import { createSlice } from '@reduxjs/toolkit'
import { scoreTypes } from './types'


const initialState: scoreTypes = {
  score: 0,
}
export const counterSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.score +=  action.payload
    },
    decrement: (state) => {
      state.score -= 100
    },
   
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer