import type { NestedComponent } from "@/cv/templates/types/sortable-context";
import type { CvExperienceEntry, CvWithRelations } from "@/types/cv.types";
import type { DndContainerProps } from "@/cv/components/definitions/dnd-container";
import type { AutoresizeProps } from "@/cv/components/definitions/autoresize";
import type { definitionKeys } from "@/cv/templates/constants";

type Hydrator<Input, Output> = {
  hydrator: (data: Input) => Output;
};

export type DefinitionKey = (typeof definitionKeys)[keyof typeof definitionKeys];

export type Sortables = {
  [definitionKeys.contacts]: Hydrator<Partial<CvWithRelations>, DndContainerProps>;
  [definitionKeys.skills]: Hydrator<Partial<CvWithRelations>, DndContainerProps>;
  [definitionKeys.experiences]: Hydrator<Partial<CvWithRelations>, DndContainerProps>;
  [definitionKeys.languages]: Hydrator<Partial<CvWithRelations>, DndContainerProps>;
  [definitionKeys.education]: Hydrator<Partial<CvWithRelations>, DndContainerProps>;
  [definitionKeys.experienceEntry]: Hydrator<NestedComponent<CvExperienceEntry>, DndContainerProps>;
};

export type NonSortables = {
  [definitionKeys.username]: Hydrator<Partial<CvWithRelations>, AutoresizeProps>;
  [definitionKeys.summary]: Hydrator<Partial<CvWithRelations>, AutoresizeProps>;
  [definitionKeys.heading1]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.heading2]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.heading3]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.iconGroup]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.group]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.text]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.skill]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.bullet]: Hydrator<NestedComponent, AutoresizeProps>;
  [definitionKeys.contact]: Hydrator<NestedComponent, AutoresizeProps>;
};

export type Definitions = Partial<Sortables & NonSortables>;
