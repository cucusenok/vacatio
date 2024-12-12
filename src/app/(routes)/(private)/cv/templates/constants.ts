export const sortableKeys = {
  experiences: "experiences",
  languages: "languages",
  education: "education",
  experienceEntry: "experienceEntry",
  contacts: "contacts",
  skills: "skills",
} as const;

export const nonSortableKeys = {
  username: "username",
  summary: "summary",
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
  iconGroup: "iconGroup",
  group: "group",
  text: "text",
  bullet: "bullet",
  skill: "skill",
  contact: "contact",
} as const;

export const definitionKeys = {
  ...sortableKeys,
  ...nonSortableKeys,
} as const;
