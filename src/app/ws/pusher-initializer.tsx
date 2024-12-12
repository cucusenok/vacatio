"use client";

import { useEffect } from "react";
import { usePusher } from "./use-pusher";

export const PusherInitializer = ({ userId }: { userId: string }) => {
  const { initialize, subscribe } = usePusher((state) => ({
    initialize: state.initialize,
    subscribe: state.subscribe,
  }));

  useEffect(() => {
    initialize(userId);
    subscribe();
  }, []);

  return null;
};
