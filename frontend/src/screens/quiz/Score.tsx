import CenteredLayout from "../../components/CenteredLayout";
import Lottie from "react-lottie";
import { scorePageText } from "../../constants/info";
import celebrate from "/assets/animation/celebrate.json?url";
import {defaultAnimationOptions} from "../../constants/defaultAnimationSettings"

type ScoreProps = {
  calculateIsExtroverted: () => boolean;
};

export default function Score({ calculateIsExtroverted }: ScoreProps) {
  const isExtroverted = calculateIsExtroverted();
  const resultText =
    scorePageText.result[isExtroverted ? "extroverted" : "introverted"];
  const descriptionText =
    scorePageText.description[isExtroverted ? "extroverted" : "introverted"];

  return (
    <CenteredLayout>
      <div className="flex flex-col items-center justify-center w-full p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">{scorePageText.title}</h1>
          <h2 className="text-4xl font-semibold">{resultText}</h2>
        </div>
        <Lottie
          options={{ ...defaultAnimationOptions, animationData: celebrate }}
          height={300}
          width={300}
        />
        <p className="text-lg text-center px-10">{descriptionText}</p>
      </div>
    </CenteredLayout>
  );
}
