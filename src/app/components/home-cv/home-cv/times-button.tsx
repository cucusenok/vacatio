"use client";

import { type ButtonHTMLAttributes } from "react";
import { setDirty, triggerSubmission } from "@/helpers/form.helpers";
import { cn } from "@/helpers/object.helpers";
import type { UserRelationsPicker } from "@/constants/user.constants";
import { GarbageBin } from "@/icons";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  relation: keyof typeof UserRelationsPicker;
  onClick: () => void;
};

export const TimesButton = (props: Props) => {
  const { className, relation, onClick } = props;

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick();
    setDirty(relation);
    triggerSubmission(event);
  };

  return (
    <button
      type="button"
      onClick={onDelete}
      className={cn("invisible group-hover:visible", className)}
      title="Delete item"
      aria-label="Delete item"
    >
      <GarbageBin aria-hidden />
    </button>
  );
};
