"use client";

import { PiHandGrabbing } from "react-icons/pi";
import { type DraggableAttributes, useDndContext } from "@dnd-kit/core";
import { type SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import type { ToolbarButtonProps } from "@/cv/components/toolbars/definition-toolbars/types";
import { cn } from "@/helpers/object.helpers";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui";

type MoveComponentButton = {
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
} & ToolbarButtonProps;

export const MoveComponentButton = (props: MoveComponentButton) => {
  const {
    listeners,
    attributes,
    className,
    tooltip = "Drag item",
    size = 22,
    offset = 8,
    side = "left",
  } = props;
  const { active } = useDndContext();

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(className, "cursor-grab")}
        {...listeners}
        {...attributes}
        aria-label={tooltip}
        tabIndex={-1}
      >
        <PiHandGrabbing size={size} aria-hidden />
      </TooltipTrigger>

      {!active && (
        <TooltipContent sideOffset={offset} side={side}>
          {tooltip}
        </TooltipContent>
      )}
    </Tooltip>
  );
};
