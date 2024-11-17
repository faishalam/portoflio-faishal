import React from "react";
import { TextRevealCardComponents } from "./TextReveralCardComponents";
import { CompareComponents } from "./CompareComponents";
import { WobbleCardComponents } from "./WobbleCardComponents";
import { TimelineDemo } from "../layouts/TimelineDemo";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { CardHoverComponents } from "./CardHoverComponents";
import { InfiniteMovingCards } from "../layouts/InfiniteMovingCards";

export function DotBackgroundDemo() {
  return (
    <div className="w-full flex-col bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-10 max-w-7xl mt-20">
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
