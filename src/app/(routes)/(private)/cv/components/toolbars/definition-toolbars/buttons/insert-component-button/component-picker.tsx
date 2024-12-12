"use client";

import { GiPowerLightning } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { HiMiniLanguage } from "react-icons/hi2";
import { LuHeading1 } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";
import { PiTextT } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { TbSum } from "react-icons/tb";
import type { DefinitionKey } from "@/cv/templates/types/definitions";
import { typedKeys } from "@/helpers/object.helpers";
import { useComponentContext } from "@/cv/stores/component-context";
import { useCrudInstance } from "@/cv/stores/crud/crud-provider";
import { useTemplate } from "@/cv/stores/use-template";
import { ScrollArea } from "@/ui";

export type ComponentPickerProps = {
  customComponents?: {
    Icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }[];
  disallow?: DefinitionKey[];
};

const mapping: Partial<
  Record<
    DefinitionKey,
    {
      Icon: React.ReactNode;
      label: string;
    }
  >
> = {
  languages: {
    Icon: <HiMiniLanguage />,
    label: "Languages",
  },
  text: {
    Icon: <PiTextT />,
    label: "Text",
  },
  heading1: {
    Icon: <LuHeading1 />,
    label: "Heading 1",
  },
  summary: {
    Icon: <TbSum />,
    label: "Summary",
  },
  education: {
    Icon: <RiGraduationCapLine />,
    label: "Education",
  },
  bullet: {
    Icon: <MdFormatListBulleted />,
    label: "Bullet point",
  },
  contacts: {
    Icon: <GrContactInfo />,
    label: "Contacts",
  },
  experiences: {
    Icon: <GiPowerLightning />,
    label: "Experiences",
  },
};

export const ComponentPicker = ({ customComponents, disallow }: ComponentPickerProps) => {
  const { template } = useTemplate();
  const c = useComponentContext();
  const add = useCrudInstance((state) => state.add);

  const components = typedKeys(template.definitions).filter(
    (key) => typedKeys(mapping).includes(key) && !disallow?.includes(key),
  );

  return (
    <ScrollArea height={250} className="flex flex-col gap-2 pr-11">
      {customComponents?.map(({ Icon, label, onClick }) => (
        <button key={label} className="accent-2 md with-icon" onClick={onClick}>
          {Icon}
          <span>{label}</span>
        </button>
      ))}
      {components.map((key) => (
        <button key={key} className="accent-2 md with-icon" onClick={() => add(c, key)}>
          {mapping[key]?.Icon}
          <span>{mapping[key]?.label}</span>
        </button>
      ))}
    </ScrollArea>
  );
};
