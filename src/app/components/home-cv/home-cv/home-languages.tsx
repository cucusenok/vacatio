"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
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
import { TimesButton } from "./times-button";
import { Title } from "./title";

const getRandomLanguage = () => {
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Russian",
    "Chinese",
    "Japanese",
    "Korean",
    "Ukrainian",
    "Polish",
    "Dutch",
    "Swedish",
  ];
  return languages[Math.floor(Math.random() * languages.length)] ?? "German";
};

export const Languages = () => {
  const { control, register } = useFormContext();

  const KEY = "languages";

  const { fields, append, remove } = useFieldArray({
    control,
    name: KEY,
  });

  const onAdd = () => {
    append({ name: getRandomLanguage(), value: "Expert" });
  };

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <section>
          <Title>Languages ({fields.length})</Title>
          <div className="flex flex-col gap-2 py-2">
            {fields.map((field, index) => (
              <fieldset
                key={field.id}
                className="flex-y group flex-wrap gap-2 text-sm [&_input]:p-1"
              >
                <input {...register(`${KEY}.${index}.name`)} autoComplete="off" />
                <div className="flex-y grow gap-2">
                  <input {...register(`${KEY}.${index}.value`)} autoComplete="off" />
                  <TimesButton
                    relation="languages"
                    onClick={() => remove(index)}
                    className="[&>*]:h-[1rem] [&>*]:w-[1rem]"
                  />
                </div>
              </fieldset>
            ))}
          </div>
        </section>
      </HoverCardTrigger>
      <HoverCardContent
        side="left"
        align="start"
        sideOffset={40}
        className="reset flex flex-col gap-2"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="md accent-2 flex-center" onClick={onAdd}>
              <RoundedPlus size={20} />
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Add language
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </HoverCardContent>
    </HoverCard>
  );
};
