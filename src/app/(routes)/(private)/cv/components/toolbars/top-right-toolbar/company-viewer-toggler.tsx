"use client";

import { cn } from "@/helpers/object.helpers";
import { CompanyImage } from "@/app/components/company-image";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useViewers } from "@/cv/stores/use-viewers";
import { Chevron } from "@/icons";

export const CompanyViewerToggler = () => {
  const { isCompanyViewerShown, setIsCompanyViewerShown } = useViewers();
  const vacancy = useDataContext((state) => state.vacancy);

  return (
    <button
      className="with-icon text-sm"
      onClick={() => setIsCompanyViewerShown(!isCompanyViewerShown)}
      title={vacancy?.companyName ?? "Company"}
      aria-label={vacancy?.companyName ?? "Company"}
      disabled={!vacancy}
    >
      <CompanyImage {...vacancy} />
      {vacancy?.companyName}
      <Chevron
        className={cn("transition-transform duration-300", {
          "rotate-[90deg]": isCompanyViewerShown,
          "rotate-[-90deg]": !isCompanyViewerShown,
        })}
        fontSize={12}
      />
    </button>
  );
};
