"use client";

import { useComponentContext } from "@/cv/stores/component-context";
import { useTemplate } from "@/cv/stores/use-template";
import { Autoresize } from "./autoresize";

export const Bullet = () => {
  const c = useComponentContext();
  const { template } = useTemplate();
  const props = template.definitions.bullet?.hydrator(c);
  if (!props) return null;

  return <Autoresize {...props} />;
};
