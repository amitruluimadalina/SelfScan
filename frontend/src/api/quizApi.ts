import axios, { AxiosInstance } from "axios";
import { Api } from "../types/responseTypes";

export const createApi = (baseURL: string): Api => {
  const api: AxiosInstance = axios.create({
    baseURL: baseURL,
  });

  const getQuestionCount = async () => {
    const response = await api.get(`/questions/count`);
    return response.data;
  };

  const getQuestion = async (id: string | undefined) => {
    const response = await api.get(`/questions/${id}`);
    return response.data;
  };

  return { getQuestion, getQuestionCount };
};
