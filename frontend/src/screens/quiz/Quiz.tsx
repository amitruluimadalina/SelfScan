import { Link, useParams } from "react-router-dom";
import CenteredLayout from "../../components/CenteredLayout";
import useQuestion from "./hooks/useQuestion";
import QuizOption from "./QuizOption";
import { getQuizNavigationData } from "./utils/quizNavigation";
import { quizNavigationButtonText } from "./constants/quizNavigation";

type QuizProps = {
  scores: number[];
  updateScore: (currentStepId: number, score: number) => void;
  stepCount: number;
};

export default function Quiz({ scores, updateScore, stepCount }: QuizProps) {
  const { step } = useParams();
  const currentStepId = parseInt(step!);
  const { question } = useQuestion(step);

  const existingAnswer = scores[currentStepId];
  const { hasPreviousStep, isFinishStep, previousStepLink, nextStepLink } =
    getQuizNavigationData(currentStepId, stepCount);

  return (
    <CenteredLayout>
      <div className="max-w-lg mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{question.text}</h2>
        </div>
        <div className="space-y-2">
          {question.responses.map((option) => (
            <QuizOption
              key={option.score}
              option={option}
              onClick={() => updateScore(currentStepId, option.score)}
              isSelected={existingAnswer === option.score}
            />
          ))}
        </div>

        <div className="flex justify-end mt-4 space-x-4">
          {hasPreviousStep && (
            <Link
              to={previousStepLink}
              className="bg-white text-black px-4 py-2 rounded"
            >
              {quizNavigationButtonText.back}
            </Link>
          )}

          <Link
            to={nextStepLink}
            className={`bg-blue-600 text-white px-4 py-2 rounded ${
              !existingAnswer && "pointer-events-none opacity-50"
            }`}
          >
            {isFinishStep
              ? quizNavigationButtonText.finish
              : quizNavigationButtonText.next}
          </Link>
        </div>
      </div>
    </CenteredLayout>
  );
}
