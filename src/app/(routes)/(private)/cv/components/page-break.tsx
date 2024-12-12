"use client";

import { cn } from "@/helpers/object.helpers";
import { Spacer } from "@/app/components/spacer";
import { $PAGE_BREAK_CN, A4_HEIGHT, PAGE_BREAK_HEIGHT } from "@/constants/cv.constants";
import { usePagination } from "@/cv/stores/use-pagination";
import { useTemplate } from "@/cv/stores/use-template";
import { GarbageBin } from "@/icons";

export const PageBreaks = () => {
  const { template } = useTemplate();
  const { pages, setPages, setMaxPages } = usePagination();

  const onDeletePage = (page: number) => {
    setMaxPages(page - 1);
    setPages(pages - 1);
  };

  return (
    <>
      {Array.from({ length: pages - 1 }).map((_, i) => (
        <div
          key={i}
          role="separator"
          data-html2canvas-ignore
          className={cn("absolute inset-0 z-page-break flex w-full flex-col", $PAGE_BREAK_CN)}
          style={{
            // Start the page break one gutter above the page end. Because the page break shadow spacer (next element) and the bottom a4 gutter both overlap.
            // Thus page break shadow spacer doesnt add up to the page break height.
            top: A4_HEIGHT * (i + 1) - template.gutter,
            height: PAGE_BREAK_HEIGHT + template.gutter * 2,
          }}
        >
          <Spacer style={{ height: template.gutter }} className="page-break-shadow" />
          <Spacer
            style={{ height: template.gutter }}
            className="absolute inset-0 z-god w-full bg-[#fff]"
          />
          <div className="flex-center -ml-[0.23%] w-[100.5%] grow border-y-2 bg-body">
            <button className="md accent-2 with-icon" onClick={() => onDeletePage(i + 2)}>
              <GarbageBin />
              Page {i + 2}
            </button>
          </div>
          <Spacer style={{ height: template.gutter }} className="bg-[#fff]" />
        </div>
      ))}
    </>
  );
};
