import { navigationDetails } from "../../../constants/navigation";

export function getQuizNavigationData(
  currentStepId: number,
  stepCount: number =0
) {
  const hasPreviousStep = currentStepId > 0;
  const isFinishStep = currentStepId === stepCount - 1;
  const previousStepId = currentStepId - 1;
  const nextStepId = currentStepId + 1;

  return {
    hasPreviousStep,
    isFinishStep,
    previousStepLink: `${navigationDetails.quiz.path}/${previousStepId}`,
    nextStepLink: isFinishStep
      ? `${navigationDetails.quiz.path}/score`
      : `${navigationDetails.quiz.path}/${nextStepId}`,
  };
}
