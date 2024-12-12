"use client";

import { type PropsWithChildren, useEffect, useState } from "react";
import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext as SortableContainer,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { debounce } from "lodash-es";
import { type Definitions } from "@/cv/templates/types/definitions";
import type {
  NestedComponent,
  SortableContext,
  SortableDefinition,
} from "@/cv/templates/types/sortable-context";
import type { SortableId } from "@/cv/templates/types/utilities";
import { typedKeys } from "@/helpers/object.helpers";
import { DefaultToolbar } from "@/cv/components/toolbars/definition-toolbars/default-toolbar";
import { ComponentContext, useComponentContext } from "@/cv/stores/component-context";
import { CrudProvider } from "@/cv/stores/crud/crud-provider";
import { usePagination } from "@/cv/stores/use-pagination";
import { unpush } from "@/cv/stores/use-pagination/on-intersection";
import { useTemplate } from "@/cv/stores/use-template";
import { definitionKeys } from "@/cv/templates/constants";
import { BulletPointToolbar } from "../toolbars/definition-toolbars/bullet-point-toolbar/bullet-point-toolbar";
import { ContactToolbar } from "../toolbars/definition-toolbars/contact-toolbar";
import { ContactsToolbar } from "../toolbars/definition-toolbars/contacts-toolbar";
import { ExperienceEntryToolbar } from "../toolbars/definition-toolbars/experience-entry-toolbar";
import { ExperienceToolbar } from "../toolbars/definition-toolbars/experience-toolbar";
import { LanguagesToolbar } from "../toolbars/definition-toolbars/languages-toolbar";
import { SkillToolbar } from "../toolbars/definition-toolbars/skill-toolbar";
import { SkillsToolbar } from "../toolbars/definition-toolbars/skills-toolbar";
import { Bullet } from "./bullet";
import { Contact } from "./contact";
import { ContactSection } from "./contacts-section";
import { Experience, ExperienceEntry } from "./experience-section";
import { Heading1 } from "./heading-1";
import { LanguagesSection } from "./languages-section";
import { Skill } from "./skill";
import { SkillsSection } from "./skills-section";
import { Summary } from "./summary";
import { Text } from "./text";
import { Username } from "./username";

export type DndContainerProps = {
  sortableContext: SortableContext;
  className?: string; // Ul sortable context css
};

type Component =
  | typeof ContactSection
  | typeof Username
  | typeof Summary
  | typeof Heading1
  | typeof SkillsSection
  | typeof Experience
  | typeof ExperienceEntry
  | typeof LanguagesSection
  | typeof Bullet;

type Toolbar = typeof DefaultToolbar;

type Mapping = Array<{
  keys: (keyof Definitions)[];
  Component: Component;
  Toolbar: Toolbar;
}>;

const mapping: Mapping = [
  { keys: [definitionKeys.username], Component: Username, Toolbar: DefaultToolbar },
  { keys: [definitionKeys.contacts], Component: ContactSection, Toolbar: ContactsToolbar },
  // { keys: ["userImage"], Component: UserImage, Toolbar: DefaultToolbar },
  // { keys: ["jobTitle"], Component: JobTitle, Toolbar: DefaultToolbar },
  {
    keys: ["summary"],
    Component: Summary,
    Toolbar: DefaultToolbar,
  },
  {
    keys: [definitionKeys.heading1],
    Component: Heading1,
    Toolbar: DefaultToolbar,
  },
  { keys: [definitionKeys.skills], Component: SkillsSection, Toolbar: SkillsToolbar },
  { keys: [definitionKeys.skill], Component: Skill, Toolbar: SkillToolbar },
  { keys: [definitionKeys.experiences], Component: Experience, Toolbar: ExperienceToolbar },
  {
    keys: [definitionKeys.experienceEntry],
    Component: ExperienceEntry,
    Toolbar: ExperienceEntryToolbar,
  },
  { keys: [definitionKeys.contact], Component: Contact, Toolbar: ContactToolbar },
  { keys: ["languages"], Component: LanguagesSection, Toolbar: LanguagesToolbar },
  // { keys: ["education"], Component: Education, Toolbar: EducationToolbar },
  // {
  //   keys: ["group", "icon-group"],
  //   Component: Group,
  //   Toolbar: DefaultToolbar,
  // },
  {
    keys: [definitionKeys.text],
    Component: Text,
    Toolbar: DefaultToolbar,
  },
  {
    keys: [definitionKeys.bullet],
    Component: Bullet,
    Toolbar: BulletPointToolbar,
  },
];

const getSortableIdByComponentId = (
  sortable: SortableContext,
  componentId: string,
): SortableId | undefined => {
  // if (componentId in sortable) return componentId as SortableId;

  const contextId = typedKeys(sortable).find((id) => {
    const context = sortable[id];
    if (!context) return null;

    return context.components.find((c) => c.id === componentId);
  });

  return contextId;
};

