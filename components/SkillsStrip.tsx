import { site } from "@/content/site";

export function SkillsStrip() {
  return (
    <section className="border-y border-border/60 bg-surface/50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">
          Stack
        </h2>
        <ul className="flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
