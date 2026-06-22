import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { SkillsStrip } from "@/components/SkillsStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsStrip />
      <FeaturedWork />
    </>
  );
}
