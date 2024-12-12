import { useFieldArray, useFormContext } from "react-hook-form";
import { capitalize } from "lodash-es";
import type { UserContactEntry } from "@/types/user.types";
import { getMissingContacts } from "@/helpers/user.helpers";
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
import { TimesButton } from "../times-button";
import { Title } from "../title";
import { KEY } from "./constants";
import { ContactsPicker } from "./home-contacts-picker";

const getRandomContact = (fields: UserContactEntry[]) => {
  const missing = getMissingContacts(fields);
  return missing[0]?.[1].label ?? "contact";
};

const namePlaceholder = (field: UserContactEntry) => {
  return field.name ? `e.g. ${field.name}` : "e.g. Address";
};

const valuePlaceholder = (field: UserContactEntry) => {
  return field.name ? `Specify your ${field.name}` : "e.g. 1234 Main St, Anytown, USA";
};

export const Contacts = () => {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: KEY,
  });

  const onAddContact = () => {
    const name = capitalize(getRandomContact(fields));
    append({ name, value: "" });
  };

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <section>
          <Title>Contacts</Title>
          <div className="flex flex-col py-1">
            {fields.map((field, index) => (
              <fieldset key={field.id} className="flex-y group gap-1 py-1">
                <input
                  {...register(`${KEY}.${index}.name`)}
                  autoComplete="off"
                  className="p-0.5"
                  placeholder={namePlaceholder(field)}
                />
                <div className="flex-y grow gap-4 p-0.5">
                  <input
                    {...register(`${KEY}.${index}.value`)}
                    autoComplete="off"
                    placeholder={valuePlaceholder(field)}
                    className="w-full p-0.5"
                  />
                  <TimesButton
                    relation="contacts"
                    onClick={() => remove(index)}
                    className="[&>*]:h-[1rem] [&>*]:w-[1rem]"
                  />
                </div>
              </fieldset>
            ))}
          </div>
        </section>
      </HoverCardTrigger>
      <HoverCardContent side="left" sideOffset={40} className="reset flex flex-col gap-2">
        <TooltipProvider>
          <ContactsPicker />
          <Tooltip>
            <TooltipTrigger className="md accent-2 flex-center" onClick={onAddContact}>
              <RoundedPlus size={20} />
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Add contact
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </HoverCardContent>
    </HoverCard>
  );
};
