"use client";

import { useState } from "react";
import type { Vacancy } from "@/types/vacancy.types";
import { SwitchItem } from "../switch-item";

const Responsibilities = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  return (
    <div className="flex flex-col gap-2 text-sm">
      {vacancy.responsibilities?.map((responsibility) => (
        <div key={responsibility} className="bullet flex-y gap-4 before:content-['•']">
          {responsibility}
        </div>
      ))}
    </div>
  );
};

const Description = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  return <div className="whitespace-pre-wrap text-sm">{vacancy.originalDescription}</div>;
};

export const VacancyExpander = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;
  const [isResponsibilitiesOpen, setIsResponsibilitiesOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const setResponsibilities = () => {
    setIsResponsibilitiesOpen(!isResponsibilitiesOpen);
    setIsDescriptionOpen(false);
  };

  const setDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
    setIsResponsibilitiesOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="flex-y flex-wrap gap-x-6 gap-y-4">
        <SwitchItem
          label="Show responsibilities"
          size="sm"
          checked={isResponsibilitiesOpen}
          onCheckedChange={setResponsibilities}
          className="whitespace-nowrap"
        />
        <SwitchItem
          label="Show full text you copied"
          size="sm"
          checked={isDescriptionOpen}
          onCheckedChange={setDescription}
          className="whitespace-nowrap"
        />
      </header>

      {isResponsibilitiesOpen && <Responsibilities vacancy={vacancy} />}
      {isDescriptionOpen && <Description vacancy={vacancy} />}
    </div>
  );
};
