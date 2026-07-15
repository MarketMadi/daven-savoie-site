import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { SkillsStrip } from "@/components/SkillsStrip";
import { VideoShowcase } from "@/components/VideoShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <SkillsStrip />
      <FeaturedWork />
    </>
  );
}
