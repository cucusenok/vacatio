"use client";

import { signIn } from "next-auth/react";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { privateRoutes } from "@/constants/routes.constants";

type SignInButtonProps = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;

export const SignInButton = (props: SignInButtonProps) => {
  const { children } = props;

  const login = () => {
    void signIn("google", { callbackUrl: privateRoutes.home });
  };

  return (
    <button {...props} onClick={login}>
      {children}
    </button>
  );
};
