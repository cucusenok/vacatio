"use client";

import { useEffect } from "react";
import type { CvWithRelations } from "@/types/cv.types";
import type { Vacancy } from "@/types/vacancy.types";
import { useDataContext } from "../stores/data/data-store-instance-provider";

type Props = {
  cv: Partial<CvWithRelations> | null | undefined;
  vacancy?: Vacancy | null;
};

export const DataInitializer = ({ cv, vacancy }: Props) => {
  const { push, setVacancy } = useDataContext((state) => ({
    push: state.push,
    setVacancy: state.setVacancy,
  }));

  useEffect(() => {
    if (cv) push(cv);
    if (vacancy) setVacancy(vacancy);
  }, []);

  return null;
};
