"use client";

import Image from "next/image";
import { cn } from "@/helpers/object.helpers";
import { useTemplate } from "@/cv/stores/use-template";
import { useViewers } from "@/cv/stores/use-viewers";
import { Chevron } from "@/icons";

export const TemplateViewerToggler = () => {
  const { isTemplateViewerShown, setIsTemplateViewerShown } = useViewers();
  const { template } = useTemplate();

  return (
    <button
      className="flex-center gap-2 text-sm"
      onClick={() => setIsTemplateViewerShown(!isTemplateViewerShown)}
      title="Select a template"
      aria-label="Select a template"
    >
      <Image
        src={template.thumbnail}
        alt={template.name}
        width={20}
        height={20}
        className="rounded-sm border shadow-sm"
      />
      <Chevron
        className={cn("transition-transform duration-300", {
          "rotate-[90deg]": isTemplateViewerShown,
          "rotate-[-90deg]": !isTemplateViewerShown,
        })}
        fontSize={12}
      />
    </button>
  );
};
