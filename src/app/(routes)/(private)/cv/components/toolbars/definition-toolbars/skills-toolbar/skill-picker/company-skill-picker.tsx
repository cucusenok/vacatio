"use client";

import { cn } from "@/helpers/object.helpers";
import { isDuplicate } from "@/helpers/string.helpers";
import { CompanyImage } from "@/app/components/company-image";
import { PickerLoader } from "@/cv/components/toolbars/definition-toolbars/picker-loader";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useSettings } from "@/cv/stores/use-settings";
import { ScrollArea } from "@/ui";

export const CompanySkills = (props: { onClick: (name: string) => void }) => {
  const { onClick } = props;
  const { cv, vacancy } = useDataContext((state) => ({ cv: state.cv, vacancy: state.vacancy }));
  const { hidePresent } = useSettings();

  if (!vacancy) return <PickerLoader />;
  if (!vacancy.requiredSkills) return "Couldn't load vacancy skills";

  const skills = hidePresent
    ? vacancy.requiredSkills.filter((vs) => !cv?.skills?.some((s) => isDuplicate(s.name!, vs)))
    : vacancy.requiredSkills;

  return (
    <section className={cn("flex flex-col gap-2", skills.length > 18 && "border-b")}>
      <h3 className="flex-y gap-2 font-semibold">
        <CompanyImage {...vacancy} />
        {vacancy.companyName}
        <span className="text-muted">({skills.length})</span>
      </h3>
      <ScrollArea height={150} className="appear-animation flex-y flex-wrap gap-2 py-5">
        {skills.map((skill) => (
          <button key={skill} className="sm danger" onClick={() => onClick(skill)}>
            {skill}
          </button>
        ))}
        {skills.length === 0 && (
          <span className="text-muted">You have all company skills on your CV 🎉</span>
        )}
      </ScrollArea>
    </section>
  );
};
