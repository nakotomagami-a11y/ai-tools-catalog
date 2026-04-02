# AI Tools Catalog

A curated catalog of **484 AI tools** across 15 categories — discover the best AI-powered tools for coding, design, 3D, audio/video, productivity, robotics, science, infrastructure, education, and more.

**[Live Demo](https://arturas.digital/lab/ai-tools-catalog/)**

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## Categories

| Category | Tools | Examples |
|----------|-------|---------|
| **Productivity** | 78 | AI assistants, search, writing, agents, research, automation |
| **Coding & Dev** | 68 | Code completion, IDEs, browser agents, agent frameworks, testing |
| **UI & Design** | 60 | Design-to-code, image generation, photo editing, prototyping |
| **Audio & Video** | 57 | Music gen, voice AI, video editing, avatars, TTS |
| **3D & Motion** | 54 | 3D generation, architecture, Blender tools, mocap, NeRF |
| **Robotics & Physical AI** | 38 | Humanoids, drones, autonomous vehicles, surgery, simulation, agriculture |
| **Game Dev** | 27 | Sprites, NPC AI, level gen, game audio, game engines |
| **Data & Analytics** | 19 | SQL tools, notebooks, ETL, data quality, dashboards, BI |
| **Marketing & SEO** | 17 | SEO, social media, email marketing, ad creatives, content strategy |
| **Finance & Trading** | 16 | Crypto analytics, trading bots, DeFi, portfolio, stock scanning |
| **Security** | 15 | Endpoint protection, cloud security, threat detection, NDR, SIEM |
| **AI Infrastructure** | 14 | Inference, vector DBs, MLOps, model serving, LLM observability |
| **Science & Research** | 12 | Drug discovery, cheminformatics, bioinformatics, weather AI, lab tools |
| **Education** | 9 | AI tutoring, coding education, flashcards, study tools, grading |

## Features

- **Category filtering** — browse by 15 categories including coding, design, 3D, robotics, science, education, and more
- **Pricing filters** — filter by free, freemium, open-source, paid, or upcoming tools
- **Full-text search** — search across names, descriptions, and tags
- **Price display** — see pricing info at a glance for paid tools
- **Lazy loading** — loads entries in batches for fast initial render
- **Responsive design** — works on desktop and mobile

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the catalog.

## Project Structure

```
├── data/
│   └── tools.json            # All 484 tool entries
├── modules/
│   └── catalog/
│       ├── components/       # UI components
│       └── hooks/            # Custom React hooks
├── pages/                    # Next.js pages
├── shared/
│   ├── config/               # Categories and filter options
│   └── types/                # TypeScript interfaces
├── styles/                   # Global CSS
└── PROMPTS.md                # Maintenance prompts for updating the catalog
```

## Adding Tools

Add new entries to `data/tools.json` following this schema:

```json
{
  "name": "Tool Name",
  "url": "https://example.com",
  "description": "Short description of the tool.",
  "category": "coding",
  "tags": ["tag1", "tag2", "tag3"],
  "pricing": "freemium",
  "price": "$20/mo"
}
```

**Category**: `coding` | `design` | `gamedev` | `3d` | `audio-video` | `productivity` | `marketing` | `security` | `data` | `finance` | `robotics` | `science` | `infrastructure` | `education`
**Pricing**: `free` | `freemium` | `open-source` | `paid` | `upcoming`
**Price**: optional, e.g. `"$20/mo"` (for paid/freemium tools)
**Status**: optional, e.g. `"Beta"`, `"Coming Q2 2026"` (for upcoming tools)

## Tech Stack

- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Data**: Static JSON loaded at build time via `getStaticProps`

## License

MIT
