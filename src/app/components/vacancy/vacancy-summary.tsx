import type { Vacancy } from "@/types/vacancy.types";

export const VacancySummary = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;

  if (!vacancy.aiSummary) return null;

  return (
    <div className="flex flex-col gap-2 text-sm">
      <h3 className="font-semibold">AI summary</h3>
      {vacancy.aiSummary}
    </div>
  );
};
