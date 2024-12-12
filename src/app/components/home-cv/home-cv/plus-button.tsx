import type { HTMLAttributes } from "react";
import { RoundedPlus } from "@/icons";

export const PlusButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" aria-label="Add item" title="Add item" className="text-body" {...props}>
      <RoundedPlus size={20} aria-hidden />
    </button>
  );
};
