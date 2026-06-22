import Link from "next/link";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import { CaseStudyCard } from "./CaseStudyCard";
import { DomainNav } from "./DomainNav";

export function FeaturedWork() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="px-6 py-16">
      <div className="mx-auto layout-max w-full">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <DomainNav className="mt-4" />
          </div>
          <Link
            href="/work"
            className="hidden text-sm text-accent transition-colors hover:text-accent-dim sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <Link
          href="/work"
          className="mt-8 inline-block text-sm text-accent transition-colors hover:text-accent-dim sm:hidden"
        >
          View all work →
        </Link>
      </div>
    </section>
  );
}
