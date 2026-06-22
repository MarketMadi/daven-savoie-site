# daven-savoie-site

Personal portfolio for **Daven Savoie** — Senior DevOps Engineer. Achievements grouped by domain, built to land contract clients.

**Live:** deploy to Vercel or GitHub Pages (static export enabled).

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS 4
- TypeScript

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs to out/
```

## Structure

```
content/
  case-studies.ts   # All work — edit here to add projects
  site.ts           # Name, links, skills, stats
app/
  page.tsx          # Homepage
  work/             # Work index + case study pages
  about/
  contact/
```

## Content rules

- **Named:** Bitnomi, CivKit, Podmonkey, Macrocosmos, FreedomTech, Sonic Labs, Cion Data
- **Anonymised to sector:** Kure → Healthcare SaaS, AgSpace/Origin Digital → AgTech Platform

## Deploy

### Vercel

Push to GitHub and import the repo — zero config.

### GitHub Pages

```bash
npm run build
# Publish the out/ directory to gh-pages branch or use actions
```

Set `basePath` in `next.config.ts` if using a project URL (`username.github.io/repo-name`).

## License

MIT
