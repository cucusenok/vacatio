"use client";

import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useTemplate } from "@/cv/stores/use-template";
import { Autoresize } from "./autoresize";
import { DefinitionSkeleton } from "./skeleton";

export const Username = () => {
  const { template } = useTemplate();
  const cv = useDataContext((state) => state.cv);
  if (!cv?.name) return <DefinitionSkeleton className="h-10 w-full" />;
  const props = template.definitions.username?.hydrator(cv);
  if (!props) return null;

  return <Autoresize {...props} />;
};
