"use client";

import { useFormContext } from "react-hook-form";
import { Title } from "./title";

export const Summary = () => {
  const { register } = useFormContext();

  return (
    <section className="flex flex-col gap-1">
      <Title>Summary</Title>
      <textarea
        {...register("summary")}
        className="size-full min-h-[180px] px-1 py-1 font-normal"
        placeholder="Write a summary of your skills and experience here..."
      />
    </section>
  );
};
