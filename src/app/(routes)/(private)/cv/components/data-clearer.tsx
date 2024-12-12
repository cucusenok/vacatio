"use client";

import { useEffect } from "react";
import { usePusher } from "@/app/ws/use-pusher";
import { useDataContext } from "../stores/data/data-store-instance-provider";

export const DataClearer = () => {
  const reset = useDataContext((state) => state.reset);
  const setPushable = usePusher((state) => state.setPushable);

  useEffect(() => {
    return () => {
      reset();
      setPushable({
        experiences: null,
        skills: null,
        summary: null,
        vacancy: null,
      });
    };
  }, []);

  return null;
};
