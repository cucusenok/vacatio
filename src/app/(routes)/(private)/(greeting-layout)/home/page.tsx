import type { Metadata } from "next";
import { Suspense } from "react";
import { HomeCvToolbar } from "@/app/components/home-cv/home-cv-toolbar";
import { AutosaveForm } from "@/app/components/home-cv/home-cv/autosave-form";
import { FullscreenLoader } from "@/app/components/ui/fullscreen-loader";
import { UserRelationsPicker } from "@/constants/user.constants";
import { api } from "@/trpc/server";

export const metadata: Metadata = {
  title: "Your home — Vocatio",
};

const HomeCv = async () => {
  const user = await api.user.get({ with: UserRelationsPicker });
  return <AutosaveForm user={user} />;
};

const HomePage = () => {
  return (
    <main className="wrapper flex-center">
      <Suspense fallback={<FullscreenLoader />}>
        <div className="flex-x w-full gap-2">
          <HomeCv />
          <HomeCvToolbar />
        </div>
      </Suspense>
    </main>
  );
};

export default HomePage;
