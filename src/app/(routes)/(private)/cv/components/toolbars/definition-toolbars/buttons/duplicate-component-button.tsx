"use client";

import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import type { ToolbarButtonProps } from "@/cv/components/toolbars/definition-toolbars/types";
import type { NestedComponent } from "@/cv/templates/types/sortable-context";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui";

type DuplicateComponentButtonProps = ToolbarButtonProps & {
  onClick?: (c?: NestedComponent) => void;
};

export const DuplicateComponentButton = (props: DuplicateComponentButtonProps) => {
  const {
    className,
    size = 22,
    side = "top",
    offset = 8,
    tooltip = "Duplicate item",
    onClick,
  } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        aria-label={tooltip}
        title={tooltip}
        className={className}
        onClick={handleClick}
        tabIndex={-1}
      >
        <HiOutlineDocumentDuplicate size={size} aria-hidden />
      </TooltipTrigger>
      <TooltipContent side={side} sideOffset={offset}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};
