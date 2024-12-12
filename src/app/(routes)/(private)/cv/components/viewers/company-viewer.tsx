"use client";

import { VacancyNuggets } from "@/app/components/vacancy-nuggets";
import { VacancySkills } from "@/app/components/vacancy-skills";
import { CompanyPresentator } from "@/app/components/vacancy/company-presentator";
import { Salary } from "@/app/components/vacancy/salary";
import { VacancyExpander } from "@/app/components/vacancy/vacancy-expander";
import { VacancySummary } from "@/app/components/vacancy/vacancy-summary";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";

export const CompanyViewer = () => {
  const vacancy = useDataContext((state) => state.vacancy);
  if (!vacancy) return null;

  return (
    <div className="flex flex-col gap-11 px-5">
      <header className="flex flex-col gap-6">
        <CompanyPresentator vacancy={vacancy} />
        <Salary vacancy={vacancy} />
      </header>

      <div className="flex flex-col gap-8">
        <VacancyNuggets vacancy={vacancy} />
        <VacancySkills vacancy={vacancy} />
        <VacancySummary vacancy={vacancy} />
        <VacancyExpander vacancy={vacancy} />
      </div>
    </div>
  );
};
