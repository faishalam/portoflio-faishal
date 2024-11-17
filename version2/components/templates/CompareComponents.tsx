import React from "react";
import apiCall from "../../../public/images/apiCall.png";
import { Compare } from "../layouts/Compare";

export function CompareComponents() {
  return (
    <div className="p-4 max-w-full w-full border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage="/images/apiCall.png"
        secondImage="/images/context.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full md:w-lg"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
