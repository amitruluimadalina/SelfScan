import { useState } from "react";
import { NeutralValue } from "../../../types/responseTypes";

type UseScoreResult = {
  scores: number[];
  updateScore: (questionIndex: number, score: number) => void;
  calculateIsExtroverted: () => boolean;
};

export default function useScore(questionCount: number): UseScoreResult {
  const [scores, setScores] = useState<number[]>(Array(questionCount).fill(0));

  const updateScore = (questionIndex: number, score: number): void => {
    setScores((prevScores) => {
      const newScores = prevScores.slice();
      newScores[questionIndex] = score;
      return newScores;
    });
  };
  const calculateIsExtroverted = () => {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    return questionCount ? totalScore >= questionCount * NeutralValue : false;
  };

  return { scores, updateScore, calculateIsExtroverted };
}
