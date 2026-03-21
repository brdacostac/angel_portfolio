# Angel Kahealani — Portfolio

Personal portfolio website for Angel Kahealani, actor and voice actor based in South Florida. Built as a fast, fully static site with no heavy frameworks.

**Live site:** *(add your Netlify/Vercel URL here once deployed)*

---

## What's on the site

- **Hero** — intro with name, tagline, and links to resume & contact
- **Gallery** — production photos with captions
- **Projects** — list of acting and voice work
- **Voice Reel** — audio player with seek and volume controls
- **Contact** — working contact form (powered by Formspree)

---

## Tech stack

- [Astro 6](https://astro.build) — static site generator
- Vanilla CSS with custom design tokens (no Tailwind, no UI library)
- Vanilla JS for audio player and contact form
- [Formspree](https://formspree.io) for contact form email delivery

---

## Adding content

All content Angel needs to update lives in one file:

**[`src/data/content.ts`](src/data/content.ts)**

That file has step-by-step instructions in plain English for:
- Adding new gallery photos
- Adding new projects
- Adding the video reel URL when it's ready

---

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`

---

## Deploying

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Netlify or Vercel.

## Project structure

```
angel_portfolio/
├── public/
│   ├── images/          ← photo files go here
│   ├── audio/           ← voice reel mp3 goes here
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── content.ts   ← ✏️  edit content here
│   ├── components/      ← site sections (Hero, Gallery, Contact…)
│   ├── layouts/
│   └── pages/
└── package.json
```
