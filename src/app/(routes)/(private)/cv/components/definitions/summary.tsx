"use client";

import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useTemplate } from "@/cv/stores/use-template";
import { definitionKeys } from "@/cv/templates/constants";
import { Autoresize } from "./autoresize";
import { DefinitionSkeleton } from "./skeleton";

export const Summary = () => {
  const { template } = useTemplate();
  const cv = useDataContext((state) => state.cv);
  if (!cv?.summary) return <DefinitionSkeleton className="h-20 w-full" />;
  const props = template.definitions[definitionKeys.summary]?.hydrator(cv);
  if (!props) return null;

  return <Autoresize {...props} />;
};
