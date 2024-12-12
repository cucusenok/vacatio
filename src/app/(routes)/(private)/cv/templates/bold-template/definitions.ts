import { type NonSortables, type Sortables } from "@/cv/templates/types/definitions";
import { definitionKeys } from "@/cv/templates/constants";

const contacts: Sortables["contacts"] = {
  hydrator: (data) => ({
    sortableContext: {
      contacts: {
        id: "contacts",
        className: "flex-y flex-wrap py-2 w-full",
        components: data.contacts!.map((contact, index, self) => ({
          type: definitionKeys.contact,
          id: contact.id!,
          sortableId: "contacts",
          componentContext: {
            value: contact.value,
            className: `text-[16px] text-center ${index < self.length - 1 ? "after:content-['|'] after:mx-1" : ""}`,
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
        className: "flex flex-wrap w-full gap-x-2 gap-y-1",
        components: data.skills!.map((skill) => ({
          type: definitionKeys.skill,
          id: skill.id!,
          sortableId: definitionKeys.skills,
          componentContext: { value: skill.name! },
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
        className: "flex flex-col gap-1",
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
            "flex flex-col w-full [&_.place]:font-extrabold [&_.place]:text-[16px] [&_.title]:text-[16px] [&_.period]:text-[16px]",
          components: [
            {
              type: definitionKeys.text,
              id: `${id}-header`,
              sortableId: id,
              componentContext: {
                className: "w-full",
                value:
                  // prettier-ignore
                  `<div class="flex flex-col w-full">
                      <span class="place">${place}</span>
                      <div class="flex-y gap-2">
                        <span class="title italic">${title}</span>
                        <span>|</span>
                        <span class="period italic">${period}</span>
                      </div>
                    </div>`,
              },
            },
            ...bulletPoints!.map((bulletPoint) => ({
              type: definitionKeys.bullet,
              id: bulletPoint.id!,
              sortableId: id,
              componentContext: { value: bulletPoint.value },
            })),
          ],
        },
      },
    };
  },
};

const summary: NonSortables["summary"] = {
  hydrator: (cv) => ({
    className: "text-[15px] py-1",
    value: cv.summary,
  }),
};

const text: NonSortables["text"] = {
  hydrator: (c) => ({ className: "text-[16px]", ...c.componentContext }),
};

const skill: NonSortables["skill"] = {
  hydrator: (c) => ({ className: "text-[16px]", ...c.componentContext }),
};

const contact: NonSortables["contact"] = {
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
    className: "text-[22px] leading-[22px] pt-2 text-[#1B4770] font-extrabold",
    ...c.componentContext,
  }),
};

const username: NonSortables["username"] = {
  hydrator: (data) => ({
    className: "text-[43px] leading-[43px] font-extrabold",
    value: data.name,
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
  summary,
  skill,
  contact,
};
