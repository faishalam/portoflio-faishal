import React from "react";
import { HoverBorderGradient } from "../layouts/Button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  btnText: string;
  logo: string;
  link?: string;
}

export function HoverBorderGradientDemo({ btnText, logo, link }: Props) {
  const renderButtonContent = (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center"
    >
      <Image
        src={logo}
        alt="Aceternity Logo"
        width={50}
        height={50}
        className="h-8 w-8"
      />
      <span className="text-xs">{btnText}</span>
    </HoverBorderGradient>
  );

  if (link) {
    return <Link href={link}>{renderButtonContent}</Link>;
  } else {
    return renderButtonContent;
  }
}
