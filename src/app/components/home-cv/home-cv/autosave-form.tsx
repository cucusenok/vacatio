"use client";

import { useCallback, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { pick } from "lodash-es";
import type { UserWithRelations } from "@/types/user.types";
import { getFont } from "@/helpers/font.helpers";
import { clearDirty, getDirty } from "@/helpers/form.helpers";
import { cn } from "@/helpers/object.helpers";
import { Contacts } from "./home-contacts";
import { Experiences } from "./home-experiences";
import { JobTitle } from "./home-job-title";
import { Languages } from "./home-languages";
import { HomeSkills } from "./home-skills";
import { Summary } from "./home-summary";
import { Username } from "./home-username";

export const AutosaveForm = (props: { user: UserWithRelations }) => {
  const { user } = props;

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const methods = useForm({
    defaultValues: user,
  });

  const update = (data: UserWithRelations) => {
    const dirty = getDirty(methods.getFieldState, data);

    if (dirty.length === 0) {
      debounceTimerRef.current = null;
      return;
    }

    const updated = pick(data, dirty);
    //mutate(updated);
    debounceTimerRef.current = null;
    clearDirty();
  };

  const debouncedUpdate = useCallback(
    (data: UserWithRelations) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => update(data), 6000);
    },
    [update],
  );

  useEffect(() => {
    const saveBeforeUserLeaves = (event: BeforeUnloadEvent) => {
      if (isPending) {
        event.preventDefault();
        return;
      }

      if (debounceTimerRef.current) {
        event.preventDefault();
        const data = methods.getValues();
        update(data);
      }
    };

    window.addEventListener("beforeunload", saveBeforeUserLeaves);

    return () => {
      window.removeEventListener("beforeunload", saveBeforeUserLeaves);
    };
  }, [methods, update]);

  const reset = () => {
    if (debounceTimerRef.current) return;
    if (!methods.formState.isDirty) return;
    const data = methods.getValues();
    methods.reset(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={cn(
          "flex min-h-a4 w-full max-w-a4 flex-col gap-3 rounded border bg-accent-700 p-11 text-md text-accent-500 shadow-elevation",
   /*       getFont("rubik"),*/
        )}
        onChange={methods.handleSubmit(debouncedUpdate)}
        onSubmit={methods.handleSubmit(debouncedUpdate)} // Handles deletion.
        onBlur={reset}
      >
        <div className="flex flex-col gap-1">
          <Username />
          <JobTitle />
        </div>
        <Contacts />
        <Summary />
        <HomeSkills />
        <Languages />
        <Experiences />
      </form>
    </FormProvider>
  );
};
