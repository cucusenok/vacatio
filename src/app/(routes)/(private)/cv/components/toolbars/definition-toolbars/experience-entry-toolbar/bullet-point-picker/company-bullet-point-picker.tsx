"use client";

import { useRef } from "react";
import type { CvExperienceEntry } from "@/types/cv.types";
import { CompanyImage } from "@/app/components/company-image";
import { PickerLoader } from "@/cv/components/toolbars/definition-toolbars/picker-loader";
import { useComponentContext } from "@/cv/stores/component-context";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";

export const CompanyBulletPointPicker = (props: { onClick: (bulletPoint: string) => void }) => {
  const { onClick } = props;
  const vacancy = useDataContext((state) => state.vacancy);
  const { componentContext: entry } = useComponentContext<CvExperienceEntry>();
  const bulletPoints = useRef(entry.bulletPoints);

  if (!entry || !vacancy) return <PickerLoader />;
  if (!bulletPoints.current) return "Couldn't load bullet points";

  return (
    <section>
      <h3 className="with-icon font-semibold text-accent-500">
        <CompanyImage {...vacancy} />
        Tailored to {vacancy.companyName}
      </h3>

      <div className="appear-animation flex flex-col gap-2 py-5">
        {bulletPoints?.current?.map((bp) => (
          <button
            key={bp.value}
            className="md accent-2 !h-auto !whitespace-normal text-left"
            onClick={() => onClick(bp.value!)}
          >
            {bp.value}
          </button>
        ))}
      </div>
    </section>
  );
};
