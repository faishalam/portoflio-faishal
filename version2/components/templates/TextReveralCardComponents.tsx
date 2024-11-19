"use client";
import React from "react";
import { SparklesFont } from "./SparklesFont";

export function TextRevealCardComponents() {
  return (
    <div className="max-w-full mx-auto w-full">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-full mx-auto relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Tech enthusiast with a passion for
        <SparklesFont>development</SparklesFont>
      </h1>
     
    </div>
  );
}
