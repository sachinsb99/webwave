import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-4 md:p-6 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 w-full max-w-2xl h-[300px] md:h-[400px]"
      >
        <Compare
          firstImage="https://assets.aceternity.com/code-solution.png"
          secondImage="/images/services/3196758.jpg"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
