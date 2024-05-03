import { createApi } from "./quizApi";

const baseURL = "http://localhost:3001/api";
export const api = createApi(baseURL);