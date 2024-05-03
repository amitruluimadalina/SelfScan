import useSWR from "swr";
import { api } from "../../../api/apiEntity";

export default function useQuestionCount() {
  const { data: stepCount } = useSWR("count", api.getQuestionCount, {suspense: true});

  return {
    stepCount,
  };
}
