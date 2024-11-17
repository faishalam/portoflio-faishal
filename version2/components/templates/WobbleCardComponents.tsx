"use client";
import Image from "next/image";
import { WobbleCard } from "../layouts/WobbleCard";

export function WobbleCardComponents() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-full">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Best Practices
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            I follow coding best practices to create clean, maintainable, and
            scalable software. I focus on code readability with clear,
            well-organized structure, meaningful variable names, and helpful
            comments. I also prioritize modularity and separation of concerns,
            applying SOLID principles to ensure the code remains flexible and
            easy to extend.
          </p>
        </div>
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-full">
          <h2 className="max-w-sm md:max-w-full text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tech Enthusiast
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          I stay up-to-date with modern technology stacks, using the latest frameworks, tools, and practices to build efficient, high-performance applications. 
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
