"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { images } from "@/constants/images.constants";
import { publicRoutes } from "@/constants/routes.constants";
import { LogoLoader } from "@/ui";

const LogoutPage = () => {
  useEffect(() => {
    void signOut().then(() => {
      /**
       * Kill React Query cache.
       */
      window.location.href = publicRoutes.welcome;
    });
  }, []);

  return (
    <main className="wrapper grow">
      <div className="flex-center flex-col">
        <img src={images.illustrations.timeToFly} alt="Time to fly" width={250} height={250} />
        <h1 className="flex-center gap-3 text-center text-headline-2 font-bold">
          <LogoLoader size="sm" />
          Logging you out...
        </h1>
      </div>
    </main>
  );
};

export default LogoutPage;
