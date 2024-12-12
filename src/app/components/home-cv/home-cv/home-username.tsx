"use client";

import { useFormContext } from "react-hook-form";

export const Username = () => {
  const { register } = useFormContext();

  return (
    <div className="flex-center text-headline font-semibold">
      <input
        placeholder="Your Name"
        autoComplete="off"
        {...register("name")}
        className="w-full text-center"
      />
    </div>
  );
};
