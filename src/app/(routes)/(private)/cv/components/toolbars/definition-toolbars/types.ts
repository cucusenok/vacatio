import type { HTMLAttributes, PropsWithChildren } from "react";
import type { DraggableAttributes } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

export type ToolbarButtonProps = {
  className?: string;
  size?: number;
  side?: "left" | "right" | "top" | "bottom";
  offset?: number;
  tooltip?: string;
};

export type ToolbarProps = PropsWithChildren<{
  dndRef: (node: HTMLElement | null) => void;
  listeners: SyntheticListenerMap | undefined;
  attributes: DraggableAttributes;
  className?: string;
  // node: MutableRefObject<HTMLElement | null>;
}> &
  HTMLAttributes<HTMLLIElement>;
