"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);


  const renderWords = () => {
    return (
      <motion.div ref={scope}>
            <motion.span
              className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-full mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {words}
            </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-10 mb-10 sm:mt-32 sm:mb-28">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
