import type { Vacancy } from "@/types/vacancy.types";
import { Badge } from "@/ui";

export const VacancyNuggets = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  return (
    <div className="flex-y flex-wrap gap-3">
      {vacancy.requiredYearsMin && (
        <Badge className="md w-fit bg-accent-400">
          {vacancy.requiredYearsMin}
          {vacancy.requiredYearsMax &&
            vacancy.requiredYearsMin !== vacancy.requiredYearsMax &&
            ` - ${vacancy.requiredYearsMax}`}{" "}
          years experience
        </Badge>
      )}
      {[vacancy.country, vacancy.employmentType, vacancy.location].filter(Boolean).map((nugget) => (
        <Badge key={nugget} className="md bg-accent-400">
          {nugget}
        </Badge>
      ))}
    </div>
  );
};
