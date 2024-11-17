"use client";
import React from "react";
import { BackgroundBeams } from "../layouts/BackgroundBeams";
import CardPinComponents from "./CardPinComponents";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-6">
      <CardPinComponents />
      <BackgroundBeams />
    </div>
  );
}
