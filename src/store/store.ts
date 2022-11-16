import { configureStore } from '@reduxjs/toolkit'
import { scoreReducer } from './reducers/score/scoreSlice';

export const store = configureStore({
  reducer: {
    score: scoreReducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false });
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch