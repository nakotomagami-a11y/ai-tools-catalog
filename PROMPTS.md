# AI Tools Catalog — Maintenance Prompts

Copy-paste these prompts to Claude Code to maintain the catalog.

---

## 1. Scan Internet & Add New Tools

```
Read data/tools.json to get the current list of tools. Also read data/blacklist.json — these are rejected tools that must NEVER be added back. Then search the web for NEW free and paid AI tools released or announced in the last 3 months that are NOT already in the catalog and NOT in the blacklist. Focus on these categories:

- Coding & Dev (code completion, IDEs, CLI, testing, DevOps, code review)
- Security (pentesting, SAST/DAST, vulnerability scanning, DevSecOps)
- Marketing & SEO (automation, SEO, email, social media, content, analytics)
- Finance & Trading (trading bots, portfolio analysis, market data, crypto)
- Data & Analytics (SQL tools, dashboards, BI, data visualization)
- UI & Design (design-to-code, image generation, prototyping, color/font tools)
- Game Dev (sprites, NPC AI, level gen, game audio, pixel art, game engines)
- 3D & Motion (3D generation, Blender tools, mocap, NeRF/splatting, rigging)
- Audio & Video (music gen, video gen/editing, transcription, voice/TTS)
- Productivity (AI assistants, search, writing, research, local AI, automation)

For each new tool found, add it to the "tools" array in data/tools.json following the exact existing format:
- name, url, description (1-2 sentences), category, tags (3-4), pricing ("free"|"freemium"|"open-source"|"paid"|"upcoming")
- For paid tools: add price field (e.g. "$20/mo")
- For upcoming tools: add status field (e.g. "Beta", "Coming Q2 2026")

Also check if any tools currently marked as "upcoming" have been fully released — if so, update their pricing field to the correct tier and remove the status field.

After updating tools.json, open the site in the browser to verify the changes render correctly.
```

---

## 2. Audit & Clean Outdated Tools

```
Read data/tools.json to get the current list of tools. Then audit EVERY tool in the catalog by checking its URL and searching the web for its current status. Look for:

1. **Dead tools**: URL returns 404, domain expired, or service has shut down → REMOVE from the array
2. **Renamed tools**: Tool has rebranded → UPDATE the name and URL
3. **Pricing changes**: Free tier removed, price increased/decreased, or tool went open-source → UPDATE pricing/price fields
4. **Description outdated**: Major new features or changes in what the tool does → UPDATE description
5. **Duplicate entries**: Same tool listed under slightly different names → REMOVE the duplicate, keep the better entry
6. **Category mismatch**: Tool better fits a different category now → UPDATE category

For each change made, briefly note what changed and why. After updating tools.json, open the site in the browser to verify nothing is broken.
```

---

## 3. Sentiment Scan — "What People Say"

```
Read data/tools.json and SENTIMENT.md for the full spec. For each tool missing a "sentiment" field or with lastChecked older than 30 days, search Reddit, X/Twitter, Hacker News, GitHub, and review sites for recent public opinion (last 3-6 months). Add a sentiment object with score (positive/mixed/negative/unknown), a brutally honest 1-2 sentence summary, sources list, and lastChecked date. Process in batches of 10, save after each batch. Skip tools with pricing "upcoming". Prioritize: Coding → Security → Marketing → Finance → Data → Productivity → rest.
```

---

## Search History

Previous searches (use different queries to cover new ground):

