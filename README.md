# Pavithra Agraharam - Portfolio

Personal portfolio website for **Pavithra Agraharam**, AI/ML Engineer.
Live @ https://pavithra-agraharam.github.io/ 

Dark, interactive single-page site showcasing 25+ projects across computer vision, NLP,
predictive ML, data engineering/MLOps and full-stack engineering - plus experience,
skills, publications and a downloadable resume.

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- ESLint (flat config) for code quality
- Deployed to GitHub Pages via GitHub Actions

## SEO & performance

- `public/robots.txt` and `public/sitemap.xml` for search engine discoverability
- Canonical link, explicit Open Graph/Twitter tags, and JSON-LD `Person` structured
  data in `index.html`, so shared links and search results show accurate previews
- The project detail modal (`ProjectModal`) is lazy-loaded (`React.lazy` + `Suspense`)
  so it's excluded from the initial JS bundle and only fetched on first click

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # ESLint code linting
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. In the repo settings, set **Pages → Source → GitHub Actions**.

## Editing content

All content lives in `src/data/`:

- `profile.ts` - name, contact, socials, education, certifications, stats
- `experience.ts` - work history
- `projects.ts` - all projects (title, domain, metrics, tech, optional `github` link, `featured`)
- `skills.ts` - grouped skills
- `publications.ts` - articles & papers

Drop a headshot or updated `resume.pdf` into `public/` to swap those assets.
