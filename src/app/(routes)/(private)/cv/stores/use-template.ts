"use client";

import { create } from "zustand";
import { type Template, type TemplateId } from "@/cv/templates/types";
import type { Font } from "@/constants/font.constants";
import { templates } from "@/cv/templates";
import { cleanTemplate } from "@/cv/templates/clean-template";

type State = {
  template: Template;
  font: Font;
};

type Actions = {
  setTemplate: (templateId: TemplateId) => void;
  setFont: (font: Font) => void;
};

type Store = State & Actions;

export const useTemplate = create<Store>()((set) => ({
  template: cleanTemplate,
  font: cleanTemplate.font,
  setTemplate: (templateId) => set({ template: templates[templateId] }),
  setFont: (font) => set({ font }),
}));
