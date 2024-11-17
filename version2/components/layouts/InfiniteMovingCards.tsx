"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { LampContainer } from "./lamp";
import { motion } from "framer-motion";
import { CardHoverComponents } from "../templates/CardHoverComponents";
import { TextGenerateEffect } from "../templates/TextGenerateEffect";
import Image from "next/image";

const words = `Skill & Tech Stack`;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img?: string;
    desc: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] flex flex-col justify-between items-center gap-24",
        className
      )}
    >
      
      <ul
        ref={scrollerRef}
        className={cn(
          " flex max-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
          {items.map((item, idx) => (
            <div
              className="max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-neutral-900 px-10 py-4 flex justify-center items-center gap-3"
              // style={{
              //   background:
              //     "linear-gradient(180deg, var(--neutral-800), var(--neutral-900)",
              // }}
              key={idx}
            >
              {item.img && (
                <Image src={item.img} width={80} height={80} alt="logo" />
              )}
              <h1 className="text-sm font-semibold max-w-full mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                {item.desc}
              </h1>
            </div>
          ))}
      </ul>
    </div>
  );
};
