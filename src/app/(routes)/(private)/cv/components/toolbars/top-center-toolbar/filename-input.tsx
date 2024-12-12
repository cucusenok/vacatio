"use client";

import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { LogoLoader } from "@/ui";

const Loader = () => {
  return (
    <div className="flex-center w-[150px]">
      <LogoLoader size="sm" className="ml-11" />
    </div>
  );
};

export const FilenameInput = () => {
  const { filename, setFilename } = useDataContext((state) => ({
    filename: state.cv?.filename,
    setFilename: state.setFilename,
  }));
  if (!filename) return <Loader />;

  return (
    <div className="flex-y appear-animation border border-y-transparent border-l-transparent focus-within:border-accent">
      <input
        type="text"
        placeholder="Filename"
        className="w-[220px] border-none px-3 py-2 text-sm outline-none"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};
