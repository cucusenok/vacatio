"use client";

import { cn } from "@/helpers/object.helpers";
import { isUrl, stripHtmlTags } from "@/helpers/string.helpers";

export type AutoresizeProps = {
  value: string | null | undefined;
  className?: string;
};

export const Autoresize = (props: AutoresizeProps) => {
  const { value, className } = props;

  if (!value) return null;

  return (
    <div
      contentEditable
      data-placeholder={stripHtmlTags(value)}
      className={cn(
        "autoresize !block max-w-full whitespace-pre-wrap outline-accent-200",
        className,
        `break-${isUrl(value) ? "all" : "words"}`,
      )}
      suppressContentEditableWarning
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};
