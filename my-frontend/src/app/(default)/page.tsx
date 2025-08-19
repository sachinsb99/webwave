import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
// import Features from "@/components/features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
// import { FeaturesSectionDemo1 } from "@/components/features1";
import GlowingEffectDemo from "@/components/ui/glowing-effect-demo";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThreeDMarqueeDemoSecond } from "@/components/3d-marquee-demo";
import PropertyCarousel from '@/components/PropertyCarousel';
import HeroUI from "@/components/heros";
import { BackgroundBeamsWithCollisionDemo } from "@/components/background-collision";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";
import { GlobeDemo } from "@/components/globe-demo";
import { GoogleGeminiEffectDemo } from "@/components/gemini-connection";
import { FeaturesSectionDemo } from "@/components/feature2";
import { TimelineDemo } from "@/components/timeline-demo";
import GlassBanner from "@/components/glass-banner";
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import ClientScene from '@/components/ClientScene';
import { CompareDemo } from '@/components/compare2';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};


export default function Home() {
  return (
    <>
      {/* <GlassBanner /> */}
      
      <BackgroundBeamsWithCollisionDemo />
      <FeaturesSectionDemo />
      {/* <CompareDemo /> */}
      <TimelineDemo />
      
      {/* <ContainerTextFlipDemo /> */}
      {/* <HeroUI /> */}
      {/* <BackgroundBeams /> */}
      {/* <GlowingEffectDemo /> */}
      {/* <CardHoverEffectDemo /> */}
      {/* <Brands /> */}
      {/* <FeaturesSectionDemo1 /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <GoogleGeminiEffectDemo />
      {/* <Blog /> */}
      <GlobeDemo />
      <Contact />
    </>
  );
}
