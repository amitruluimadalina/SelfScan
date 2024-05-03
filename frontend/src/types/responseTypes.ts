const IntrovertValue = 1;
export const NeutralValue = 2;
const ExtrovertValue = 3;

export type ResponseScore = typeof IntrovertValue | typeof NeutralValue | typeof ExtrovertValue;

export type ResponseOption = {
  text: string;
  score: ResponseScore;
};

type Question = {
  id: number;
  text: string;
  responses: ResponseOption[];
};

export type Api = {
  getQuestion: (id: string | undefined) => Promise<Question>;
  getQuestionCount: () => Promise<number>;
};
