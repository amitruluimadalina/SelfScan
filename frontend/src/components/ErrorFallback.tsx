import Lottie from "react-lottie";
import error from "../assets/error.json";
import { defaultAnimationOptions } from "../constants/defaultAnimationSettings";
import CenteredLayout from "./CenteredLayout";

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
