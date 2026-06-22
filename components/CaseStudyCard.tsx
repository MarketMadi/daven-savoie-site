import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover"
    >
      <div className="card-shine pointer-events-none absolute inset-0" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs text-muted">
            {study.domainLabel}
          </span>
          {study.period && (
            <span className="text-xs text-muted">{study.period}</span>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {study.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {study.subtitle}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
          {study.metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <div className="font-display text-lg font-semibold text-accent">
                {m.value}
              </div>
              <div className="text-xs text-muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
