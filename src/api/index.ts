import axios from "axios";
import { singleQuizModel } from "../app/models/singleQuiz/singleQuizModel";
import { responseInterface } from "./types";

export const getData:()=>Promise<singleQuizModel[]> = async () => {
    const response:responseInterface = await axios.get("http://jservice.io/api/random?count=1")
    return response.data
  }