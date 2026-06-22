import type { Metadata } from "next";
import { SectorWorkPage } from "@/components/SectorWorkPage";
import { getSector } from "@/content/sectors";

const sector = getSector("agtech")!;

export const metadata: Metadata = {
  title: "AgTech",
  description: sector.tagline,
};

export default function AgtechWorkPage() {
  return <SectorWorkPage sector={sector} />;
}
