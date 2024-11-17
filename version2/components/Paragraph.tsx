"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type OffsetType =
  | "start 0"
  | "start 0.1"
  | "start 0.25"
  | "start 0.5"
  | "start 0.75"
  | "start 1"
  | `${number} ${number}`
  | `${number} start`
  | `${number} end`
  | `${number} center`
  | `start ${number}`
  | `end ${number}`;

interface ParagraphProps {
  value: string;
  firstOffset: OffsetType;
  secondOffset: OffsetType;
}

export default function Paragraph({
  value,
  firstOffset,
  secondOffset,
}: ParagraphProps) {
  const element = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: [firstOffset, secondOffset],
  });

  const words = value.split(" ");

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <div className="max-w-full w-full px-14 py-10 bg-neutral-800 rounded-xl">
      <p className="max-w-full text-2xl space-y-2" ref={element}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: any;
}

const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span
      className="relative inline-block mr-2" // Add margin-right to create space
      style={{ display: "inline-block" }}
    >
      <span className="absolute opacity-[0.1]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
