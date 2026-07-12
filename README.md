# QuidEdge website

Built with Astro + Tailwind CSS v4, deployed to GitHub Pages via GitHub Actions.
Direction: **Press proof** — your existing black-and-white mark, one working
accent (proof blue), and the light/heavy weight contrast from the logo's "E"
carried into every headline (see `.weight-anchor` in `src/styles/global.css`).

## Run it locally

```bash
npm install
npm run dev
```

## Before you publish — three things only you can fill in

1. **Repo name / base path** — open `astro.config.mjs`:
   - Deploying as `your-username.github.io` (a user/org site)? Set `base: '/'`.
   - Deploying as a project site (`github.com/your-username/quidedge`)? Set
     `base: '/quidedge'` (or whatever you name the repo) and update `site` to
     your actual `https://your-username.github.io`.

2. **Forms** — the inquiry form (`src/pages/index.astro`) and the newsletter
   form (`src/components/Footer.astro`) both currently post to
   `https://formspree.io/f/YOUR_FORM_ID`. Create a free account at
   [formspree.io](https://formspree.io), make **two separate forms** (one for
   inquiries, one for newsletter signups), and drop each real ID in.

3. **Social links & favicon** — `src/layouts/Layout.astro` has placeholder
   `sameAs` URLs in the structured data block; replace with your real
   Instagram/LinkedIn/etc. Also drop a real `favicon.png` into `public/`.

## Publish to GitHub Pages

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set Source to **GitHub Actions**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`)
   builds and deploys automatically. First deploy takes a couple of minutes.

## What's built so far

- Home page (`src/pages/index.astro`) — hero, audiences, services, a work
  section with honest placeholders (no fabricated testimonials — swap in real
  case studies as they land), and the full inquiry form.
- Shared `Layout`, `Nav`, `Footer` (footer includes the newsletter form).
- Organization structured data (schema.org) in the `<head>` for every page —
  helps AI search tools and Google understand who QuidEdge is directly.
- Sitemap generation via `@astrojs/sitemap`.

## Coming next

About, Services, Work (full case studies), Blog, and Contact pages — same
layout system, so they're mostly new content inside existing components.
