import type { Vacancy } from "@/types/vacancy.types";
import { getCurrencySymbol } from "@/helpers/vacancy.helpers";
import { Exclamation, Money } from "@/icons";
import { Badge } from "@/ui";

export const Salary = (props: { vacancy: Vacancy }) => {
  const { vacancy } = props;
  const currencySymbol = vacancy.salaryCurrency && getCurrencySymbol(vacancy.salaryCurrency);

  return (
    <div className="flex-y gap-3 text-sm">
      <Money />
      <div className="flex flex-col font-semibold">
        <div className="flex-y gap-2">
          {`${currencySymbol}${vacancy.salaryMin} - ${currencySymbol}${vacancy.salaryMax}`}
          <Badge className="md bg-accent-400">
            {vacancy.isAnnualSalary && "Annually"}
            {vacancy.isHourlySalary && "Hourly"}
            {vacancy.isMonthlySalary && "Monthly"}
          </Badge>
        </div>

        {vacancy.isInferredSalary && (
          <small className="flex-y gap-1 text-xs">
            <Exclamation size={12} /> Estimated salary
          </small>
        )}
      </div>
    </div>
  );
};
