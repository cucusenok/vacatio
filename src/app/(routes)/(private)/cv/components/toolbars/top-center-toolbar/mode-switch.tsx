"use client";

import { BsEnvelopePaper } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { cn, typedEntries } from "@/helpers/object.helpers";
import { type Mode, usePagination } from "@/cv/stores/use-pagination";

type Config = {
  Icon: React.ReactNode;
  label: string;
};

const mapping: Record<Mode, Config> = {
  cv: {
    Icon: <IoDocumentTextOutline size={20} aria-hidden />,
    label: "CV",
  },
  "cover-letter": {
    Icon: <BsEnvelopePaper size={17} aria-hidden />,
    label: "Cover Letter",
  },
};

export const ModeSwitch = () => {
  const { mode: current, setMode } = usePagination((state) => ({
    setMode: state.setMode,
    mode: state.mode,
  }));

  return (
    <div className="flex-y h-full rounded-l-xl border-r px-2">
      {typedEntries(mapping).map(([mode, config]) => (
        <button
          key={mode}
          onClick={() => setMode(mode)}
          className={cn("accent-2 md", current === mode && "bg-accent-400")}
        >
          {config.Icon}
        </button>
      ))}
    </div>
  );
};