const SortableItem = (props: PropsWithChildren<Record<string, unknown>>) => {
  const { children } = props;
  const c = useComponentContext();

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: c.id,
    data: c,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 9999 : undefined,
    marginTop: isDragging ? 0 : undefined,
  };

  const { Toolbar } = mapping.find(({ keys }) => keys.includes(c.type))!;

  return (
    <Toolbar dndRef={setNodeRef} listeners={listeners} attributes={attributes} style={style}>
      {children}
    </Toolbar>
  );
};

const Sortable = (props: SortableDefinition) => {
  const { id, components, className } = props;
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContainer id={id} items={components} strategy={verticalListSortingStrategy}>
      <ul ref={setNodeRef} className={className}>
        {components.map((c) => {
          const { Component } = mapping.find(({ keys }) => keys.includes(c.type)) ?? {};
          if (!Component) return null;

          return (
            <ComponentContext.Provider key={c.id} value={c}>
              <SortableItem>
                <Component />
              </SortableItem>
            </ComponentContext.Provider>
          );
        })}
      </ul>
    </SortableContainer>
  );
};

export const DndContainer = (props: DndContainerProps) => {
  const { sortableContext: initial, ...rest } = props;
  const [sortableContexts, setSortableContexts] = useState(initial);
  const [_, setActiveId] = useState<null | string>(null);
  const { template } = useTemplate();
  const { pages, calculateIntersection } = usePagination();

  /**
   * todo: performance bottleneck, although it's not a big deal with React Forget.
   */
  useEffect(() => setSortableContexts(initial), [initial, template.name]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragOver = debounce(({ active, over }: DragOverEvent) => {
    const activeSectionId = getSortableIdByComponentId(sortableContexts, active.id as string);
    const overSectionId = getSortableIdByComponentId(sortableContexts, over?.id as string);

    if (!activeSectionId || !overSectionId || activeSectionId === overSectionId) {
      return;
    }

    setSortableContexts((prev) => {
      const activeItems = sortableContexts[activeSectionId]?.components;
      const overItems = sortableContexts[overSectionId]?.components;

      if (!activeItems || !overItems) {
        return prev;
      }

      const activeIndex = activeItems.findIndex((item) => item.id === active.id);
      const overIndex = overItems.findIndex((item) => item.id === over?.id);

      const newSortableContexts = { ...prev };

      // Remove the active item from its original section
      newSortableContexts[activeSectionId]!.components = activeItems.filter(
        (item) => item.id !== active.id,
      );

      // Insert the active item into the new section at the correct position
      newSortableContexts[overSectionId]!.components = [
        ...overItems.slice(0, overIndex),
        activeItems[activeIndex],
        ...overItems.slice(overIndex),
      ] as NestedComponent[];

      // Update sectionId key of component
      newSortableContexts[overSectionId]!.components = newSortableContexts[
        overSectionId
      ]!.components.map((c) => ({
        ...c,
        sectionId: overSectionId,
      }));

      return newSortableContexts;
    });
  }, 200);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setActiveId((prev) => {
      if (!prev) return null;

      const activeSectionId = getSortableIdByComponentId(sortableContexts, active.id as string);
      const overSectionId = getSortableIdByComponentId(sortableContexts, over?.id as string);

      const outsideSortable = !activeSectionId || !overSectionId;
      const isSameSection = activeSectionId === overSectionId;
      const shouldAbort = outsideSortable || !isSameSection;

      if (shouldAbort) return null;

      setSortableContexts((prev) => {
        const activeItems = prev[activeSectionId]?.components;
        const overItems = prev[overSectionId]?.components;

        if (!activeItems || !overItems) {
          return prev;
        }

        const activeIndex = activeItems.findIndex((item) => item.id === active.id);
        const overIndex = overItems.findIndex((item) => item.id === over?.id);

        if (activeIndex !== overIndex) {
          const newSortableContexts = { ...prev };

          // Move the active item within its section to the new position
          newSortableContexts[overSectionId]!.components = arrayMove(
            newSortableContexts[overSectionId]!.components,
            activeIndex,
            overIndex,
          );

          // Update sectionId key of component
          newSortableContexts[overSectionId]!.components = newSortableContexts[
            overSectionId
          ]!.components.map((c) => ({
            ...c,
            sectionId: overSectionId,
          }));

          return newSortableContexts;
        }

        return prev;
      });

      return null;
    });

    if (pages > 1) {
      unpush();
      calculateIntersection();
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={({ active }) => setActiveId(active.id as string)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <CrudProvider setSortableContexts={setSortableContexts}>
        {typedKeys(sortableContexts).map((id) => (
          <Sortable key={id} {...rest} {...sortableContexts[id]!} />
        ))}
      </CrudProvider>
    </DndContext>
  );
};

DndContainer.displayName = "DndContainer";
