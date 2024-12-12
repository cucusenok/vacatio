"use client";

import { DndContainer } from "./dnd-container";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useTemplate } from "@/cv/stores/use-template";

export const LanguagesSection = () => {
  const { template } = useTemplate();
  const cv = useDataContext((state) => state.cv);
  if (!cv) return null;
  const props = template.definitions.languages?.hydrator(cv);
  if (!props) return null;

  return <DndContainer {...props} />;
};
