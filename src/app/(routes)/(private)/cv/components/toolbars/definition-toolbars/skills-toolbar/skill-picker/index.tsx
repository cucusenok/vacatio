"use client";

import { api } from "@/trpc/react";
import { useRef } from "react";
import { debounce } from "lodash-es";
import { PickerFilters } from "@/cv/components/toolbars/definition-toolbars/picker-filters";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useSettings } from "@/cv/stores/use-settings";
import { Maximize } from "@/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui";
import { CompanySkills } from "./company-skill-picker";
import { UserSkills } from "./user-skill-picker";

const Pickers = () => {
  const add = useDataContext((state) => state.add);
  const { updateHomeResume } = useSettings();
  const batch = useRef<{ name: string }[]>([]);
  const { mutate } = api.user.push.useMutation();
  const debounced = debounce(mutate, 1000);

  const onClick = (name: string, isUserSkill?: boolean) => {
    add("skills", { name });
    if (!updateHomeResume || isUserSkill) return;
    batch.current.push({ name });
    debounced({ skills: batch.current });
  };

  return (
    <>
      <UserSkills onClick={onClick} />
      <CompanySkills onClick={onClick} />
    </>
  );
};

export const SkillPicker = () => {
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger className="md accent-2 flex-center">
            <Maximize size={20} />
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8}>
          Open skill picker
        </TooltipContent>
      </Tooltip>
      <PopoverContent
        side="top"
        className="flex w-[450px] flex-col gap-3 border p-5 md:w-[500px] xl:w-[600px]"
        sticky="always"
      >
        <Pickers />
        <PickerFilters hidePresent updateHomeResume />
      </PopoverContent>
    </Popover>
  );
};
