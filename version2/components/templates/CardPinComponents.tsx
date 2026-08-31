"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../layouts/CardPin";
import { Compare } from "../layouts/Compare";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    id: 1,
    title: "POSDIGI Member of POS Indonesia",
    des: "Web application for eContract, eSign, and eMaterai management system.",
    years: "Agustus 2025 - Present",
    position: "Frontend Engineer",
    firstImage: "/images/e-contract-login.png",
    secondImage: "/images/e-contract-template.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/images/docker.png",
      "/images/jenkins.png",
    ],
    link: "https://econtract.posdigi.co.id",
  },
  {
    id: 2,
    title: "PT POSDIGI - API Marketplace",
    des: "Self-service API marketplace with merchant portal, admin portal, CMS, and a sandbox for API testing.",
    years: "Agustus 2025 - Present",
    position: "Full Stack Engineer",
    firstImage: "/images/api_marketplace_1.png",
    secondImage: "/images/api_marketplace_2.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/images/postgresql-logo.png",
      "/images/docker.png",
      "/images/jenkins.png",
    ],
    link: "https://sandbox.posdigi.co.id",
  },
  {
    id: 3,
    title: "F&B Operational - SaaS",
    des: "AI-powered operating system for coffee shop and F&B businesses: SOP and recipes, real-time inventory ledger, automatic HPP/COGS, POS, cash flow, and multi-outlet financial reporting.",
    years: "2026 - Present",
    position: "Full Stack Engineer",
    firstImage: "/images/fnb_1.png",
    secondImage: "/images/fnb_2.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/go-logo.png",
      "/images/postgresql-logo.png",
      "/images/docker.png",
    ],
    link: "",
  },
  {
    id: 4,
    title: "Talentcore Esports - Freelance",
    des: "CMS and company profile to manage and showcase esports talents, with booking and scheduling for game house training and facility reservation.",
    years: "April 2026 - Juni 2026",
    position: "Full Stack Engineer",
    firstImage: "/images/talentcore_1.png",
    secondImage: "/images/talentcore_2.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/images/postgresql-logo.png",
      "/images/docker.png",
      "/images/jenkins.png",
    ],
    link: "https://talentcore.id/home",
  },
  {
    id: 5,
    title: "PT Kalimantan Prima Persada (KPP Mining)",
    des: "Web application for managing Berita Acara, Debit Notes, and Invoices.",
    years: "September 2025 - December 2025",
    position: "Full Stack Engineer",
    firstImage: "/images/ba-management-login.png",
    secondImage: "/images/ba-management-second.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/vercel.svg",
      "/javascript.svg",
      "/aws-white.svg",
    ],
    link: "https://ba-management.vercel.app/login",
  },
  {
    id: 6,
    title: "PT Kalimantan Prima Persada (KPP Mining)",
    des: "Web application for managing Stock Inventory, Purchase Orders, and Supplier Data.",
    years: "September 2025 - December 2025",
    position: "Full Stack Engineer",
    firstImage: "/images/stock-management-login.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/vercel.svg",
      "/javascript.svg",
      "/aws-white.svg",
    ],
    link: "https://stock-management-kpp.vercel.app/login",
  },
  {
    id: 7,
    title: "PT Kalimantan Prima Persada (KPP Mining)",
    des: "Build Web App to monitor and manage assets, approvals, and overdue reminders, streamlining asset management processes and improving data accuracy.",
    years: "April 2024 - Present",
    position: "Full Stack Engineer",
    firstImage: "/images/kpp-auth.png",
    secondImage: "/images/kpp-dashboard.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/vercel.svg",
      "/javascript.svg",
      "/aws-white.svg",
    ],
    link: "https://kpp-mining-exjr7pzne-faishals-projects-bab197b8.vercel.app/",
  },
  {
    id: 8,
    title: "Fashion E-commerce - Individual Project",
    des: "A full stack fashion e-commerce app end to end user payments using midtrans",
    years: "March 2024 - April 2024",
    position: "Full Stack Engineer",
    firstImage: "/images/fashion-dashboard.png",
    secondImage: "/images/fashion-list.png",
    img: "/p4.svg",
    iconLists: ["/react.svg", "/tail.svg", "/javascript.svg"],
    link: "https://drive.google.com/file/d/1CEzk4PqUGw_PoHGG0psAmaLJvZa5fU8N/view",
  },
];

export default function CardPinComponents() {
  return (
    <div className="max-w-7xl w-full mx-auto ">
      <div className="max-w-full w-full mx-auto px-4">
        <h1 className="text-4xl flex justify-center mb-10 items-center md:text-4xl lg:text-5xl font-semibold max-w-full mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Recent Project
        </h1>
      </div>
      <div className="max-w-full w-full flex h-full gap-6 sm:gap-16 overflow-x-auto p-4 sm:p-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[85vw] shrink-0 space-y-10 "
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center w-full sm:w-96 h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full lg:rounded-3xl bg-white"
                  // style={{ backgroundColor: "#1F1F1F" }}
                ></div>
                <div className="flex flex-1 rounded-lg w-full">
                  <Compare
                    firstImage={item.firstImage}
                    secondImage={item.secondImage}
                    className="w-full h-[200px] md:h-[250px]"
                    slideMode="hover"
                    autoplay={true}
                  />
                </div>
              </div>

              <h1 className="font-bold text-md text-base line-clamp-1 text-white">
                {item.title}
              </h1>
              <div className="flex w-full max-w-full justify-between text-xs">
                <p className="text-white">{item.position}</p>
                <p className="text-white">{item.years}</p>
              </div>

              <p
                className="lg:text-lg font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black shadow-lg lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="tech stack icon"
                        width={40}
                        height={40}
                        sizes="40px"
                        className="p-2 object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-xs text-purple-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
