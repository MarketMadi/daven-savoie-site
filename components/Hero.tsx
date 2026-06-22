import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-glow relative px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-widest text-accent">
          {site.title}
        </p>
        <h1 className="animate-fade-up-delay-1 font-display mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {site.tagline}
        </h1>
        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {site.heroSubtext}
        </p>
        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-dim"
          >
            View my work
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
          >
            {site.email}
          </a>
        </div>
        <dl className="animate-fade-up-delay-3 mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
