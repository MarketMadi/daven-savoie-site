import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for DevOps and platform engineering contract work.`,
};

export default function ContactPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-muted">
          Available for remote contract work — legacy modernisation, Kubernetes
          platforms, CI/CD, and developer tooling.
        </p>

        <div className="mt-12 space-y-6">
          <a
            href={`mailto:${site.email}?subject=Contract%20enquiry`}
            className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-hover"
          >
            <div>
              <p className="font-display font-semibold">Email</p>
              <p className="mt-1 text-muted">{site.email}</p>
            </div>
            <span className="text-accent">→</span>
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-hover"
          >
            <div>
              <p className="font-display font-semibold">GitHub</p>
              <p className="mt-1 text-muted">github.com/MarketMadi</p>
            </div>
            <span className="text-accent">↗</span>
          </a>
        </div>

        <p className="mt-12 text-sm text-muted">{site.location}</p>
      </div>
    </div>
  );
}
