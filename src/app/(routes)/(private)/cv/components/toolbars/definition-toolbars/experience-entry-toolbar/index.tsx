"use client";

import { MdFormatListBulleted } from "react-icons/md";
import type { ToolbarProps } from "@/cv/components/toolbars/definition-toolbars/types";
import type { CvExperienceEntry } from "@/types/cv.types";
import { DeleteComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/delete-component-button";
import { MoveComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/drag-component-button";
import { InsertComponentButton } from "@/cv/components/toolbars/definition-toolbars/buttons/insert-component-button";
import { useComponentContext } from "@/cv/stores/component-context";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { definitionKeys } from "@/cv/templates/constants";
import { Thunder } from "@/icons";
import { HoverCard, HoverCardContent, HoverCardTrigger, TooltipProvider } from "@/ui";
import { BulletPointPicker } from "./bullet-point-picker";

const sectionKeys = [
  definitionKeys.experiences,
  definitionKeys.education,
  definitionKeys.languages,
  definitionKeys.contacts,
  definitionKeys.skills,
  definitionKeys.summary,
];

export const ExperienceEntryToolbar = (props: ToolbarProps) => {
  const { dndRef, listeners, attributes, children, className, ...rest } = props;
  const { id, componentContext } = useComponentContext<CvExperienceEntry>();

  const { addBulletPoint, addExperienceEntry, removeExperience } = useDataContext((state) => ({
    addBulletPoint: state.addBulletPoint,
    addExperienceEntry: state.addExperienceEntry,
    removeExperience: state.removeExperience,
  }));

  const place = componentContext?.place ?? "tenure";

  const customBulletPoint = {
    label: "Bullet point",
    onClick: () => addBulletPoint(id, "Sample value"),
    Icon: <MdFormatListBulleted />,
  };

  const customExperienceEntry = {
    label: "Another tenure",
    onClick: () => addExperienceEntry(id),
    Icon: <Thunder />,
  };

  return (
    <li ref={dndRef} data-tooltip-id={id} className={className} {...rest}>
      <HoverCard openDelay={0}>
        <HoverCardTrigger>{children}</HoverCardTrigger>
        <HoverCardContent
          data-html2canvas-ignore
          side="left"
          align="start"
          sideOffset={65}
          className="reset flex flex-col items-end gap-2"
        >
          <TooltipProvider>
            <MoveComponentButton
              listeners={listeners}
              attributes={attributes}
              className="md accent-2 flex-center"
              tooltip={`Drag ${place}`}
            />
            <BulletPointPicker />
            <InsertComponentButton
              className="md accent-2 flex-center"
              tooltip={`Insert below ${place}`}
              disallow={[definitionKeys.bullet, ...sectionKeys]}
              customComponents={[customBulletPoint, customExperienceEntry]}
            />

            <DeleteComponentButton
              className="md accent-2 flex-center"
              tooltip={`Delete ${place}`}
              onClick={() => removeExperience(id)}
              successMessage={`Deleted ${place}`}
            />
          </TooltipProvider>
        </HoverCardContent>
      </HoverCard>
    </li>
  );
};
