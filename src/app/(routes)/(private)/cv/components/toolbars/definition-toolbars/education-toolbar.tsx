"use client";

import { Tooltip as ReactTooltip } from "react-tooltip";
import type { ToolbarProps } from "./types";
import { TooltipProvider } from "@/app/components/ui";
import { useComponentContext } from "@/cv/stores/component-context";
import { MoveComponentButton } from "./buttons/drag-component-button";

export const EducationToolbar = (props: ToolbarProps) => {
  const { dndRef, listeners, attributes, children, className, ...rest } = props;
  const c = useComponentContext();

  return (
    <li ref={dndRef} data-tooltip-id={c.id} className={className} {...rest}>
      {children}
      <ReactTooltip
        id={c.id}
        globalCloseEvents={{ clickOutsideAnchor: true, escape: true }}
        className="bg-modal z-tooltip !p-0"
        clickable
        openOnClick
        openEvents={{ mouseenter: true }}
        place="top"
        delayShow={400}
        offset={60}
        data-html2canvas-ignore
        render={() => {
          return (
            <div className="flex-y" data-html2canvas-ignore>
              <TooltipProvider>
                <MoveComponentButton
                  listeners={listeners}
                  attributes={attributes}
                  className="!text-lg"
                  tooltip="Drag education"
                />
              </TooltipProvider>
            </div>
          );
        }}
      />
    </li>
  );
};
