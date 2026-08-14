# AI Tools Catalog

A curated dataset of **~490 AI tools** across 15 categories — coding, design, 3D,
audio/video, productivity, robotics, science, infrastructure, education, and more.

This repo is a **pure data source**. There is no app here anymore — the catalog is
rendered by [arturas.digital](https://arturas.digital/), which fetches
`data/tools.json` directly from this repo's `master` branch at runtime:

```
https://raw.githubusercontent.com/nakotomagami-a11y/ai-tools-catalog/master/data/tools.json
```

## Contents

```
├── data/
│   ├── tools.json       # every tool entry (source of truth, consumed by arturas.digital)
│   └── blacklist.json   # rejected tools that must never be re-added
├── PROMPTS.md           # copy-paste maintenance prompts for Claude Code
├── PRIORITIES.md        # which categories to prioritise when researching
└── SENTIMENT.md         # spec for the optional "what people say" sentiment field
```

`tools.json` is `{ "categories": [...], "tools": [...] }`.

## Adding tools

Add entries to the `tools` array in `data/tools.json` following this schema:

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

Keep the file valid JSON — that is the only build step. Changes go live on
arturas.digital as soon as they land on `master`.

## Maintenance

See `PROMPTS.md` for the copy-paste prompts used to research and audit tools with
Claude Code.

## License

MIT
