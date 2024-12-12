"use client";

import { usePagination } from "../stores/use-pagination";

export const MaxPageButton = () => {
  const { maxPages, setMaxPages, calculatePages } = usePagination();
  if (!maxPages) return null;

  const onClick = () => {
    setMaxPages(null);
    calculatePages();
  };

  return (
    <button className="md primary interactive mt-7" onClick={onClick}>
      Restore {maxPages + 1} page
    </button>
  );
};
