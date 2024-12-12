"use client";

import { api } from "@/trpc/react";
import { createContext, use, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FiLink } from "react-icons/fi";
import { typedEntries } from "@/helpers/object.helpers";
import { getMissingContacts } from "@/helpers/user.helpers";
import { ContactsWeWant } from "@/constants/user.constants";
import { Maximize, RoundedPlus } from "@/icons";
import {
  LogoLoader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui";
import { KEY } from "./constants";

type Input = {
  name: string;
  value: string;
  isCustom: boolean;
} | null;

type PickerContext = {
  input: Input;
  setInput: (input: Input) => void;
};

const Context = createContext<PickerContext | null>(null);

const PredefinedContact = () => {
  const { input, setInput } = use(Context)!;
  const { Icon, label } = ContactsWeWant[input!.name as keyof typeof ContactsWeWant];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input!, value: e.target.value });
  };

  return (
    <div className="flex-y gap-2">
      <Icon size={15} aria-hidden />
      <input
        name={input!.name}
        value={input!.value}
        placeholder={label}
        onChange={onChange}
        className="w-1/3 border-none bg-transparent outline-none"
        autoFocus
        autoComplete="off" // Todo: hovering over suggestions closes the popover
      />
    </div>
  );
};

const CustomContact = () => {
  const { input, setInput } = use(Context)!;

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input!, name: e.target.value });
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input!, value: e.target.value });
  };

  return (
    <div className="flex-y gap-4">
      <FiLink size={15} aria-hidden />
      <div className="flex-y gap-1">
        <input
          name="custom-name"
          value={input!.name}
          placeholder="e.g. Personal website"
          onChange={onNameChange}
          className="border-none bg-transparent outline-none"
          autoFocus
          autoComplete="off" // Todo: hovering over suggestions closes the popover
        />
        <input
          name="custom-value"
          value={input!.value}
          placeholder="e.g. https://example.com"
          onChange={onValueChange}
          className="border-none bg-transparent outline-none"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

const Picker = () => {
  const [input, setInput] = useState<Input>(null);
  const { data, isLoading } = api.user.get.useQuery({ with: { contacts: true } });
  const { control } = useFormContext();
  const { append } = useFieldArray({
    control,
    name: KEY,
  });

  if (isLoading) {
    return (
      <div className="flex-center h-[200px]">
        <LogoLoader size="sm" />
      </div>
    );
  }

  const missing = data?.contacts ? getMissingContacts(data.contacts) : typedEntries(ContactsWeWant);
  const onPredefinedPick = (name: string) => setInput({ name, value: "", isCustom: false });
  const onCustomPick = () => setInput({ name: "", value: "", isCustom: true });

  const onAdd = () => {
    if (!input) return;
    const { name, value } = input;
    append({ name, value });
    setInput(null);
  };

  const onClear = () => {
    if (!input) return;
    const initial = { ...input, value: "" };
    if (input.isCustom) initial.name = "";
    setInput(initial);
  };

  const context = { input, setInput };

  return (
    <>
      <div className="appear-animation flex-y flex-wrap gap-2 py-5">
        {missing.map(([key, { label, Icon }]) => (
          <button key={key} className="primary sm with-icon" onClick={() => onPredefinedPick(key)}>
            <Icon size={15} aria-hidden />
            {label}
          </button>
        ))}

        <button className="danger sm with-icon" onClick={onCustomPick}>
          <RoundedPlus size={15} aria-hidden />
          Custom
        </button>
      </div>

      {input && (
        <div className="appear-animation flex flex-col gap-4">
          <fieldset>
            <legend className="sr-only">Add contact</legend>
            <Context.Provider value={context}>
              {!input.isCustom && <PredefinedContact />}
              {input.isCustom && <CustomContact />}
            </Context.Provider>
          </fieldset>
          {input.value.length > 0 && (
            <div className="flex-y appear-animation max-w-[250px] gap-2">
              <button className="equal sm primary" onClick={onAdd}>
                Add
              </button>
              <button className="equal sm danger" onClick={onClear}>
                Clear
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export const ContactsPicker = () => {
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger className="md accent-2 flex-center">
            <Maximize size={20} />
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8}>
          Open contacts picker
        </TooltipContent>
      </Tooltip>
      <PopoverContent
        side="top"
        className="flex min-h-[250px] w-[450px] flex-col gap-3 border p-5 md:w-[500px] xl:w-[600px]"
      >
        Consider the following
        <Picker />
      </PopoverContent>
    </Popover>
  );
};
