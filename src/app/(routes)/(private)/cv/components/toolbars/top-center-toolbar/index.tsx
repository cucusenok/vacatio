"use client";

import { motion } from "framer-motion";
import DownloadButton from "./download-button";
import { FilenameInput } from "./filename-input";
import { ModeSwitch } from "./mode-switch";

const animation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.4, ease: "easeOut", delay: 1 },
};

export const TopCenterToolbar = () => {
  return (
    <motion.div className="flex-center" {...animation}>
      <div className="flex-y rounded-toolbar h-toolbar bg-layer-1 shadow-elevation">
        <ModeSwitch />
        <FilenameInput />
        <DownloadButton />
      </div>
    </motion.div>
  );
};
