"use client";

import { RiFontSize } from "react-icons/ri";
import { getFont } from "@/helpers/font.helpers";
import { cn, typedKeys } from "@/helpers/object.helpers";
import { fonts } from "@/constants/font.constants";
import { useTemplate } from "@/cv/stores/use-template";
import { Badge, Popover, PopoverContent, PopoverTrigger } from "@/ui";

export const FontPicker = () => {
  const {
    font: currentFont,
    setFont,
    originalFont,
  } = useTemplate((state) => ({
    font: state.font,
    setFont: state.setFont,
    originalFont: state.template.font,
  }));

  return (
    <Popover>
      <PopoverTrigger
        className="with-icon md accent-2 w-[200px] !text-md"
        aria-label="Change font"
        title="Change font"
      >
        <RiFontSize /> {fonts[currentFont].label}
      </PopoverTrigger>
      <PopoverContent className="flex-y flex-wrap gap-2 border p-1 shadow-lg">
        {typedKeys(fonts).map((font) => (
          <button
            key={font}
            className={cn(
              "md accent-2 with-icon",
              {
                "bg-accent-400": font === currentFont,
              },
              getFont(font),
            )}
            onClick={() => setFont(font)}
          >
            {fonts[font].label}
            {font === originalFont && <Badge className="sm danger">Original</Badge>}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
