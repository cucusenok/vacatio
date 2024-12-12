import type { Vacancy } from "@/types/vacancy.types";

export const CompanyPresentator = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  return (
    <div>
      <h2 className="font-semibold text-accent-500">{vacancy?.companyName}</h2>
      <span>{vacancy.jobTitle}</span>
    </div>
  );
};
