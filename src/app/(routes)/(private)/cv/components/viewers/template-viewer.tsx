"use client";

import type { Template } from "@/cv/templates/types";
import { cn, typedValues } from "@/helpers/object.helpers";
import BlurImage from "@/app/components/blur-image";
import Checkmark from "@/app/components/icons/checkmark";
import { useTemplate } from "@/cv/stores/use-template";
import { templates } from "@/cv/templates";
import { SettingsGear } from "@/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui";
import { FontPicker } from "./font-picker";

const TemplateCard = (props: { template: Template }) => {
  const { template } = props;
  const { template: current, setTemplate } = useTemplate();

  const onClick = (template: Template) => {
    if (template.name === current.name) return;
    setTemplate(template.id);
  };

  const isSelected = template.name === current.name;

  return (
    <button
      className="flex-center group relative size-min flex-col gap-4 rounded p-1"
      onClick={() => onClick(template)}
    >
      <div
        className={cn(
          "group-hover:accent-shadow relative h-[256px] w-[181px] overflow-hidden rounded",
          {
            "accent-shadow": isSelected,
          },
        )}
        aria-label={`Select ${template.name} template`}
      >
        <BlurImage
          src={template.thumbnail}
          alt={`${template.name} CV template`}
          draggable={false}
          className="rounded-md border-2"
        />
      </div>

      {/* <div
        className={cn("whitespace-nowrap text-sm font-medium group-hover:text-accent", {
          "text-accent": isSelected,
        })}
      >
        {template.name}
      </div> */}

      {isSelected && (
        <Checkmark
          fontSize={50}
          className="absolute left-1/2 top-1/2 z-overlay -translate-x-1/2 -translate-y-1/2 transform"
        />
      )}
    </button>
  );
};

const Header = () => {
  const templateName = useTemplate((state) => state.template.name);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="customize">
        <AccordionTrigger className="flex flex-wrap items-start justify-between gap-6 px-5 text-md [&[data-state=open]_.imitate-button]:bg-accent-400">
          <div className="flex flex-col items-start gap-1">
            <span className="font-semibold text-accent-500">{templateName}</span>
            <small>Used 4234 times</small>
          </div>
          <div className="imitate-button with-icon rounded-md p-2 hover:bg-accent-400">
            <SettingsGear />
            Customize
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex-y gap-5 px-5 pt-5">
          <FontPicker />
          {/* <SectionsOrder /> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const TemplateViewer = () => {
  return (
    <div className="flex flex-col gap-11">
      <Header />

      <div className="flex-y flex-wrap gap-3 p-5">
        {typedValues(templates).map((template) => (
          <TemplateCard key={template.name} template={template} />
        ))}
      </div>
    </div>
  );
};
