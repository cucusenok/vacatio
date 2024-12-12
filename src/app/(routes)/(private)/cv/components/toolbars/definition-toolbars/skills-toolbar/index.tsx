"use client";

import type { ToolbarProps } from "@/cv/components/toolbars/definition-toolbars/types";
import { DeleteComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/delete-component-button";
import { MoveComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/drag-component-button";
import { InsertComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/insert-component-button";
import { useComponentContext } from "@/cv/stores/component-context";
import { HoverCard, HoverCardContent, HoverCardTrigger, TooltipProvider } from "@/ui";
import { SkillPicker } from "./skill-picker";

export const SkillsToolbar = (props: ToolbarProps) => {
  const { dndRef, listeners, attributes, children, className, ...rest } = props;
  const c = useComponentContext();

  return (
    <li ref={dndRef} data-tooltip-id={c.id} className={className} {...rest}>
      <HoverCard openDelay={0}>
        <HoverCardTrigger>{children}</HoverCardTrigger>
        <HoverCardContent
          data-html2canvas-ignore
          side="left"
          sideOffset={65}
          className="reset flex flex-col gap-2"
        >
          <TooltipProvider>
            <MoveComponentButton
              listeners={listeners}
              attributes={attributes}
              className="md accent-2 flex-center"
              tooltip="Drag all skills"
              side="left"
            />
            <SkillPicker />
            <InsertComponentButton
              className="md accent-2 flex-center"
              side="left"
              tooltip="Insert below skills"
            />
            <DeleteComponentButton
              className="md accent-2 flex-center"
              side="left"
              tooltip="Delete all skills"
            />
          </TooltipProvider>
        </HoverCardContent>
      </HoverCard>
    </li>
  );
};
