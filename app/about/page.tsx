import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.title}`,
};

export default function AboutPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          About
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m {site.name}, a {site.title.toLowerCase()} with 5+ years
            building scalable infrastructure and automating complex systems
            across fintech, healthtech, agtech, and AI.
          </p>
          <p>
            I&apos;ve reduced deployment times by 80%, redeployed decade-old
            healthcare microservices, launched decentralized platforms to
            mainnet as a solo engineer, and shipped open-source developer tools
            like{" "}
            <a
              href="https://github.com/MarketMadi/podmonkey"
              className="text-accent underline-offset-2 hover:underline"
            >
              Podmonkey
            </a>
            .
          </p>
          <p>
            Before DevOps I founded{" "}
            <a
              href="/work/cion-data"
              className="text-accent underline-offset-2 hover:underline"
            >
              Cion Data
            </a>
            , a social enterprise in Nairobi that helped 17 people enter remote
            digital work for multinational clients.
          </p>
          <p>
            I hold a BA in Development Economics &amp; South Asian Studies from
            SOAS, University of London (2016).
          </p>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold">Beyond work</h2>
          <ul className="mt-6 space-y-4">
            {site.interests.map((interest) => (
              <li
                key={interest}
                className="flex gap-3 text-muted leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {interest}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold">Find me</h2>
          <ul className="mt-6 space-y-2 text-muted">
            <li>
              <a
                href={site.github}
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub — @MarketMadi
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-accent hover:underline"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
