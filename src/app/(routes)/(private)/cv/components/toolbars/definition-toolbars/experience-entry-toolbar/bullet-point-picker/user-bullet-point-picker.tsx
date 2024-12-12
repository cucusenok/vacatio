"use client";

import Image from "next/image";
import { api } from "@/trpc/react";
import type { CvExperienceEntry } from "@/types/cv.types";
import { getOriginalEntryByDerivedFromExperienceId } from "@/helpers/user.helpers";
import { UserRelationsPicker } from "@/constants/user.constants";
import { PickerLoader } from "@/cv/components/toolbars/definition-toolbars/picker-loader";
import { useComponentContext } from "@/cv/stores/component-context";

export const UserBulletPointPicker = (props: { onClick: (bulletPoint: string) => void }) => {
  const { onClick } = props;
  const { componentContext: entry } = useComponentContext<CvExperienceEntry>();
  const { data: user, isLoading } = api.user.get.useQuery({ with: UserRelationsPicker });

  if (isLoading) return <PickerLoader />;
  const isError = !user || !entry?.derivedFromExperienceId || !user.experiences;
  if (isError) return "Couldn't load your bullet points";

  const bulletPoints = getOriginalEntryByDerivedFromExperienceId(
    entry.derivedFromExperienceId!,
    user.experiences!,
  );

  return (
    <section>
      <h3 className="with-icon font-semibold text-accent-500">
        {user.image && (
          <Image
            src={user.image}
            alt={user.name!}
            width={20}
            height={20}
            className="rounded-full"
          />
        )}
        Original by {user.name}
      </h3>
      <div className="appear-animation flex flex-col gap-2 py-5">
        {bulletPoints?.map((bp) => (
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
