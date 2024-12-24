"use client";

import { api } from "@/trpc/react";
import { cn } from "@/helpers/object.helpers";
import { isDuplicate } from "@/helpers/string.helpers";
import { UserRelationsPicker } from "@/constants/user.constants";
import { PickerLoader } from "@/cv/components/toolbars/definition-toolbars/picker-loader";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { useSettings } from "@/cv/stores/use-settings";
import { ScrollArea } from "@/ui";

export const UserSkills = (props: { onClick: (name: string, isUserSkill?: boolean) => void }) => {
  const { onClick } = props;
  const cv = useDataContext((state) => state.cv);
  const { data: user, isLoading } = api.user.get.useQuery({ with: UserRelationsPicker });
  const { hidePresent } = useSettings();

  if (isLoading) return <PickerLoader />;
  if (!user?.skills) return "Couldn't load your skills";

  const skills = hidePresent
    ? user.skills.filter((skill) => !cv?.skills?.some((s) => isDuplicate(s.name!, skill.name!)))
    : user.skills;

  return (
    <section className={cn("flex flex-col gap-2", skills.length > 18 && "border-b")}>
      <h3 className="flex-y gap-2 font-semibold">
        {user.image && (
          <img
            src={user.image}
            alt={user.name!}
            width={20}
            height={20}
            className="rounded-full"
          />
        )}
        {user.name}

        <span className="text-muted">({skills.length})</span>
      </h3>
      <ScrollArea height={150} className="appear-animation flex-y flex-wrap gap-2 py-5">
        {skills.map((skill) => (
          <button key={skill.id} className="primary sm" onClick={() => onClick(skill.name!, true)}>
            {skill.name}
          </button>
        ))}
        {skills.length === 0 && (
          <span className="text-muted">All your skills are already present in your CV</span>
        )}
      </ScrollArea>
    </section>
  );
};
