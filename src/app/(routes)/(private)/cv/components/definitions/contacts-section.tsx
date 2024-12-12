"use client";

import { DndContainer } from "./dnd-container";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useTemplate } from "@/cv/stores/use-template";
import { DefinitionSkeleton } from "./skeleton";

export const ContactSection = () => {
  const cv = useDataContext((state) => state.cv);
  const { template } = useTemplate();
  if (!cv?.contacts) return <DefinitionSkeleton className="h-11 w-full" />;
  const props = template.definitions.contacts?.hydrator(cv);
  if (!props) return null;

  return <DndContainer {...props} />;
};
