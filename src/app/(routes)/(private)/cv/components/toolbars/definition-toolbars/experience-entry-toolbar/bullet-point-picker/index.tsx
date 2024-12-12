"use client";

import { Maximize } from "@/icons";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui";
import { CompanyBulletPointPicker } from "./company-bullet-point-picker";
import { UserBulletPointPicker } from "./user-bullet-point-picker";

const Pickers = () => {
  const onClick = (bulletPoint: string) => {
    // setCv((prev) => {
    //   const prevEntry = prev?.experiences?.find((previous) => previous.id === entry.id);
    //   const newBulletPoint = { value: bulletPoint, cvExperienceId: entry.id, id: uuidv4() };
    //   const newEntry = {
    //     ...prevEntry,
    //     bulletPoints: [...(prevEntry?.bulletPoints ?? []), newBulletPoint],
    //   };
    //   const newExperiences = prev?.experiences?.map((experience) =>
    //     experience.id === entry.id ? newEntry : experience,
    //   );
    //   return { ...prev, experiences: newExperiences };
    // });
  };

  return (
    <>
      <UserBulletPointPicker onClick={onClick} />
      <CompanyBulletPointPicker onClick={onClick} />
    </>
  );
};

export const BulletPointPicker = () => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger className="md accent-2 flex-center">
            <Maximize size={20} aria-hidden />
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent side="left">Open bullet point picker</TooltipContent>
      </Tooltip>
      <DialogContent className="flex flex-col gap-5 p-5">
        <DialogTitle className="sr-only">Pick bullet points</DialogTitle>
        <Pickers />
      </DialogContent>
    </Dialog>
  );
};
