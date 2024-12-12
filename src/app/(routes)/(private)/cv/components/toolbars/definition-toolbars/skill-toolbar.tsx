"use client";

import { Tooltip as ReactTooltip } from "react-tooltip";
import type { ToolbarProps } from "./types";
import { useComponentContext } from "@/cv/stores/component-context";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { TooltipProvider } from "@/ui";
import { DeleteComponentButton } from "./buttons/delete-component-button";
import { MoveComponentButton } from "./buttons/drag-component-button";
import { DuplicateComponentButton } from "./buttons/duplicate-component-button";

export const SkillToolbar = (props: ToolbarProps) => {
  const { dndRef, listeners, attributes, children, className, ...rest } = props;
  const c = useComponentContext();
  const { duplicate, remove } = useDataContext((state) => ({
    duplicate: state.duplicate,
    remove: state.remove,
  }));

  return (
    <li ref={dndRef} data-tooltip-id={c.id} className={className} {...rest}>
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
                  tooltip="Drag skill"
                />
                <DuplicateComponentButton
                  size={18}
                  className="md flex-center"
                  side="top"
                  onClick={() => duplicate("skills", c)}
                  tooltip="Duplicate skill"
                />
                <DeleteComponentButton
                  size={15}
                  className="md flex-center"
                  side="top"
                  tooltip="Delete skill"
                  onClick={() => remove("skills", c)}
                  successMessage="Skill deleted"
                />
              </TooltipProvider>
            </div>
          );
        }}
      />
    </li>
  );
};
