import CenteredLayout from "./CenteredLayout";
import Lottie from "react-lottie";
import loading from "../assets/loading.json";
import { defaultAnimationOptions } from "../constants/defaultAnimationSettings";

export default function ErrorFallback() {
  return (
    <CenteredLayout>
      <Lottie
        options={{ ...defaultAnimationOptions, animationData: loading }}
        height={400}
        width={400}
      />
    </CenteredLayout>
  );
}
