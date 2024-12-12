import type { fonts } from "@/constants/font.constants";
import type { Definitions } from "./definitions";
import type { SortableContext } from "./sortable-context";

export const templateIds = {
  redditTopTemplate: "redditTopTemplate",
  cleanTemplate: "cleanTemplate",
  boldTemplate: "boldTemplate",
} as const;

export type TemplateId = (typeof templateIds)[keyof typeof templateIds];

export type Template = {
  id: TemplateId;
  name: string;
  thumbnail: string;
  definitions: Definitions;
  sortableContext: SortableContext;
  layout: string;
  font: keyof typeof fonts;
  gutter: number;
};
