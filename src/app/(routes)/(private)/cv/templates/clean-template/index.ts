import { type Template, templateIds } from "../types";
import { images } from "@/constants/images.constants";
import { definitions } from "./definitions";
import { sortableContext } from "./sortable-context";

export const cleanTemplate: Template = {
  id: templateIds.cleanTemplate,
  name: "Clean",
  thumbnail: images.templateThumbnails.cleanTemplate,
  layout: `bg-[#fff] text-[#000]`,
  font: "garamond",
  gutter: 66,
  sortableContext,
  definitions,
};
