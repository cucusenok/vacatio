"use client";

import { create } from "zustand";

type ViewersState = {
  isTemplateViewerShown: boolean;
  isCompanyViewerShown: boolean;
  setIsTemplateViewerShown: (newState: boolean) => void;
  setIsCompanyViewerShown: (newState: boolean) => void;
  reset: () => void;
};

export const useViewers = create<ViewersState>((set) => ({
  isTemplateViewerShown: false,
  isCompanyViewerShown: false,
  setIsTemplateViewerShown: (newState: boolean) =>
    set(() => ({
      isTemplateViewerShown: newState,
      isCompanyViewerShown: false,
    })),
  setIsCompanyViewerShown: (newState: boolean) =>
    set(() => ({
      isCompanyViewerShown: newState,
      isTemplateViewerShown: false,
    })),

  reset: () =>
    set(() => ({
      isTemplateViewerShown: false,
      isCompanyViewerShown: false,
    })),
}));
