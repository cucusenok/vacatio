import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/helpers/object.helpers";

export const AbsoluteCenter = (props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const { children, className } = props;

  return (
    <div className={cn("flex-center absolute bottom-0 left-0 right-0 top-0 z-[-1]", className)}>
      {children}
    </div>
  );
};
