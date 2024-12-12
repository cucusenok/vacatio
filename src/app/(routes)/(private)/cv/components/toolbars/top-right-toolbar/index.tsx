"use client";

import { motion } from "framer-motion";
import { cn } from "@/helpers/object.helpers";
import { useViewers } from "@/cv/stores/use-viewers";
import { CompanyViewerToggler } from "./company-viewer-toggler";
import { ShareCvButton } from "./share-cv-button";
import { TemplateViewerToggler } from "./template-viewer-toggler";

const animation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4, ease: "easeOut", delay: 1 },
};

export const TopRightToolbar = () => {
  const { isCompanyViewerShown, isTemplateViewerShown } = useViewers();

  return (
    <div className="flex h-toolbar justify-end">
      <motion.div
        className={cn(
          "flex-y h-toolbar w-fit gap-4 rounded-toolbar bg-layer-1 px-4 py-2 shadow-elevation",
          {
            "fixed z-layout": isCompanyViewerShown || isTemplateViewerShown,
          },
        )}
        {...animation}
      >
        <CompanyViewerToggler />
        <TemplateViewerToggler />
        <ShareCvButton />
      </motion.div>
    </div>
  );
};
