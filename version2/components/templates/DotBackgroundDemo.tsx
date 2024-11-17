'use client'
import React, { useEffect, useState } from "react";
import { TextRevealCardComponents } from "./TextReveralCardComponents";
import { CompareComponents } from "./CompareComponents";
import { WobbleCardComponents } from "./WobbleCardComponents";
import { TimelineDemo } from "../layouts/TimelineDemo";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { CardHoverComponents } from "./CardHoverComponents";
import { InfiniteMovingCards } from "../layouts/InfiniteMovingCards";
import Paragraph, { OffsetType } from "../Paragraph";

export function DotBackgroundDemo() {
  const [offsets, setOffsets] = useState({
    firstOffset: "start 0.9" as OffsetType, //
    secondOffset: "start 0.20" as OffsetType, 
  });

  // Menggunakan useEffect untuk mendeteksi perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setOffsets({
          firstOffset: "start 0.7",
          secondOffset: "start 0.3",
        });
      } else if (window.innerWidth >= 768) {
        // md breakpoint
        setOffsets({
          firstOffset: "start 0.8",
          secondOffset: "start 0.25",
        });
      } else if (window.innerWidth >= 640) {
        // sm breakpoint
        setOffsets({
          firstOffset: "start 0.9",
          secondOffset: "start 0.2",
        });
      } else {
        setOffsets({
          firstOffset: "start 0.8",
          secondOffset: "start 0.2",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full flex-col bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full h-full md:h-screen">
        <div className="max-w-full w-full flex flex-col px-10 md:px-0 justify-center items-center">
          <div className="text-4xl md:text-4xl lg:text-5xl flex flex-col w-full font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-20 mb-20">
            <p>About Me</p>
          </div>
          <Paragraph
            value={`As a recent graduate from the Full Stack JavaScript Immersive program at Hacktiv8 Indonesia, I bring a strong skill set in web and mobile development, with expertise in React JS, Next JS, TypeScript, Redux, React Query, Node, Express, Sequelize, PostgreSQL, Mongo and etc. Alongside my formal education, I have practical experience as a Frontend Developer, where I contributed to build projects by developing responsive, user-friendly interfaces and optimizing performance. I am eager to apply my skills to innovative projects, staying updated with the latest technologies, and growing as a Full Stack Developer to create efficient and scalable applications.`}
            firstOffset={offsets.firstOffset}
            secondOffset={offsets.secondOffset}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-10 max-w-7xl mt-20 h-full md:h-screen px-10 md:px-0">
        <div className="flex flex-col justify-start items-start max-w-full w-full gap-20 ">
          <TextRevealCardComponents />
          <CompareComponents />
        </div>
        <WobbleCardComponents />
      </div>

      <div className="md:h-full h-screen">
        <TimelineDemo />
      </div>

      <div className="h-screen max-w-full rounded-md flex flex-col antialiased items-center relative overflow-hidden">
        <TextGenerateEffect words={"Skills & Tech Stack"} />
        <div className="flex flex-col max-w-full w-full justify-center items-center gap-24">
          <CardHoverComponents />
        </div>
        <div className="max-w-full w-full mt-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="fast"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    desc: "CloudFlare",
  },
  {
    desc: "AWS",
  },
  {
    desc: "Sequelize",
  },
  {
    desc: "Sequelize",
  },
  {
    desc: "React Query",
  },
  {
    desc: "Bootstrap",
  },
  {
    desc: "React Native",
  },
  {
    desc: "Clean Code",
  },
  {
    desc: "Atomic Design",
  },
  {
    desc: "3rd Party API",
  },
];
