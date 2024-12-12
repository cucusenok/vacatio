"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "@/helpers/object.helpers";

export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  ref?: React.Ref<React.ElementRef<typeof SwitchPrimitives.Root>>;
  size?: "sm" | "md";
};

const sizes = {
  sm: {
    root: "h-[14.4px] w-[24px]",
    thumb: "h-[11.2px] w-[11.2px] data-[state=checked]:translate-x-[8.6px]",
  },
  md: {
    root: "h-[18px] w-[30px]",
    thumb: "h-[14px] w-[14px] data-[state=checked]:translate-x-3",
  },
};

const Switch = ({ className, size = "md", ...props }: SwitchProps) => (
  <SwitchPrimitives.Root
    className={cn(
      sizes[size].root,
      "focus-visible:ring-offset-background focus-visible:ring-ring peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=unchecked]:bg-[var(--gray-170)]",
      className,
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        sizes[size].thumb,
        "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
);

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
