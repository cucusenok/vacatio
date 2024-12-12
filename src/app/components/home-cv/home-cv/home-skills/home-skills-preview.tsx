import { useFieldArray, useFormContext } from "react-hook-form";
import { get } from "lodash-es";
import { setDirty, triggerSubmission } from "@/helpers/form.helpers";
import { cn } from "@/helpers/object.helpers";
import { SwitchItem } from "@/app/components/switch-item";
import { GarbageBin } from "@/icons";
import { Title } from "../title";
import { DEFAULT_SKILL_NAME, INITIALLY_SHOWN_SKILLS, KEY, SKILL_MAX_WIDTH } from "./constants";

type Props = {
  previewCount: number;
  setPreviewCount: React.Dispatch<React.SetStateAction<number>>;
};

export const SkillsPreview = (props: Props) => {
  const { previewCount, setPreviewCount } = props;
  const { control, register } = useFormContext();

  const { fields, remove } = useFieldArray({
    control,
    name: KEY,
  });

  const onRemove = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    remove(index);
    setDirty("skills");
    triggerSubmission(e);
  };

  return (
    <>
      <Title className="flex-between">
        Skills ({fields.length})
        {fields.length > INITIALLY_SHOWN_SKILLS && (
          <SwitchItem
            label={`Show all ${fields.length}`}
            size="sm"
            className="flex-row-reverse font-normal normal-case"
            onCheckedChange={(ch) => setPreviewCount(ch ? 999 : INITIALLY_SHOWN_SKILLS)}
            checked={previewCount === 999}
          />
        )}
      </Title>

      <div className="flex-y flex-wrap gap-x-5">
        {fields.map(
          (field, index) =>
            index < previewCount && (
              <div
                key={field.id}
                className={cn("flex-y group flex-wrap gap-1 py-2 text-sm", {
                  "appear-animation": get(field, "name") === DEFAULT_SKILL_NAME,
                })}
              >
                <input
                  {...register(`${KEY}.${index}.name`)}
                  autoComplete="off"
                  className="truncate p-1"
                  style={{ maxWidth: SKILL_MAX_WIDTH }}
                  placeholder="Skill"
                  minLength={2}
                  maxLength={100}
                  required
                />

                <button
                  onClick={(e) => onRemove(e, index)}
                  className="invisible group-hover:visible"
                >
                  <GarbageBin />
                </button>
              </div>
            ),
        )}
      </div>
    </>
  );
};
