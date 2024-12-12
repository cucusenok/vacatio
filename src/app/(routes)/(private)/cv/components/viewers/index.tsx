"use client";

import { useViewers } from "@/cv/stores/use-viewers";
import { ResizeIcon } from "@/icons";
import { ResizablePanel } from "@/ui";
import { CompanyViewer } from "./company-viewer";
import { TemplateViewer } from "./template-viewer";

export const Viewers = () => {
  const { isCompanyViewerShown, isTemplateViewerShown } = useViewers();
  const shown = isCompanyViewerShown || isTemplateViewerShown;

  return (
    <ResizablePanel defaultSize={30} minSize={20} className={shown ? "appear-animation" : "hidden"}>
      <div className="group/viewers fixed mr-8 h-[75vh] overflow-y-auto rounded-toolbar bg-layer-1 pt-8 shadow-elevation">
        <ResizeIcon className="appear-animation absolute left-[-10px] top-1/2 hidden -translate-y-1/2 group-hover/viewers:block" />

        {isCompanyViewerShown && <CompanyViewer />}
        {isTemplateViewerShown && <TemplateViewer />}

        {/* Hack to prevent moving the viewer as you start resizing it */}
        <div className="flex-y flex-wrap gap-3" aria-hidden>
          {Array.from({ length: 40 }).map((_, index) => (
            <div key={index} className="invisible h-1 w-5">
              {index}
            </div>
          ))}
        </div>
      </div>
    </ResizablePanel>
  );
};
