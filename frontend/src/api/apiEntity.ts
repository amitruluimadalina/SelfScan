import { createApi } from "./quizApi";

const baseURL = "http://localhost:3001";
export const api = createApi(baseURL);