import { defaultAnimationOptions } from "../assets/animation/animationOptions/defaultAnimationSettings";
import CenteredLayout from "./CenteredLayout";
import Lottie from "react-lottie";
import error from "../assets/animation/error.json";

export default function ErrorFallback() {
  return (
    <CenteredLayout>
      <Lottie
        options={{ ...defaultAnimationOptions, animationData: error }}
        height={400}
        width={400}
      />
    </CenteredLayout>
  );
}
