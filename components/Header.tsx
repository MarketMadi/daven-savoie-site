import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex layout-max w-full items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {site.name.split(" ")[0]}
          <span className="text-muted">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-theme-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 sm:inline-block"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
