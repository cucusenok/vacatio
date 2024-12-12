"use client";

import { useEffect } from "react";
import { usePusher } from "@/app/ws/use-pusher";
import { useDataContext } from "../stores/data/data-store-instance-provider";

export const PusherListener = () => {
  const { pushable, setPushable } = usePusher();
  const { cv, vacancy, push, setVacancy } = useDataContext((state) => ({
    cv: state.cv,
    vacancy: state.vacancy,
    push: state.push,
    setVacancy: state.setVacancy,
  }));

  useEffect(() => {
    if (!pushable) return;
    if (!cv?.experiences && pushable.experiences) {
      push({ experiences: pushable.experiences });
      setPushable({ experiences: null });
    }
    if (!cv?.skills && pushable.skills) {
      push({ skills: pushable.skills });
      setPushable({ skills: null });
    }
    if (!cv?.summary && pushable.summary) {
      push({ summary: pushable.summary });
      setPushable({ summary: null });
    }
    if (!vacancy && pushable.vacancy) {
      setVacancy(pushable.vacancy);
      setPushable({ vacancy: null });
    }
  }, [pushable?.experiences, pushable?.skills, pushable?.summary, pushable?.vacancy]);

  return null;
};
