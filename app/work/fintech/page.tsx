import type { Metadata } from "next";
import { SectorWorkPage } from "@/components/SectorWorkPage";
import { getSector } from "@/content/sectors";

const sector = getSector("fintech")!;

export const metadata: Metadata = {
  title: "Fintech",
  description: sector.tagline,
};

export default function FintechWorkPage() {
  return <SectorWorkPage sector={sector} />;
}
