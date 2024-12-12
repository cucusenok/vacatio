"use client";

import type { ToolbarProps } from "./types";

export const ExperienceToolbar = (props: ToolbarProps) => {
  const { dndRef, children, className, ...rest } = props;

  return (
    <li ref={dndRef} className={className} {...rest}>
      {children}
    </li>
  );
};
