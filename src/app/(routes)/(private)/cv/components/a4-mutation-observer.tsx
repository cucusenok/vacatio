"use client";

import { useEffect } from "react";
import { debounce } from "lodash-es";
import { usePagination } from "@/cv/stores/use-pagination";

export const A4MutationObserver = () => {
  const { a4Ref, calculatePages, calculateIntersection } = usePagination();

  const onAnyMutation = debounce(() => {
    calculatePages();
    calculateIntersection();
  }, 200);

  useEffect(() => {
    let observer: MutationObserver;
    // eslint-disable-next-line prefer-const
    let timer: NodeJS.Timeout;

    const initializeMutationObserver = () => {
      if (!a4Ref?.current) return;
      clearInterval(timer);
      observer = new MutationObserver(onAnyMutation);
      observer.observe(a4Ref.current, { childList: true, subtree: true });
      onAnyMutation();
    };

    // timer = setInterval(initializeMutationObserver, 1000);
    initializeMutationObserver();
    return () => {
      clearInterval(timer);
      if (observer) observer.disconnect();
    };
  }, [a4Ref]);

  return null;
};
