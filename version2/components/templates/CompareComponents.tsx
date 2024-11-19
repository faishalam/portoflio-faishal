import React from "react";
import apiCall from "../../../public/images/apiCall.png";
import { Compare } from "../layouts/Compare";

export function CompareComponents() {
  return (
    <div className="max-w-full p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mt-4 md:mt-0">
      <Compare
        firstImage="/images/apiCall.png"
        secondImage="/images/context.png"
        // firstImageClassName="object-cover object-left-top"
        // secondImageClassname="object-cover object-left-top"
        className="md:w-[500px] md:h-[400px] w-[270px] h-[200px]"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
