"use client";

import Pusher, { type Channel } from "pusher-js";
import { create } from "zustand";
import type { Pushable } from "@/types/ws.types";
import { getUserChannel } from "@/helpers/ws.helpers";
import { PUSH_DATA_EVENT } from "@/constants/ws.constants";
//import { env } from "@/env";

type Resettable = Pick<Pushable, "vacancy" | "experiences" | "skills" | "summary">;

export type PusherStore = {
  pusher: Pusher | null;
  channel: Channel | null;
  pushable: Pushable | null;
  initialize: (userId: string) => void;
  subscribe: () => void;
  setPushable: (pushable: Partial<Resettable>) => void;
};

export const usePusher = create<PusherStore>((set) => ({
  pusher: null,
  channel: null,
  pushable: null,
  initialize: (userId: string) => {
    const pusherClient = new Pusher("env.NEXT_PUBLIC_PUSHER_APP_KEY", {
      cluster: "mt1",
      authEndpoint: "/api/pusher-auth",
      authTransport: "ajax",
      auth: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    });

    const channelName = getUserChannel(userId);
    const channelInstance = pusherClient.subscribe(channelName);

    set({
      pusher: pusherClient,
      channel: channelInstance,
    });

    // return () => {};
  },

  subscribe: () => {
    const channel = usePusher.getState().channel;
    if (!channel) return;

    channel.bind(PUSH_DATA_EVENT, (updated: Pushable) => {
      set((state: PusherStore) => {
        const pushable = { ...state.pushable, ...updated };
        return {
          pushable,
        };
      });
    });
  },

  setPushable: (partial) => {
    set((state) => {
      const pushable = { ...(state.pushable ?? {}), ...partial } as Pushable;
      return {
        pushable,
      };
    });
  },
}));
