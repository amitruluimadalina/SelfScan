import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import Home from "./screens/home/Home";
import Score from "./screens/quiz/Score";
import { navigationDetails } from "./constants/navigation";
import useQuestionCount from "./screens/quiz/hooks/useQuestionCount";
import useScore from "./screens/quiz/hooks/useScore";
const Quiz = lazy(() => import("./screens/quiz/Quiz"));
import "./index.css";

export default function App() {
  const { stepCount } = useQuestionCount();
  const { scores, updateScore, calculateIsExtroverted } = useScore(stepCount);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Routes>
          <Route path={navigationDetails.home.path} element={<Home />} />
          <Route path={navigationDetails.quiz.path}>
            <Route index element={<Navigate to="0" />} />
            <Route
              path=":step"
              element={
                <Quiz
                  scores={scores}
                  updateScore={updateScore}
                  stepCount={stepCount}
                />
              }
            />
            <Route
              path="score"
              element={
                <Score calculateIsExtroverted={calculateIsExtroverted} />
              }
            />
          </Route>
          <Route
            path="*"
            element={<Navigate to={navigationDetails.home.path} />}
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
