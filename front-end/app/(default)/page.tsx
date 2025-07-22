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

export default function Home() {
  return (
    <>
      {/* <PageIllustration /> */}
      {/* <WorldMapDemo /> */}
      <Hero />
      <FeaturesSectionDemo1 />
      <FeaturesSectionDemo />
      <FollowingPointerDemo />
      <Workflows />
      <Features />
      <Testimonials />
      {/* <Cta /> */}
    </>
  );
}
