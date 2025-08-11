"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div> */}
<div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div className="relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50">
      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide">
        OUR PREMIUM SERVICES
      </span>
    </div>

    {/* Main Heading */}
    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 max-w-5xl leading-tight">
      <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
        Dive Into Our 
      </span>
      <br />
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
        Extensive Services
      </span>
    </h2>

    {/* Power Tagline */}
    <div className="mb-8">
      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
        Boost Your Business{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold text-2xl md:text-3xl lg:text-4xl">
            10X
          </span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping"></div>
        </span>{" "}
        Powerful With Us
      </p>
    </div>

    {/* Description */}
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-medium">
      Transform your digital presence with our comprehensive suite of cutting-edge services. 
      From stunning web development to powerful e-commerce solutions and advanced IT services – 
      we're your trusted partner in digital success.
    </p>

    {/* Stats or Key Points */}
    <div className="mt-10 flex flex-wrap gap-8 items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">50+</span>
        </div>
        <div>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200">Projects Delivered</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Successful completions</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">24/7</span>
        </div>
        <div>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200">Support</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Always available</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">10X</span>
        </div>
        <div>
          <p className="font-semibold text-neutral-800 dark:text-neutral-200">Growth Potential</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Business acceleration</p>
        </div>
      </div>
    </div>

    {/* Call-to-Action Arrow */}
    <div className="mt-12 flex justify-center">
      <div className="animate-bounce">
        <div className="w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
