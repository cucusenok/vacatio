"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SettingsState = {
  hidePresent: boolean;
  updateHomeResume: boolean;
  setHidePresent: (value: boolean) => void;
  setUpdateHomeResume: (value: boolean) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      hidePresent: false,
      updateHomeResume: true,
      setHidePresent: (value: boolean) => set({ hidePresent: value }),
      setUpdateHomeResume: (value: boolean) => set({ updateHomeResume: value }),
    }),
    {
      name: "cv-settings-storage",
    },
  ),
);
