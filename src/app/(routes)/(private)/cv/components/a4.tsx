"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DndContainer } from "./definitions/dnd-container";
import { getFont } from "@/helpers/font.helpers";
import { cn } from "@/helpers/object.helpers";
import { A4_HEIGHT, A4_WIDTH, PAGE_BREAK_HEIGHT } from "@/constants/cv.constants";
import { useDataContext } from "@/cv/stores/data/data-store-instance-provider";
import { usePagination } from "@/cv/stores/use-pagination";
import { useTemplate } from "@/cv/stores/use-template";
import { Exclamation } from "@/icons";
import { Badge } from "@/ui";
import { MaxPageButton } from "./max-page-button";
import { PageBreaks } from "./page-break";

const Cv = () => {
  const { a4Ref, pages } = usePagination((state) => ({
    a4Ref: state.a4Ref,
    pages: state.pages,
  }));
  const template = useTemplate((state) => state.template);

  return (
    <div
      ref={a4Ref}
      className={cn("a4", template.layout, getFont(template.font))}
      style={{
        height: A4_HEIGHT * pages,
        width: A4_WIDTH,
      }}
    >
      <DndContainer sortableContext={template.sortableContext} />
      <PageBreaks />
    </div>
  );
};

const CoverLetter = () => {
  const defaultCoverLetter = useDataContext((state) => state.cv?.coverLetter);
  const { register, setValue } = useForm();
  const a4Ref = usePagination((state) => state.a4Ref);

  useEffect(() => {
    register("coverLetter");
  }, [register]);

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    setValue("coverLetter", e.currentTarget.textContent);
  };

  return (
    <>
      <div className="mb-2 flex w-a4 justify-start">
        <Badge className="md flex-y gap-1">
          <Exclamation /> Cover letters are in beta
        </Badge>
      </div>
      <div
        ref={a4Ref}
        contentEditable
        className="min-h-a4 w-a4 whitespace-pre-wrap bg-[#fff] p-[66px] text-[#000] shadow-elevation"
        onInput={onInput}
      >
        {defaultCoverLetter}
        <PageBreaks />
      </div>
    </>
  );
};

export const A4 = () => {
  const { pages, mode } = usePagination((state) => ({ pages: state.pages, mode: state.mode }));

  return (
    <main
      className="flex-y flex-col py-1"
      style={{
        height: A4_HEIGHT * pages + PAGE_BREAK_HEIGHT + 100,
      }}
    >
      {mode === "cv" && <Cv />}
      {mode === "cover-letter" && <CoverLetter />}

      <MaxPageButton />

      <style jsx global>{`
        img {
          display: inline-block !important;
        }
      `}</style>
    </main>
  );
};
