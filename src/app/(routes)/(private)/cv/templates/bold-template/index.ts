import { type Template, templateIds } from "../types";
import { images } from "@/constants/images.constants";
import { definitions } from "./definitions";
import { sortableContext } from "./sortable-context";

export const boldTemplate: Template = {
  id: templateIds.boldTemplate,
  name: "Bold",
  thumbnail: images.templateThumbnails.boldTemplate,
  layout: `bg-[#fff] text-[#000]`,
  font: "garamond",
  gutter: 66,
  sortableContext,
  definitions,
};
