"use client";

import { BackgroundBeams } from "@/components/layouts/BackgroundBeams";
import { FlipWords } from "@/components/layouts/FlipWord";
import { TimelineDemo } from "@/components/layouts/TimelineDemo";
import { WavyBackground } from "@/components/layouts/WavyBackground";
import Paragraph from "@/components/Paragraph";
import { BackgroundBeamsDemo } from "@/components/templates/BackgroundBeamsComponents";
import { BackgroundGradient } from "@/components/templates/BackgroundGradient";
import CardPinComponents from "@/components/templates/CardPinComponents";
import { CompareComponents } from "@/components/templates/CompareComponents";
import { DotBackgroundDemo } from "@/components/templates/DotBackgroundDemo";
import { GlobeDemo } from "@/components/templates/GlobeComponents";
import { GridBackgroundDemo } from "@/components/templates/GridBackgroundComponents";
import { LampComponents } from "@/components/templates/LampComponents";
import { MovingCardsComponents } from "@/components/templates/MovingCardsComponents";
import { StickyScrollComponents } from "@/components/templates/StickyScrollComponents";
import { TextRevealCardComponents } from "@/components/templates/TextReveralCardComponents";
import { WobbleCardComponents } from "@/components/templates/WobbleCardComponents";

export default function Home() {
  const words = [
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Engineer",
  ];

  return (
    <>
      <div className="max-w-full w-full h-screen">
        <WavyBackground className="max-w-7xl mx-auto h-screen flex justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center px-4 ">
            <div className="text-4xl md:text-6xl flex flex-col w-full justify-center items-center font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <p>Hi, I'm Faishal</p>
              <FlipWords words={words} />
            </div>
          </div>
        </WavyBackground>
      </div>

      <div className="max-w-7xl mx-auto w-full h-screen flex">
        <div className="max-w-full w-full flex">
          <div className="max-w-full w-full flex flex-col gap-10 justify-center items-start">
            <Paragraph
              value={`As a recent graduate from the Full Stack JavaScript Immersive program at Hacktiv8 Indonesia, I bring a strong skill set in web and mobile development, with expertise in React JS, Next JS, TypeScript, Redux, React Query, Node, Express, Sequelize, PostgreSQL, Mongo and etc. Alongside my formal education, I have practical experience as a Frontend Developer, where I contributed to build projects by developing responsive, user-friendly interfaces and optimizing performance. I am eager to apply my skills to innovative projects, staying updated with the latest technologies, and growing as a Full Stack Developer to create efficient and scalable applications.`}
              firstOffset="start 0.8" // Mulai muncul lebih awal
              secondOffset="start 0.25" // Men
            />
          </div>

          <div className="max-w-full w-full flex justify-center items-center">
            <p>disini foto</p>
          </div>
        </div>
      </div>

      <div className="max-w-full w-full mx-auto gap-10 flex justify-center items-center">
        <DotBackgroundDemo />
      </div>

      {/* <div className="max-w-full w-full min-h-screen">
        <BackgroundBeamsDemo />
      </div>

      <div className="max-w-full w-full flex-col bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="max-w-7xl mt-20 w-full sm:h-full justify-center items-center mx-auto">
          <StickyScrollComponents />
        </div>
        <GlobeDemo />
      </div> */}
    </>
  );
}
