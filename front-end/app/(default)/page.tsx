export const metadata = {
  title: "Bug Busters",
  description: "Let's trash your Bugs",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import { WorldMapDemo } from "@/components/world-map";
import { FeaturesSectionDemo1 } from "@/components/features1";
import { FeaturesSectionDemo } from "@/components/feature2";
import { FollowingPointerDemo } from "@/components/following-pointer";
import { CometCardDemo } from "@/components/comet-card-demo";
import { GlobeDemo } from "@/components/globe-demo";
import { GoogleGeminiEffectDemo } from "@/components/gemini-connection";
import { TypewriterEffectSmoothDemo } from "@/components/typewitter-effect-demo";
import { ColourfulTextDemo } from "@/components/custom-dashboard";
import { HeroScrollDemo } from "@/components/container-scroll-animation-demo";
import HeroUI from "@/components/heros";
import { PointerHighlightDemo } from "@/components/pointer-highlighter";

export default function Home() {
  return (
    <>
      {/* <PageIllustration /> */}
      {/* <WorldMapDemo /> */}
      {/* <Hero /> */}
      <HeroUI />
      <PointerHighlightDemo />
      <FeaturesSectionDemo />
      <HeroScrollDemo />
      <FeaturesSectionDemo1 />
      <ColourfulTextDemo />
      {/* <GlobeDemo /> */}
      {/* <TypewriterEffectSmoothDemo /> */}
      <GoogleGeminiEffectDemo />
      {/* <CometCardDemo /> */}
      {/* <FollowingPointerDemo /> */}
      <Workflows />
      <Features />
      <Testimonials />
      {/* <Cta /> */}
    </>
  );
}
