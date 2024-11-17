import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Hacktiv8 Indonesia",
      content: (
        <div className="flex flex-col max-w-full w-full justify-start items-start mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="">October 2023 - February 2024</p>
            <p className="text-xl font-bold">Full Stack JavaScript Bootcamp</p>
            <p className="">Grade : A</p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/hacktiv8_certificate.webp"}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Purwadhika Digital School",
      content: (
        <div className="flex flex-col max-w-full w-full justify-start items-start mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="">November 2022 - June 2023</p>
            <p className="text-xl font-bold">
              Full Stack Digital Marketing Bootamp
            </p>
            <p className="">Grade : A</p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/purwadhika_certificate.png"}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Telkom University",
      content: (
        <div className="flex flex-col max-w-full w-full justify-start items-start mx-auto">
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <p className="">September 2018 - September 2022</p>
            <p className="text-xl font-bold">Bachelor of Accounting</p>
            <p className="">Grade : 3.43</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />*/}
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Timeline data={data} />
    </>
  );
}
