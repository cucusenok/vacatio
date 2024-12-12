import type { Vacancy } from "@/types/vacancy.types";
import { Badge } from "@/ui";

export const VacancySkills = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  if (!vacancy.requiredSkills?.length) return null;

  return (
    <div className="flex-y flex-wrap gap-3">
      {vacancy.requiredSkills.map((skill) => (
        <Badge key={skill} className="md bg-accent-400">
          {skill}
        </Badge>
      ))}
    </div>
  );
};
