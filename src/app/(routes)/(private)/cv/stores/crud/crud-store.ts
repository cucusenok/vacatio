"use client";

import type { Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";
import { createStore } from "zustand/vanilla";
import type { DefinitionKey } from "@/cv/templates/types/definitions";
import type { NestedComponent, SortableContext } from "@/cv/templates/types/sortable-context";

export type Store = {
  add: (clickedComponent: NestedComponent, type: DefinitionKey) => void;
  remove: (clickedComponent: Pick<NestedComponent, "id" | "sortableId">) => void;
};

export type CrudInstanceInput = { setSortableContexts: Dispatch<SetStateAction<SortableContext>> };

export const createCrudInstance = (input: CrudInstanceInput) => {
  const { setSortableContexts } = input;

  return createStore<Store>()(() => ({
    add: (clickedComponent, type) => {
      setSortableContexts((prev) => {
        const { sortableId } = clickedComponent;
        const sortableContext = prev[sortableId];

        if (!sortableContext) return prev;

        const newComponent: NestedComponent = {
          componentContext: {
            ...clickedComponent.componentContext,
            value: "Sample text",
          },
          id: v4(),
          type,
          sortableId,
        };

        const insertionIndex = sortableContext.components.findIndex(
          (c) => c.id === clickedComponent.id,
        );
        const before = sortableContext.components.slice(0, insertionIndex + 1);
        const after = sortableContext.components.slice(insertionIndex + 1);
        const newComponents = [...before, newComponent, ...after];

        return {
          ...prev,
          [sortableId]: {
            ...sortableContext,
            components: newComponents,
          },
        };
      });
    },

    remove: (clickedComponent) => {
      setSortableContexts((prev) => {
        const { sortableId, id } = clickedComponent;
        const sortableContext = prev[sortableId];
        if (!sortableContext) return prev;

        const newComponents = sortableContext.components.filter((c) => c.id !== id);

        return {
          ...prev,
          [sortableId]: {
            ...sortableContext,
            components: newComponents,
          },
        };
      });
    },
  }));
};
