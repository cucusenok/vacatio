"use client";

import type { CvExperienceEntry } from "@/types/cv.types";
import { DndContainer } from "./dnd-container";
import { useComponentContext } from "@/cv/stores/component-context";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useTemplate } from "@/cv/stores/use-template";
import { definitionKeys } from "@/cv/templates/constants";
import { DefinitionSkeleton } from "./skeleton";

export const ExperienceEntry = () => {
  const { template } = useTemplate();
  const c = useComponentContext<CvExperienceEntry>();
  const props = template.definitions[definitionKeys.experienceEntry]?.hydrator(c);
  if (!props) return null;

  return <DndContainer {...props} />;
};

export const Experience = () => {
  const { template } = useTemplate();
  const cv = useDataContext((state) => state.cv);
  if (!cv?.experiences) return <DefinitionSkeleton className="h-48 w-full" />;
  const props = template.definitions[definitionKeys.experiences]?.hydrator(cv);
  if (!props) return null;

  return <DndContainer {...props} />;
};
