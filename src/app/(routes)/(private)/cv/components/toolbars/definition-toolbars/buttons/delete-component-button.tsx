"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { ToolbarButtonProps } from "@/cv/components/toolbars/definition-toolbars/types";
import { cn } from "@/helpers/object.helpers";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui";
import { useComponentContext } from "@/cv/stores/component-context";
import { useCrudInstance } from "@/cv/stores/crud/crud-provider";
import { GarbageBin } from "@/icons";

type DeleteComponentButtonProps = ToolbarButtonProps & {
  onClick?: () => void;
  successMessage?: string;
};

export const DeleteComponentButton = (props: DeleteComponentButtonProps) => {
  const {
    className,
    size = 19,
    side = "left",
    offset = 8,
    tooltip = "Delete item",
    onClick,
    successMessage = "Item deleted",
  } = props;
  const remove = useCrudInstance((state) => state.remove);
  const c = useComponentContext();
  const [isClicked, setIsClicked] = useState(false);

  const onDelete = () => {
    if (isClicked) {
      if (onClick) onClick();
      else remove({ id: c.id, sortableId: c.sortableId });

      toast.success(successMessage);
      setIsClicked(false);
      return;
    }
    setIsClicked(true);
  };

  return (
    <Tooltip open={isClicked ? true : undefined}>
      <TooltipTrigger
        onClick={onDelete}
        aria-label={tooltip}
        tabIndex={-1}
        className={cn(isClicked && "danger hover:!bg-danger", className)}
      >
        <GarbageBin size={size} />
      </TooltipTrigger>
      <TooltipContent side={side} sideOffset={offset}>
        {isClicked ? "Confirm delete" : tooltip}
      </TooltipContent>
    </Tooltip>
  );
};
