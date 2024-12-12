import { type Template, templateIds } from "../types";
import { images } from "@/constants/images.constants";
import { definitions } from "./definitions";
import { sortableContext } from "./sortable-context";

export const redditTopTemplate: Template = {
  id: templateIds.redditTopTemplate,
  name: "Reddit top template",
  thumbnail: images.templateThumbnails.redditTopTemplate,
  layout: `bg-[#fff] text-[#000]`,
  font: "garamond",
  gutter: 66,
  sortableContext,
  definitions,
};
