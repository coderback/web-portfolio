# Timothy Ojebiyi - Portfolio

Personal portfolio site, live at [timothyojebiyi.com](https://timothyojebiyi.com).

Built with Next.js (App Router), React and Tailwind CSS, and hosted on Vercel. The design is a Neo-Brutalist layout: thick ink borders, hard offset shadows, and a small palette with light and dark themes.

## Run locally

```bash
npm ci
npm run dev
```

The site runs at http://localhost:3000. Use `npm run build` for a production build and `npm run lint` to lint.

## Where things live

- `src/content/portfolio.js`: all site content (featured and other projects, papers, experience, education, capabilities, stack and links)
- `src/components/`: one component per section, in page order: `Hero`, `FeaturedWork`, `Research`, `AboutExperience`, `Skills`, `StackBand`, `Projects`
- `src/app/globals.css`: colour tokens for both themes, plus the shared card, button and sticker styles
- `src/lib/site.js`: site URL, title and description used for metadata
- `public/assets/`: screenshots and figures
- `public/documents/`: downloadable CV
