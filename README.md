# Huỳnh Công Ý Portfolio

Personal portfolio for Huỳnh Công Ý, a final-year Software Engineering student in Ho Chi Minh City, Vietnam.

The site presents full-stack projects with their engineering context, technical decisions, testing approach, and deployment evidence.

## Stack

- Next.js with the App Router
- TypeScript
- Tailwind CSS v4 via PostCSS
- Geist and Geist Mono typography
- `next/image` for optimized local imagery

## Featured projects

- **GreyTest** - AI-assisted QA platform for Java and Spring Boot projects. Capstone project in progress.
- **Short Link** - URL shortening and analytics platform with Redis caching, PostgreSQL persistence, Docker, and CI.
- **Gather & Graze** - bilingual English/Vietnamese recipe discovery and weekly meal-planning experience.

Each project has a dedicated case-study route under `/projects`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run build
npm start
```

The portfolio uses no runtime environment variables. The current resume is served from `public/resume.pdf`.

## Deploy on Vercel

Import [`congy1344/huynhcongy-portfolio`](https://github.com/congy1344/huynhcongy-portfolio) in Vercel and keep the defaults:

- Framework preset: Next.js
- Root directory: `.`
- Build command: `npm run build`
- Output directory: default

Every push to `main` triggers a new deployment.

## Git workflow

```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```