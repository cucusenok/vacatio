"use client";

import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ExpandSkillsModal } from "./expand-home-skills-modal";
import { RoundedPlus } from "@/icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui";
import { DEFAULT_SKILL_NAME, INITIALLY_SHOWN_SKILLS, KEY } from "./constants";
import { SkillsPreview } from "./home-skills-preview";

export const HomeSkills = () => {
  const { control } = useFormContext();
  const [previewCount, setPreviewCount] = useState(INITIALLY_SHOWN_SKILLS);

  const { prepend } = useFieldArray({
    control,
    name: KEY,
  });

  const onAdd = () => {
    prepend({ name: DEFAULT_SKILL_NAME, value: "Expert" });
    setPreviewCount((prev) => prev + 1);
  };

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger>
        <SkillsPreview previewCount={previewCount} setPreviewCount={setPreviewCount} />
      </HoverCardTrigger>
      <HoverCardContent side="left" sideOffset={40} className="reset flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ExpandSkillsModal />
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Open skills picker
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="md accent-2 flex-center" onClick={onAdd}>
              <RoundedPlus size={20} />
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Add skill
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </HoverCardContent>
    </HoverCard>
  );
};
