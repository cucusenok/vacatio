import type { SortableContext } from "../types/sortable-context";
import { sortableIds } from "../types/utilities";
import { definitionKeys } from "../constants";

export const sortableContext: SortableContext = {
  [sortableIds.oneColumnLayout]: {
    id: sortableIds.oneColumnLayout,
    className: "p-[66px]",
    components: [
      {
        type: definitionKeys.username,
        id: "username",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "John Doe" },
      },
      {
        type: definitionKeys.contacts,
        id: "contacts",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "" },
      },
      {
        type: definitionKeys.heading1,
        id: "summary-heading",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "Summary" },
      },
      {
        type: definitionKeys.summary,
        id: "summary",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "Sample value" },
      },
      {
        type: definitionKeys.heading1,
        id: "skills-heading",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "Skills" },
      },
      {
        type: definitionKeys.skills,
        id: "skills",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "Sample value" },
      },
      {
        type: definitionKeys.heading1,
        id: "experience-heading",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "Experience" },
      },
      {
        type: definitionKeys.experiences,
        id: "experiences",
        sortableId: sortableIds.oneColumnLayout,
        componentContext: { value: "Sample value" },
      },
    ],
  },
};
