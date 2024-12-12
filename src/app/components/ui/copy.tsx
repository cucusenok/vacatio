"use client";

import { type HTMLAttributes, type PropsWithChildren } from "react";
import cn from "classnames";
import { toast } from "sonner";
import { CopyIcon } from "@/icons";

export type CopyProps = PropsWithChildren<{
  value: string;
  withIcon?: boolean;
}> &
  HTMLAttributes<HTMLButtonElement>;

export const Copy = (props: CopyProps) => {
  const { children, value, withIcon, className, ...rest } = props;
  const copy = () => {
    void navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  return (
    <button
      onClick={copy}
      className={cn(className, { "flex-y group w-min gap-2": withIcon })}
      title={`Copy ${value}`}
      aria-label={`Copy ${value}`}
      {...rest}
    >
      <span className="sr-only">Copy</span>
      {children}
      {withIcon && (
        <CopyIcon
          className="text-secondary group-hover:text-white"
          fontSize={20}
          aria-hidden="true"
        />
      )}
    </button>
  );
};
