# AI Tools Catalog

A curated catalog of **358 AI tools** across 13 categories — discover the best AI-powered tools for coding, design, 3D, audio/video, productivity, robotics, science, infrastructure, and more.

**[Live Demo](https://arturas.digital/lab/ai-tools-catalog/)**

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## Categories

| Category | Tools | Examples |
|----------|-------|---------|
| **Productivity** | 62 | AI assistants, search, writing, research, automation |
| **Coding & Dev** | 59 | Code completion, IDEs, CLI, testing, DevOps, agents |
| **UI & Design** | 57 | Design-to-code, image generation, prototyping, UI tools |
| **3D & Motion** | 50 | 3D generation, Blender tools, mocap, NeRF, rigging |
| **Audio & Video** | 49 | Music gen, video editing, transcription, voice/TTS |
| **Game Dev** | 27 | Sprites, NPC AI, level gen, game audio, game engines |
| **Data & Analytics** | 11 | SQL tools, dashboards, BI, data visualization |
| **Finance & Trading** | 9 | Trading bots, portfolio analysis, market data, crypto |
| **Marketing & SEO** | 8 | Marketing automation, SEO, email, content |
| **Security** | 8 | Pentesting, SAST/DAST, vulnerability scanning, DevSecOps |
| **Robotics & Physical AI** | 6 | Humanoid robots, quadrupeds, simulation, foundation models |
| **Science & Research** | 6 | Protein prediction, drug discovery, weather AI, research agents |
| **AI Infrastructure** | 6 | Fast inference, GPU cloud, serverless ML, model hosting |

## Features

- **Category filtering** — browse by 13 categories including coding, design, 3D, robotics, science, and more
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
│   └── tools.json            # All 358 tool entries
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

**Category**: `coding` | `design` | `gamedev` | `3d` | `audio-video` | `productivity` | `marketing` | `security` | `data` | `finance` | `robotics` | `science` | `infrastructure`
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
