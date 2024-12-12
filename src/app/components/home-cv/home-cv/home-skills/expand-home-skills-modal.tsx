import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { setDirty, triggerSubmission } from "@/helpers/form.helpers";
import { cn } from "@/helpers/object.helpers";
import { isDuplicate } from "@/helpers/string.helpers";
import { SwitchItem } from "@/app/components/switch-item";
import { GarbageBin, Magnifier, Maximize, RoundedPlus } from "@/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
} from "@/ui";
import { DEFAULT_SKILL_NAME, KEY } from "./constants";

const duplicates = (current: { value: string }, index: number, self: { value: string }[]) => {
  return self.some((item, idx) => idx !== index && isDuplicate(item.value, current.value));
};

export const ExpandSkillsModal = () => {
  const { control, register, getValues } = useFormContext();
  const [search, setSearch] = useState("");
  const [highlight, setHighlight] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: KEY,
  });

  const onRemove = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    remove(index);
    setDirty("skills");
    triggerSubmission(e);
  };

  const duplicateIndices = highlight
    ? fields
        .map((field, index) => ({
          id: field.id,
          value: getValues(`${KEY}.${index}.name`) as string,
        }))
        .filter(duplicates)
        .map(({ id }) => id)
    : [];

  return (
    <Dialog>
      <DialogTrigger className="md accent-2 flex-center">
        <Maximize size={20} />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between">
        <DialogTitle className="sr-only">Change skills</DialogTitle>
        <DialogDescription className="sr-only">Change skills</DialogDescription>
        <section className="flex flex-col gap-4">
          <div className="flex-between border-b p-4">
            <div className="flex-y w-full gap-2">
              <Magnifier size={20} />
              <input
                type="text"
                placeholder="Search in your skills"
                className="reset w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
            </div>
            <button
              className="with-icon accent-1 sm interactive common"
              onClick={() => append({ name: "New skill" })}
            >
              <RoundedPlus />
              New skill
            </button>
          </div>
          <ScrollArea height={500} className="flex-y flex-wrap gap-x-11 gap-y-4 p-4 pt-0">
            {fields.map((field, index) => {
              const value = getValues(`${KEY}.${index}.name`) as string;
              if (!value.toLowerCase().includes(search.toLowerCase())) return null;
              const isNewSkill = value === DEFAULT_SKILL_NAME;

              return (
                <div
                  key={field.id}
                  className={cn(
                    "with-icon group",
                    isNewSkill && "appear-animation",
                    highlight && duplicateIndices.includes(field.id) && "wave-warning",
                  )}
                >
                  <input
                    {...register(`${KEY}.${index}.name`)}
                    className="reset truncate bg-accent-400 transition-colors hover:text-accent-500 focus:text-accent-500"
                    autoFocus={isNewSkill}
                  />
                  <button
                    onClick={(e) => onRemove(e, index)}
                    className="invisible group-hover:visible"
                  >
                    <GarbageBin size={15} />
                  </button>
                </div>
              );
            })}
          </ScrollArea>
        </section>
        <footer className="flex-y gap-4 p-4">
          <SwitchItem
            label="Highlight potential duplicates"
            size="sm"
            checked={highlight}
            onCheckedChange={setHighlight}
          />
        </footer>
      </DialogContent>
    </Dialog>
  );
};
