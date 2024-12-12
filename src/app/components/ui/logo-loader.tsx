import type { HTMLAttributes } from "react";
import { cn } from "@/helpers/object.helpers";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "scale-[0.25]",
  md: "scale-[0.5]",
  lg: "",
};

export const LogoLoader = (props: Props) => {
  const { className, size = "lg", ...rest } = props;

  return (
    <div
      className={cn("dots-loader", sizes[size], className)}
      aria-label="Loading..."
      role="status"
      aria-live="polite"
      {...rest}
    />
  );
};
