import { type HTMLAttributes } from "react";

type SpacerProps = HTMLAttributes<HTMLDivElement>;

export const Spacer = (props: SpacerProps) => {
  return <div aria-hidden {...props} />;
};
