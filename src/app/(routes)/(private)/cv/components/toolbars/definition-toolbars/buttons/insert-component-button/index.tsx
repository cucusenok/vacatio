"use client";

import { RiInsertRowBottom } from "react-icons/ri";
import type { ToolbarButtonProps } from "@/cv/components/toolbars/definition-toolbars/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui";
import { ComponentPicker, type ComponentPickerProps } from "./component-picker";

type InsertComponentButtonProps = ToolbarButtonProps & ComponentPickerProps;

export const InsertComponentButton = (props: InsertComponentButtonProps) => {
  const {
    className,
    size = 22,
    side = "left",
    offset = 8,
    tooltip = "Insert below",
    ...rest
  } = props;

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger aria-label={tooltip} className={className}>
            <RiInsertRowBottom size={size} />
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={offset}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
      <PopoverContent side="top" className="flex flex-col gap-4 p-4">
        <span className="text-sm font-semibold">{tooltip}</span>
        <ComponentPicker {...rest} />
      </PopoverContent>
    </Popover>
  );
};
