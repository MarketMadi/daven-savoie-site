import type { Metadata } from "next";
import { SectorWorkPage } from "@/components/SectorWorkPage";
import { getSector } from "@/content/sectors";

const sector = getSector("healthcare")!;

export const metadata: Metadata = {
  title: "Healthcare",
  description: sector.tagline,
};

export default function HealthcareWorkPage() {
  return <SectorWorkPage sector={sector} />;
}
