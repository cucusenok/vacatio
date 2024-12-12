"use client";

import { useComponentContext } from "@/cv/stores/component-context";
import { useTemplate } from "@/cv/stores/use-template";
import { definitionKeys } from "@/cv/templates/constants";
import { Autoresize } from "./autoresize";

export const Heading1 = () => {
  const { template } = useTemplate();
  const c = useComponentContext();
  const props = template.definitions[definitionKeys.heading1]?.hydrator(c);
  if (!props) return null;

  return <Autoresize {...props} />;
};
