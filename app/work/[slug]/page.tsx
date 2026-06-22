import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Not found" };
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/work"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          ← All work
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-theme-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              {study.domainLabel}
            </span>
            {study.period && (
              <span className="text-sm text-muted">{study.period}</span>
            )}
          </div>
          <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {study.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{study.subtitle}</p>
        </header>

        <dl className="mt-10 grid grid-cols-3 gap-6 rounded-theme-card border border-border bg-surface p-6">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-display text-2xl font-bold text-accent">
                {m.value}
              </dt>
              <dd className="mt-1 text-xs text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>

        <div className="prose-custom mt-10 space-y-8">
          <section>
            <h2 className="font-display text-lg font-semibold">Overview</h2>
            <p className="mt-3 leading-relaxed text-muted">{study.summary}</p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {study.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-theme-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {study.links && study.links.length > 0 && (
            <section>
              <h2 className="font-display text-lg font-semibold">Links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {study.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-theme-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/20"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-16 rounded-theme-card border border-border bg-surface p-8 text-center">
          <p className="text-muted">Interested in similar work?</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-theme-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-dim"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </article>
  );
}
