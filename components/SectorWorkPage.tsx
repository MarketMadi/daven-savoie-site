import Link from "next/link";
import type { Sector } from "@/content/sectors";
import { getCaseStudiesForSector, type SectorSlug } from "@/content/sectors";
import { CaseStudyCard } from "./CaseStudyCard";
import { DomainNav } from "./DomainNav";

type Props = {
  sector: Sector;
};

export function SectorWorkPage({ sector }: Props) {
  const studies = getCaseStudiesForSector(sector.slug as SectorSlug);

  return (
    <div className="px-6 py-16">
      <div className="mx-auto layout-max w-full">
        <Link
          href="/work"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          ← All work
        </Link>

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {sector.label}
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {sector.tagline}
          </h1>
          <DomainNav active={sector.slug as SectorSlug} className="mt-6" />
        </header>

        {studies.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted">No projects listed yet.</p>
        )}
      </div>
    </div>
  );
}
