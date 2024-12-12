"use client";

import type { CvWithRelations } from "@/types/cv.types";
import { usePusher } from "@/app/ws/use-pusher";
import { AutosaveForm } from "./home-cv/autosave-form";

const Cv = (props: { cv: CvWithRelations }) => {
  const { cv } = props;

  return <AutosaveForm user={cv} />;
};

export const UploadedCv = () => {
  const cv = usePusher((state) => state.pushable?.uploadedCv);
  if (!cv) return null;

  return <Cv cv={cv} />;
};
