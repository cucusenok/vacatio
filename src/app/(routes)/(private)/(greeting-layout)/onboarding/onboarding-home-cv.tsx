"use client";

import { AutosaveForm } from "@/app/components/home-cv/home-cv/autosave-form";
import { usePusher } from "@/app/ws/use-pusher";
import { FullscreenLoader } from "@/ui";

export const OnboardingHomeCv = () => {
  const uploadedCv = usePusher((state) => state.pushable?.uploadedCv);

  if (!uploadedCv) {
    return <FullscreenLoader />;
  }

  return <AutosaveForm user={uploadedCv} />;
};
