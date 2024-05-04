import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import BlueRoundedButton from "../../components/BlueRoundedButton";
import CenteredLayout from "../../components/CenteredLayout";
import { defaultAnimationOptions } from "../../constants/defaultAnimationSettings";
import { homePageText } from "../../constants/info";
import { navigationDetails } from "../../constants/navigation";
import clouds from "../../assets/clouds.json"

export default function Home() {
  return (
    <CenteredLayout>
      <div className="text-center lg:flex lg:items-center lg:justify-center">
        <div className="lg:text-left lg:mr-16">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
            {homePageText.title}
          </h1>
          <div className="max-w-lg text-gray-700 mb-8">
            {homePageText.intro}
          </div>
          <Link to={navigationDetails.quiz.path}>
            <BlueRoundedButton text={homePageText.redirectButton} />
          </Link>
        </div>
        <div className="mt-8 lg:mt-0">
          <Lottie
            options={{ ...defaultAnimationOptions, animationData: clouds }}
            height={300}
            width={300}
            speed={0.5}
          />
        </div>
      </div>
    </CenteredLayout>
  );
}
