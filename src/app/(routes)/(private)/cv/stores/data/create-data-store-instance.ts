"use client";

import { v4 } from "uuid";
import { createStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { NestedComponent } from "@/cv/templates/types/sortable-context";
import type { CvWithRelations } from "@/types/cv.types";
import type { Vacancy } from "@/types/vacancy.types";

type AddUpdater = (
  what: keyof Pick<CvWithRelations, "skills" | "contacts">,
  value: { name: string; value?: string },
) => void;

export type DataStore = {
  vacancy: Vacancy | null;
  cv: CvWithRelations | null;
  push: (cv: Partial<CvWithRelations>) => void;
  setVacancy: (vacancy: Vacancy) => void;
  add: AddUpdater;
  reset: () => void;
  setFilename: (filename: string) => void;
  duplicate: (
    what: keyof Pick<CvWithRelations, "skills" | "contacts">,
    clickedComponent: NestedComponent,
  ) => void;
  duplicateBulletPoint: (clickedComponent: NestedComponent) => void;
  addBulletPoint: (experienceId: string, value: string) => void;
  addExperienceEntry: (experienceId: string) => void;
  remove: (
    what: keyof Pick<CvWithRelations, "skills" | "contacts">,
    clickedComponent: NestedComponent,
  ) => void;
  removeExperience: (experienceId: string) => void;
  removeBulletPoint: (experienceId: string, bulletPointId: string) => void;
};

export const createDataStoreInstance = () => {
  return createStore<DataStore>()(
    immer((set) => ({
      vacancy: null,
      cv: null,

      push: (newCv) => {
        set((state) => {
          state.cv = { ...state.cv, ...newCv };
        });
      },

      setVacancy: (newVacancy) =>
        set(() => ({
          vacancy: newVacancy,
        })),

      add: (what, value) => {
        set((state) => {
          state.cv?.[what]?.push({ ...value, id: v4() });
        });
      },

      addBulletPoint: (experienceId, value) => {
        set((state) => {
          const experience = state.cv?.experiences?.find((e) => e.id === experienceId);
          if (!experience) return;
          experience.bulletPoints?.push({ id: v4(), value });
        });
      },

      addExperienceEntry: (experienceId) => {
        set((state) => {
          const entry = state.cv?.experiences?.find((e) => e.id === experienceId);
          if (!entry) return;
          const newEntry = { ...entry, place: "New company", id: v4() };
          const experiences = state.cv?.experiences;
          if (!experiences) return;
          const insertionIndex = experiences.findIndex((e) => e.id === experienceId);
          if (insertionIndex === -1) return;
          const before = experiences.slice(0, insertionIndex + 1);
          const after = experiences.slice(insertionIndex + 1);
          state.cv!.experiences = [...before, newEntry, ...after];
        });
      },

      remove: (what, clickedComponent) => {
        set((state) => {
          const sortableContext = state.cv?.[what];
          if (!sortableContext) return;
          state.cv![what] = sortableContext.filter((item) => item.id !== clickedComponent.id);
        });
      },

      removeExperience: (experienceId) => {
        set((state) => {
          state.cv!.experiences = state.cv!.experiences?.filter((e) => e.id !== experienceId);
        });
      },

      removeBulletPoint: (experienceId, bulletPointId) => {
        set((state) => {
          const experience = state.cv?.experiences?.find((e) => e.id === experienceId);
          if (!experience) return;
          experience.bulletPoints = experience.bulletPoints?.filter((b) => b.id !== bulletPointId);
        });
      },

      duplicate: (what, clickedComponent) => {
        set((state) => {
          const sortableContext = state.cv?.[what];
          if (!sortableContext) return;
          const insertionIndex = sortableContext.findIndex((c) => c.id === clickedComponent.id);
          const clickedComponentData = sortableContext[insertionIndex];
          const newComponent = { ...clickedComponentData, id: v4() };
          const before = sortableContext.slice(0, insertionIndex + 1);
          const after = sortableContext.slice(insertionIndex + 1);
          const newComponents = [...before, newComponent, ...after];
          state.cv![what] = newComponents;
        });
      },

      duplicateBulletPoint: (clickedComponent) => {
        set((state) => {
          const experience = state.cv?.experiences?.find(
            (e) => e.id === clickedComponent.sortableId,
          );
          if (!experience) return;
          const insertionIndex = experience.bulletPoints?.findIndex(
            (b) => b.id === clickedComponent.id,
          );
          if (typeof insertionIndex !== "number") return;
          const clickedComponentData = experience.bulletPoints![insertionIndex];
          const newComponent = { ...clickedComponentData, id: v4() };
          const before = experience.bulletPoints!.slice(0, insertionIndex + 1);
          const after = experience.bulletPoints!.slice(insertionIndex + 1);
          const newBulletPoints = [...before, newComponent, ...after];
          const newExperience = { ...experience, bulletPoints: newBulletPoints };
          const experiences = state.cv?.experiences?.map((e) =>
            e.id === clickedComponent.sortableId ? newExperience : e,
          );
          state.cv!.experiences = experiences;
        });
      },

      setFilename: (filename) => {
        set((state) => {
          if (!state.cv) return;
          state.cv.filename = filename;
        });
      },

      reset: () => {
        set(() => ({
          vacancy: null,
          cv: null,
        }));
      },
    })),
  );
};

export type DataStoreApi = ReturnType<typeof createDataStoreInstance>;
