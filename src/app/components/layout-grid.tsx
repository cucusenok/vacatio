"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx, { type ClassValue } from "clsx";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type GridItem = {
  id: string;
  Preview: React.ReactNode;
  Content: JSX.Element | React.ReactNode | string;
};

type SelectedCardProps = {
  selected: GridItem | null;
  ref: React.RefObject<HTMLDivElement>;
};

type LayoutGridProps = {
  cards: GridItem[];
  className?: string;
};

const SelectedCard = (props: SelectedCardProps) => {
  const { selected, ref } = props;

  /**
   * Lock document scroll
   * */
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.paddingRight = `10px`;

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.paddingRight = `0px`;
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex-center size-full max-h-[715px] max-w-[1150px] rounded-lg"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {selected?.Content}
    </motion.div>
  );
};

const Overlay = () => {
  return <div className="fixed inset-0 z-overlay bg-overlay" />;
};

export const LayoutGrid = (props: LayoutGridProps) => {
  const { cards, className } = props;
  const [selected, setSelected] = useState<GridItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={cn("appear-animation relative", className)}>
      {selected && <Overlay />}
      {cards.map((card, i) => (
        <div key={i} className="grid-item">
          <motion.div
            onClick={() => {
              setSelected(card);
            }}
            className={cn({
              "flex-center fixed inset-0 z-god m-auto max-h-[715px] max-w-[1150px]":
                selected?.id === card.id,
            })}
            layout
          >
            {selected?.id === card.id && <SelectedCard ref={modalRef} selected={selected} />}
            {selected?.id !== card.id && card.Preview}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
