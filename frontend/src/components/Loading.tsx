import loading from "../../public/assets/animation/loading.json";
import { defaultAnimationOptions } from "../../public/assets/animation/animationOptions/defaultAnimationSettings";
import CenteredLayout from "./CenteredLayout";
import Lottie from "react-lottie";

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
