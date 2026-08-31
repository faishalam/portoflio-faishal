"use client";

import { FlipWords } from "@/components/layouts/FlipWord";
import { WavyBackground } from "@/components/layouts/WavyBackground";
import { DotBackgroundDemo } from "@/components/templates/DotBackgroundDemo";

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
              <p>Hi, I&apos;m Faishal</p>
              <FlipWords words={words} />
            </div>
          </div>
        </WavyBackground>
      </div>

      <div className="max-w-full w-full mx-auto gap-10 flex justify-center items-center">
        <DotBackgroundDemo />
      </div>
    </>
  );
}
