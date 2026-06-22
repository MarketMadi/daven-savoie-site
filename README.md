# daven-savoie-site

Personal portfolio for **Daven Savoie**, Senior DevOps Engineer.

**Live:** https://marketmadi.github.io/daven-savoie-site/

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS 4
- TypeScript
- GitHub Pages via Actions

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs to out/
```

Local dev runs without a base path. Production builds for GitHub Pages set `NEXT_PUBLIC_BASE_PATH=/daven-savoie-site`.

## Structure

```
content/
  case-studies.ts   # All work
  site.ts           # Name, links, skills
app/
  page.tsx          # Homepage
  work/             # Work index + case study pages
  about/
  contact/
```

## Deploy

Push to `main`. The GitHub Actions workflow builds and deploys automatically.

First-time setup (already done if Pages is live):

```bash
gh api repos/MarketMadi/daven-savoie-site/pages -X POST -f build_type=workflow
```

## License

MIT
