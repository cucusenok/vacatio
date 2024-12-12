"use client";

import { useFormContext } from "react-hook-form";

export const JobTitle = () => {
  const { register } = useFormContext();

  return (
    <div className="flex-center">
      <input
        placeholder="Job Title"
        autoComplete="off"
        {...register("jobTitle")}
        className="w-full text-center"
      />
    </div>
  );
};
