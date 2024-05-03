import useSWR from "swr";
import { api } from "../../../api/apiEntity";

export default function useQuestion(step: string | undefined) {
  const { data: question } = useSWR(step, () => api.getQuestion(step), {
    suspense: true,
  });

  return {
    question,
  };
}
