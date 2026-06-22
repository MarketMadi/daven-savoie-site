import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Available for contract work.
        </p>
        <div className="flex gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