**2026-03-22:**
- "best new open source AI coding tools 2025 2026"
- "new AI developer tools open source 2026 launched"
- "new AI marketing tools 2025 2026 open source"
- "Goose AI coding tool Block open source github"
- "OpenClaw open source AI assistant github 2026"
- "new open source AI tools github trending 2026 developer"
- "AI SEO content marketing tools 2026 best new"
- "Tabby ML open source code completion self-hosted github"
- "CodeGeeX open source AI coding assistant github"
- "Dify AI open source github agent platform"
- "Langflow open source AI agent builder github"
- "Open-SWE open source asynchronous programming agent github 2026"
- "Mautic open source marketing automation features 2026"
- "new AI devops security testing tools 2026 open source"
- "E2B sandbox open source AI agent environment github"
- "SWE-agent github issue fixer open source autonomous coding"
- "Rasa chatbot open source conversational AI 2026 github"
- "Botpress open source chatbot builder AI github"
- "K8sGPT open source kubernetes AI diagnostics github"
- "Dataline open source SQL AI tool local github"
- "Upscayl open source image upscaling AI github latest"

**Tools added:** Goose, OpenClaw, Tabby, CodeGeeX, Open SWE, SWE-agent, Dify, Langflow, K8sGPT, E2B, Dataline, Upscayl, Mautic, Botpress, Rasa, Zen-AI-Pentest, Superpowers
**Tools updated (upcoming→released):** OpenAI Codex App, Figma Make, Devin 2.2, LTX-2.3, Kling 3.0

**2026-03-22 (round 2):**
- "AI trading bot open source crypto stock 2025 2026 github"
- "AI finance tools open source portfolio analysis market data 2026"
- "FinRL open source reinforcement learning finance github"
- "OpenBB terminal open source finance platform github features"
- "open source AI security tools SAST DAST vulnerability scanner 2026 github"
- "AI marketing SEO tools open source 2026 email automation content"
- "SerpBear open source SEO keyword tracking github"
- "open source data analytics AI tools visualization dashboard 2026 github"

**Tools added:** OpenBB, FinRL, FinRobot, Freqtrade, OctoBot, Jesse, OpenTrader, Superalgos, AI-Trader, MobSF, ZAP, Semgrep, Trivy, BlacksmithAI, SerpBear, Listmonk, Odoo Email Marketing, Metabase, Apache Superset, Data Formulator, Wren AI, DB-GPT
**Categories added:** Marketing & SEO, Security, Data & Analytics, Finance & Trading

---

## Tags Index

Quick reference for finding tools by tag:

### Coding & Dev
`code-completion` `ide` `editor` `terminal` `cli` `agentic` `open-source` `vscode` `git` `code-review` `testing` `debugging` `documentation` `api` `lsp` `mcp` `autonomous` `pr-automation` `bug-fix` `framework` `shell` `sandbox` `kubernetes` `devops` `diagnostics`

### Security
`security` `pentesting` `sast` `dast` `static-analysis` `vulnerability` `scanning` `web-security` `mobile-security` `containers` `devsecops` `code-quality`

### Marketing & SEO
`marketing` `seo` `email` `newsletter` `automation` `keyword-tracking` `self-hosted` `crm` `content` `copywriting` `templates`

### Finance & Trading
`finance` `trading` `crypto` `trading-bot` `backtesting` `reinforcement-learning` `ml` `quant` `market-data` `dca` `grid` `multi-market` `visual-builder` `agents` `python`

### Data & Analytics
`data-analysis` `bi` `dashboards` `visualization` `sql` `natural-language` `generative` `database` `charts`

### Productivity
`ai-chat` `local-ai` `llm` `automation` `workflows` `writing` `research` `search` `presentations` `chatbot` `conversational-ai` `nlp`

### Design
`image-generation` `design-to-code` `prototyping` `wireframe` `ui-generation` `vectors` `icons` `svg` `color-palette` `typography` `website-builder`

### Game Dev
`sprites` `pixel-art` `npc` `dialogue` `game-creation` `level-design` `maps` `textures` `narrative` `sound-effects`

### 3D & Motion
`text-to-3d` `image-to-3d` `blender` `rigging` `animation` `motion-capture` `gaussian-splatting` `nerf` `photogrammetry` `pbr` `materials`

### Audio & Video
`music-generation` `video-generation` `video-editing` `transcription` `voice` `tts` `voiceover` `sound-effects`
