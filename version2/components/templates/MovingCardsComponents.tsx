"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../layouts/InfiniteMovingCards";
import { LampComponents } from "./LampComponents";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { CardHoverComponents } from "./CardHoverComponents";

export function MovingCardsComponents() {
  return (
    <div className="h-full max-w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="flex flex-col max-w-full w-full justify-center items-center gap-20 mb-10">
        <TextGenerateEffect words={"Skills & Tech Stack"} />
        <CardHoverComponents />
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
      <InfiniteMovingCards items={testimonials} direction="right" speed="fast" />
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
