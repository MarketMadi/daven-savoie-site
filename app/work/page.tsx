import type { Metadata } from "next";
import {
  caseStudies,
  DOMAIN_LABELS,
  type CaseStudyDomain,
} from "@/content/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { DomainNav } from "@/components/DomainNav";

export const metadata: Metadata = {
  title: "Work",
  description:
    "DevOps and platform engineering work across fintech, healthcare, agtech, AI, and open source.",
};

const domainOrder: CaseStudyDomain[] = [
  "open-source",
  "fintech",
  "decentralized",
  "healthcare",
  "agtech",
  "ai-ml",
  "platform",
  "social-impact",
];

export default function WorkPage() {
  const grouped = domainOrder
    .map((domain) => ({
      domain,
      label: DOMAIN_LABELS[domain],
      studies: caseStudies.filter((c) => c.domain === domain),
    }))
    .filter((g) => g.studies.length > 0);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto layout-max w-full">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Work
        </h1>
        <DomainNav className="mt-6" />
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Work grouped by domain. Healthcare and agtech contracts are anonymised.
          Everything else is named.
        </p>

        <div className="mt-16 space-y-16">
          {grouped.map(({ domain, label, studies }) => (
            <section key={domain}>
              <h2 className="mb-6 font-display text-xl font-semibold text-accent">
                {label}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {studies.map((study) => (
                  <CaseStudyCard key={study.slug} study={study} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
