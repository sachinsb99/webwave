import Contact from "@/components/Contact";
import { BackgroundBeamsWithCollisionDemo } from "@/components/background-collision";
import { GlobeDemo } from "@/components/globe-demo";
import { GoogleGeminiEffectDemo } from "@/components/gemini-connection";
import { FeaturesSectionDemo } from "@/components/feature2";
import { TimelineDemo } from "@/components/timeline-demo";
import { CompareDemo } from '@/components/compare2';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Web Wave",
  description: "Web Development Company",
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
