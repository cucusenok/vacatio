"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { closeModals } from "@/helpers/modal.helpers";
import { usePusher } from "./use-pusher";

const usePrevious = (value: unknown) => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const PusherRedirector = () => {
  const pushable = usePusher((state) => state.pushable);
  const router = useRouter();
  const prev = usePrevious(pushable?.redirectTo);

  useEffect(() => {
    if (!pushable?.redirectTo) return;
    if (prev === pushable.redirectTo) return;
    closeModals();
    router.replace(pushable.redirectTo);
  }, [pushable]);

  return null;
};
