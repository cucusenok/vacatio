"use client";

import { DndContainer } from "./dnd-container";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useTemplate } from "@/cv/stores/use-template";
import { DefinitionSkeleton } from "./skeleton";

export const SkillsSection = () => {
  const { template } = useTemplate();
  const cv = useDataContext((state) => state.cv);
  if (!cv?.skills) return <DefinitionSkeleton className="h-11 w-full" />;
  const props = template.definitions.skills?.hydrator(cv);
  if (!props) return null;

  return <DndContainer {...props} />;
};
