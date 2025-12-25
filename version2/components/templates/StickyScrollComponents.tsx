"use client";
import React from "react";
import Image from "next/image";
import CardPinComponents from "./CardPinComponents";
import { CardWorkExperience } from "./CardWorkExperience";
import { PinContainer } from "../layouts/CardPin";
import { Compare } from "../layouts/Compare";
import { StickyScroll } from "../layouts/StickyScroll";

const content = [
  {
    title: "PT POSDIGI Member of POS Indonesia",
    position: "Software Engineer - Frontend",
    years: "Agustus 2025 - Present",
    description:
      "As a Frontend Engineer at POSDIGI, I developed the eContract POSDIGI web application to manage digital contracts for corporate clients.",
    points: (
      <div className="max-w-full w-full flex flex-col gap-3 mt-10">
        {[
          {
            label: "Technology",
            value:
              "Directed the transition from PHP to React JS, enhancing application scalability, maintainability and clean code.",
          },
          {
            label: "UI Development",
            value:
              "Built modular, responsive UI components with React.js, ensuring a seamless and consistent user experience.",
          },
          {
            label: "Collaboration",
            value:
              "Worked closely with backend developers and UI/UX designers to integrate APIs and meet design specifications.",
          },
          {
            label: "Optimization",
            value:
              "Implemented performance enhancements, reducing load times and improving overall responsiveness.",
          },
          {
            label: "Quality Assurance",
            value:
              "Conducted rigorous testing to ensure stability and reliability throughout the development process.",
          },
        ].map((field, index) => (
          <div key={index} className="flex w-full max-w-fulll px-5">
            <div className="w-full flex justify-between max-w-[140px] md:max-w-[150px]">
              <span className="font-extrabold text-md">{field.label}</span>
              <span className="font-extrabold text-md mr-2">:</span>
            </div>
            <div className="text-md max-w-full w-full">
              <p className="max-w-full w-full">{field.value}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    content: (
      <div className="h-full max-w-full w-full flex items-center justify-center text-white">
        <div className="h-[40rem] max-w-full w-full flex items-center justify-center ">
          <PinContainer
            title="smart-test"
            href=""
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 max-w-full w-full">
              <div className="flex flex-1 rounded-lg w-full">
                <Compare
                  firstImage="/images/e-contract-login.png"
                  secondImage="/images/e-contract-template.png"
                  // firstImageClassName="object-cover object-left-top"
                  // secondImageClassname="object-cover object-left-top"
                  className="h-[250px]"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    ),
  },
  {
    title: "PT Matra Teknologi",
    position: "Software Engineer - Frontend",
    years: "November 2024 - July 2025",
    description:
      "As a Frontend Engineer at Matra, I developed a web application for CKB Logistics to manage inquiries and quotations.",
    points: (
      <div className="max-w-full w-full flex flex-col gap-3 mt-10">
        {[
          {
            label: "Technology",
            value:
              "Directed the transition from PHP to React JS, enhancing application scalability, maintainability and clean code.",
          },
          {
            label: "UI Development",
            value:
              "Built modular, responsive UI components with React.js, ensuring a seamless and consistent user experience.",
          },
          {
            label: "Collaboration",
            value:
              "Worked closely with backend developers and UI/UX designers to integrate APIs and meet design specifications.",
          },
          {
            label: "Optimization",
            value:
              "Implemented performance enhancements, reducing load times and improving overall responsiveness.",
          },
          {
            label: "Quality Assurance",
            value:
              "Conducted rigorous testing to ensure stability and reliability throughout the development process.",
          },
        ].map((field, index) => (
          <div key={index} className="flex w-full max-w-fulll px-5">
            <div className="w-full flex justify-between max-w-[140px] md:max-w-[150px]">
              <span className="font-extrabold text-md">{field.label}</span>
              <span className="font-extrabold text-md mr-2">:</span>
            </div>
            <div className="text-md max-w-full w-full">
              <p className="max-w-full w-full">{field.value}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    content: (
      <div className="h-full max-w-full w-full flex items-center justify-center text-white">
        <div className="h-[40rem] max-w-full w-full flex items-center justify-center ">
          <PinContainer
            title="smart-test"
            href=""
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 max-w-full w-full">
              <div className="flex flex-1 rounded-lg w-full">
                <Compare
                  firstImage="/images/ckb-login.png"
                  secondImage="/images/ckb-inquiry.png"
                  // firstImageClassName="object-cover object-left-top"
                  // secondImageClassname="object-cover object-left-top"
                  className="h-[250px]"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    ),
  },
  {
    title: "PT Igyolini Indonesia (NMW Clinic)",
    position: "Software Engineer - Frontend",
    years: "May 2024 - October 2024",
    description:
      "As a Frontend Engineer at NMW, I led the successful migration of a core medical application, Medlib, from PHP to React JS, achieving significant performance improvements and a modernized user interface. Medlib is a comprehensive medical records application designed for both patients and doctors, featuring essential tools such as appointment scheduling, prescription tracking, and medication recommendations.",
    points: (
      <div className="max-w-full w-full flex flex-col gap-3 mt-10">
        {[
          {
            label: "Technology",
            value:
              "Directed the transition from PHP to React JS, enhancing application scalability, maintainability and clean code.",
          },
          {
            label: "UI Development",
            value:
              "Built modular, responsive UI components with React.js, ensuring a seamless and consistent user experience.",
          },
          {
            label: "Collaboration",
            value:
              "Worked closely with backend developers and UI/UX designers to integrate APIs and meet design specifications.",
          },
          {
            label: "Optimization",
            value:
              "Implemented performance enhancements, reducing load times and improving overall responsiveness.",
          },
          {
            label: "Quality Assurance",
            value:
              "Conducted rigorous testing to ensure stability and reliability throughout the development process.",
          },
        ].map((field, index) => (
          <div key={index} className="flex w-full max-w-fulll px-5">
            <div className="w-full flex justify-between max-w-[140px] md:max-w-[150px]">
              <span className="font-extrabold text-md">{field.label}</span>
              <span className="font-extrabold text-md mr-2">:</span>
            </div>
            <div className="text-md max-w-full w-full">
              <p className="max-w-full w-full">{field.value}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    content: (
      <div className="h-full max-w-full w-full flex items-center justify-center text-white">
        <div className="h-[40rem] max-w-full w-full flex items-center justify-center ">
          <PinContainer
            title="smart-test"
            href=""
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 max-w-full w-full">
              <div className="flex flex-1 rounded-lg w-full">
                <Compare
                  firstImage="/images/nmw-auth.png"
                  secondImage="/images/nmw-dashboard.png"
                  // firstImageClassName="object-cover object-left-top"
                  // secondImageClassname="object-cover object-left-top"
                  className="h-[250px]"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    ),
  },
  {
    title: "PT Kalimantan Prima Persada (KPP Mining)",
    position: "Software Engineer - Full Stack Engineer - Project Based",
    years: "April 2024 - Present",
    description:
      "As a Full Stack Developer to build a web-based application utilized across all departments and sites of PT. Kalimantan Prima Persada (KPP Mining). This application is designed to facilitate asset monitoring, approvals, and overdue reminders, streamlining asset management processes and improving data accuracy.",
    points: (
      <div className="max-w-full w-full flex flex-col gap-3 mt-10">
        {[
          {
            label: "Technology",
            value:
              "Next JS, TypeScript, React Query, Context API, Tailwind CSS, Express, Sequelize, PostgreSQL, Nodemailer, AWS Cloud etc.",
          },
          {
            label: "UI Development",
            value:
              "Atomic Design, responsive UI components with NextJS & Tailwind, ensuring a seamless, consistent user experience and clean code",
          },
          {
            label: "Collaboration",
            value:
              "Worked closely with user KPP to design and build the flow application.",
          },
          {
            label: "Optimization",
            value:
              "Implemented performance enhancements, reducing load times and improving overall responsiveness.",
          },
          {
            label: "Quality Assurance",
            value:
              "Conducted rigorous testing to ensure stability and reliability throughout the development process.",
          },
        ].map((field, index) => (
          <div key={index} className="flex w-full max-w-fulll px-5">
            <div className="w-full flex justify-between max-w-[140px] md:max-w-[150px]">
              <span className="font-extrabold text-md">{field.label}</span>
              <span className="font-extrabold text-md mr-2">:</span>
            </div>
            <div className="text-md max-w-full w-full">
              <p className="max-w-full w-full">{field.value}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    content: (
      <div className="h-full max-w-full w-full  flex items-center justify-center text-white">
        <div className="h-[40rem] max-w-full w-full flex items-center justify-center ">
          <PinContainer
            title="/KPP Monitoring"
            href="kpp-mining-exjr7pzne-faishals-projects-bab197b8.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 max-w-full w-full">
              <div className="flex flex-1 rounded-lg w-full">
                <Compare
                  firstImage="/images/kpp-auth.png"
                  secondImage="/images/kpp-dashboard.png"
                  // firstImageClassName="object-cover object-left-top"
                  // secondImageClassname="object-cover object-left-top"
                  className="h-[250px] w-[]"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    ),
  },
];
export function StickyScrollComponents() {
  return (
    <>
      <div className="text-4xl md:text-4xl lg:text-5xl flex flex-col w-full justify-center items-center font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-24">
        <p>Work Experience</p>
      </div>
      <div className="w-full max-w-full flex justify-center items-center">
        <StickyScroll content={content} />
      </div>
    </>
  );
}
