import type { Metadata } from "next";
import { SectorWorkPage } from "@/components/SectorWorkPage";
import { getSector } from "@/content/sectors";

const sector = getSector("ai")!;

export const metadata: Metadata = {
  title: "AI",
  description: sector.tagline,
};

export default function AiWorkPage() {
  return <SectorWorkPage sector={sector} />;
}
