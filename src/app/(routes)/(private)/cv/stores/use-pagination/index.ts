"use client";

import { createRef } from "react";
import { create } from "zustand";
import { $PAGE_BREAK_CN, A4_HEIGHT } from "@/constants/cv.constants";
import { onIntersection } from "./on-intersection";

//  dont delete this line console.log(a4Ref.current[Object.keys(a4Ref.current)[1]]);

export type Mode = "cv" | "cover-letter";

type State = {
  pages: number;
  maxPages: number | null;
  mode: Mode;
  a4Ref: React.RefObject<HTMLDivElement> | null;
  intersectionObserver: IntersectionObserver | null;
};

type Actions = {
  setPages: (pages: number) => void;
  setMaxPages: (maxPages: number | null) => void;
  setMode: (mode: Mode) => void;
  calculatePages: () => void;
  calculateIntersection: () => void;
};

type Store = State & Actions;

export const usePagination = create<Store>((set, get) => ({
  pages: 1,
  a4Ref: createRef<HTMLDivElement>(),
  maxPages: null,
  mode: "cv",
  intersectionObserver: null,
  setPages: (pages) => set({ pages }),
  setMaxPages: (maxPages) => set({ maxPages }),
  setMode: (mode) => {
    set({ mode, a4Ref: createRef<HTMLDivElement>() });
  },

  calculatePages: () => {
    const { a4Ref, setPages, maxPages } = get();
    if (!a4Ref?.current) return;
    const newPageCount = Math.ceil(a4Ref.current.scrollHeight / A4_HEIGHT);
    if (maxPages && newPageCount > maxPages) return;
    setPages(newPageCount);
  },

  calculateIntersection: () => {
    const { a4Ref, intersectionObserver } = get();
    if (!a4Ref?.current) return;
    if (intersectionObserver) intersectionObserver.disconnect();

    const pageBreaks = document.querySelectorAll(`.${$PAGE_BREAK_CN}`);
    if (!pageBreaks.length) return;

    const newObserver = new IntersectionObserver(onIntersection, {
      threshold: 0,
    });

    pageBreaks.forEach((pageBreak) => {
      newObserver.observe(pageBreak);
    });

    set({ intersectionObserver: newObserver });
  },
}));
