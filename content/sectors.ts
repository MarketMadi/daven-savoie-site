import type { CaseStudyDomain } from "./case-studies";
import { caseStudies } from "./case-studies";

export type SectorSlug = "fintech" | "healthcare" | "agtech" | "ai";

export type Sector = {
  slug: SectorSlug;
  label: string;
  tagline: string;
  domains: CaseStudyDomain[];
};

export const SECTORS: Sector[] = [
  {
    slug: "healthcare",
    label: "Healthcare",
    tagline: "Legacy redeploys, observability, microservices.",
    domains: ["healthcare"],
  },
  {
    slug: "agtech",
    label: "AgTech",
    tagline: "Crop data pipelines, Lambda automation, security.",
    domains: ["agtech"],
  },
  {
    slug: "fintech",
    label: "Fintech",
    tagline: "Bitcoin infra, trading APIs, decentralized markets.",
    domains: ["fintech", "decentralized"],
  },
  {
    slug: "ai",
    label: "AI",
    tagline: "Model deployment, training pipelines, MLOps.",
    domains: ["ai-ml"],
  },
];

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}

export function getCaseStudiesForSector(slug: SectorSlug) {
  const sector = getSector(slug);
  if (!sector) return [];
  return caseStudies.filter((c) => sector.domains.includes(c.domain));
}
