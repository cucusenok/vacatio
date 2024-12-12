import { Dropzone } from "@/app/components/dropzone";
import { JUST_UPLOADED_CV_PARAM } from "@/constants/url-params.constants";
import { OnboardingHomeCv } from "./onboarding-home-cv";

const OnboardingPage = (props: PageProps<{ [JUST_UPLOADED_CV_PARAM]: string }>) => {
  const { [JUST_UPLOADED_CV_PARAM]: hasUploadedCv } = props.searchParams;

  return (
    <main className="wrapper flex-x grow">
      {hasUploadedCv ? <OnboardingHomeCv /> : <Dropzone />}
    </main>
  );
};

export default OnboardingPage;
