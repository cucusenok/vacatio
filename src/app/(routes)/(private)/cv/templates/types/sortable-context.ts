import type { SortableId } from "@/cv/templates/types/utilities";
import type { AutoresizeProps } from "@/cv/components/definitions/autoresize";
import type { definitionKeys } from "@/cv/templates/constants";

export type NestedComponent<ComponentContext = AutoresizeProps> = {
  id: string;
  type: keyof typeof definitionKeys;
  sortableId: SortableId;
  componentContext: ComponentContext;
};

export type SortableDefinition = {
  id: SortableId;
  components: NestedComponent[];
  className: string;
};

export type SortableContext = Partial<Record<SortableId, SortableDefinition>>;
