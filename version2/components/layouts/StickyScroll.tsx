"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title?: string;
    description?: string;
    content?: React.ReactNode;
    years?: string;
    position?: string;
    points?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-auto md:h-[50rem] max-w-full w-full md:overflow-y-auto flex flex-col md:flex-row justify-center relative md:space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4 max-w-full w-full">
        <div className="max-w-full w-full md:h-screen">
          {content.map((item, index) => (
            <div key={index} className="my-10 md:my-20 w-full">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl md:text-3xl font-bold text-slate-100"
              >
                {item.title}
                <p className="text-slate-300 text-sm mt-2">{item.position}</p>
                <p className="text-slate-300 text-sm">{item.years}</p>
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm text-slate-300 max-w-2xl mt-5"
              >
                {item.description}
                {item.points}
              </motion.div>

              {/* Content ditampilkan langsung di mobile */}
              <div className="md:hidden mt-6 w-full rounded-md overflow-hidden">
                {item.content ?? null}
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky content hanya muncul di desktop */}
      <div
        className={cn(
          "hidden md:block max-w-lg h-full w-full rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
