import Link from "next/link";
import { SECTORS, type SectorSlug } from "@/content/sectors";

type Props = {
  active?: SectorSlug;
  className?: string;
};

export function DomainNav({ active, className = "" }: Props) {
  return (
    <nav
      className={`flex flex-wrap gap-2 ${className}`}
      aria-label="Work by sector"
    >
      {SECTORS.map((sector) => {
        const isActive = active === sector.slug;
        return (
          <Link
            key={sector.slug}
            href={`/work/${sector.slug}`}
            className={`rounded-theme-full border px-3.5 py-1.5 text-sm transition-all ${
              isActive
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-border bg-surface/50 text-muted hover:border-accent/30 hover:text-foreground"
            }`}
          >
            {sector.label}
          </Link>
        );
      })}
    </nav>
  );
}
