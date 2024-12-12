import { type NonSortables, type Sortables } from "@/cv/templates/types/definitions";
import { definitionKeys } from "../constants";

const contacts: Sortables["contacts"] = {
  hydrator: (data) => ({
    sortableContext: {
      contacts: {
        id: "contacts",
        className: "flex-y flex-wrap py-2 w-full",
        components: data.contacts!.map((contact, index, self) => ({
          type: definitionKeys.text,
          id: contact.id!,
          sortableId: "contacts",
          componentContext: {
            value: contact.value ?? "",
            className: `text-[20px] text-center ${index < self.length - 1 ? "after:content-['❖'] after:mx-1" : ""}`,
          },
        })),
      },
    },
  }),
};

const skills: Sortables["skills"] = {
  hydrator: (data) => ({
    sortableContext: {
      skills: {
        id: "skills",
        className: "flex flex-wrap py-2 w-full gap-x-2 gap-y-1",
        components: data.skills!.map((skill) => ({
          type: definitionKeys.text,
          id: skill.id!,
          sortableId: definitionKeys.skills,
          componentContext: { value: skill.name!, className: "text-[13.5px]" },
        })),
      },
    },
  }),
};

const experiences: Sortables["experiences"] = {
  hydrator: (data) => ({
    sortableContext: {
      experiences: {
        id: "experiences",
        className: "flex flex-col",
        components: data.experiences!.map((experienceEntry) => ({
          type: definitionKeys.experienceEntry,
          id: experienceEntry.id!,
          sortableId: "experiences",
          componentContext: { ...experienceEntry, value: "" },
        })),
      },
    },
  }),
};

const experienceEntry: Sortables["experienceEntry"] = {
  hydrator: (data) => {
    const { id } = data;
    const { title, place, period, bulletPoints } = data.componentContext;

    return {
      sortableContext: {
        [id]: {
          id,
          className:
            "flex flex-col py-2 w-full [&_.place]:font-semibold [&_.place]:text-[17px] [&_.title]:italic [&_.title]:text-[15px] [&_.period]:font-semibold [&_.period]:text-[17px]",
          components: [
            {
              type: definitionKeys.text,
              id: `${id}-header`,
              sortableId: id,
              componentContext: {
                className: "w-full",
                value:
                  // prettier-ignore
                  `<div class="flex justify-between w-full">
                    <div class="flex flex-col">
                      <span class="place">${place}</span>
                      <span class="title">${title}</span>
                    </div>
                    <span class="period">${period}</span>
                  </div>`,
              },
            },
            ...bulletPoints!.map((bulletPoint) => ({
              type: definitionKeys.bullet,
              id: bulletPoint.id,
              sortableId: id,
              componentContext: { value: bulletPoint.value ?? "" },
            })),
          ],
        },
      },
    };
  },
};

const text: NonSortables["text"] = {
  hydrator: (c) => ({ className: "text-[16px]", ...c.componentContext }),
};

const bullet: NonSortables["bullet"] = {
  hydrator: (c) => ({
    className: "text-[15px] py-1",
    ...c.componentContext,
  }),
};

const heading1: NonSortables["heading1"] = {
  hydrator: (c) => ({
    className:
      "text-[16px] leading-[24px] mt-[1px] pb-[2px] border-b-[1.2px] font-bold uppercase border-[#000]",
    ...c.componentContext,
  }),
};

const username: NonSortables["username"] = {
  hydrator: (data) => ({
    className: "text-[34px] font-semibold",
    value: data.name!,
  }),
};

export const definitions = {
  text,
  username,
  contacts,
  skills,
  experiences,
  heading1,
  experienceEntry,
  bullet,
};
