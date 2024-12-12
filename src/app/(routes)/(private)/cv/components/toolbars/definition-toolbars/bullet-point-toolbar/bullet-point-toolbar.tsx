"use client";

import { Tooltip as ReactTooltip } from "react-tooltip";
import type { ToolbarProps } from "@/cv/components/toolbars/definition-toolbars/types";
import { cn } from "@/helpers/object.helpers";
import { DeleteComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/delete-component-button";
import { MoveComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/drag-component-button";
import { DuplicateComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/duplicate-component-button";
import { useComponentContext } from "@/cv/stores/component-context";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { TooltipProvider } from "@/ui";

export const BulletPointToolbar = (props: ToolbarProps) => {
  const { dndRef, listeners, attributes, children, className, ...rest } = props;
  const c = useComponentContext();

  const { duplicate, remove } = useDataContext((state) => ({
    duplicate: state.duplicateBulletPoint,
    remove: state.removeBulletPoint,
  }));

  return (
    <li
      ref={dndRef}
      data-tooltip-id={c.id}
      className={cn(className, "bullet flex-y z-god gap-4 before:content-['•']")}
      {...rest}
    >
      {children}
      <ReactTooltip
        id={c.id}
        globalCloseEvents={{ clickOutsideAnchor: true, escape: true }}
        className="z-tooltip !p-0"
        clickable
        openOnClick
        place="top"
        data-html2canvas-ignore
        render={() => {
          return (
            <div className="flex-y" data-html2canvas-ignore>
              <TooltipProvider>
                <MoveComponentButton
                  listeners={listeners}
                  attributes={attributes}
                  size={18}
                  className="md flex-center"
                  side="top"
                  tooltip="Drag bullet point"
                />
                <DuplicateComponentButton
                  size={18}
                  className="md flex-center"
                  side="top"
                  onClick={() => duplicate(c)}
                  tooltip="Duplicate bullet point"
                />
                <DeleteComponentButton
                  size={15}
                  className="md flex-center"
                  side="top"
                  tooltip="Delete bullet point"
                  onClick={() => remove(c.sortableId, c.id)}
                  successMessage="Bullet point deleted"
                />
              </TooltipProvider>
            </div>
          );
        }}
      />
    </li>
  );
};
