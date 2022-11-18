import { initialQuiz } from "./types";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from "../../../api";

const initialState:initialQuiz  = {
    quiz: [],
  }




//   export const getQuiz = createAsyncThunk('quiz' , async ()=>{
// return await getData().then((response)=> response.data)
//   })    