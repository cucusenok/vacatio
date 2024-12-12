import { sortableKeys } from "@/cv/templates/constants";

const layoutOptions = {
  oneColumnLayout: "oneColumnLayout",
  twoColumnLayout: "twoColumnLayout",
  left: "left",
  right: "right",
  topLeft: "top-left",
  topRight: "top-right",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  top: "top",
  main: "main",
} as const;

export const sortableIds = {
  ...sortableKeys,
  ...layoutOptions,
} as const;

export type SortableId = keyof typeof sortableIds;
