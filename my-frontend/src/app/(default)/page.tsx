import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import GlowingEffectDemo from "@/components/ui/glowing-effect-demo";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThreeDMarqueeDemoSecond } from "@/components/3d-marquee-demo";
import PropertyCarousel from '@/components/PropertyCarousel';
import HeroUI from "@/components/heros";
import { BackgroundBeamsWithCollisionDemo } from "@/components/background-collision";
import { ContainerTextFlipDemo } from "@/components/container-text-flip";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <BackgroundBeamsWithCollisionDemo />
      {/* <ContainerTextFlipDemo /> */}
      {/* <HeroUI /> */}
      {/* <BackgroundBeams /> */}
      {/* <GlowingEffectDemo /> */}
      {/* <CardHoverEffectDemo /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
