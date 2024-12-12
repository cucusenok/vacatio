import type { SortableContext } from "../types/sortable-context";
import { sortableIds } from "../types/utilities";
import { definitionKeys } from "../constants";

export const sortableContext: SortableContext = {
  [sortableIds.top]: {
    id: sortableIds.top,
    className: "bg-[#1B4770] text-[#fff] pt-[66px] px-[66px] pb-[10px]",
    components: [
      {
        type: definitionKeys.username,
        id: "username",
        sortableId: sortableIds.main,
        componentContext: { value: "John Doe" },
      },
      {
        type: definitionKeys.contacts,
        id: "contacts",
        sortableId: sortableIds.main,
        componentContext: { value: "" },
      },
    ],
  },
  [sortableIds.main]: {
    id: sortableIds.main,
    className: "px-[66px] pb-[66px] pt-[20px] space-y-2",
    components: [
      {
        type: definitionKeys.heading1,
        id: "summary-heading",
        sortableId: sortableIds.main,
        componentContext: { value: "Summary" },
      },
      {
        type: definitionKeys.summary,
        id: "summary",
        sortableId: sortableIds.main,
        componentContext: { value: "Sample value" },
      },
      {
        type: definitionKeys.heading1,
        id: "experience-heading",
        sortableId: sortableIds.main,
        componentContext: { value: "Work Experience" },
      },
      {
        type: definitionKeys.experiences,
        id: "experiences",
        sortableId: sortableIds.main,
        componentContext: { value: "Sample value" },
      },
      {
        type: definitionKeys.heading1,
        id: "skills-heading",
        sortableId: sortableIds.main,
        componentContext: { value: "Skills" },
      },
      {
        type: definitionKeys.skills,
        id: "skills",
        sortableId: sortableIds.main,
        componentContext: { value: "Sample value" },
      },
    ],
  },
};
