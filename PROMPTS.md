# AI Tools Catalog — Maintenance Prompts

Copy-paste these prompts to Claude Code to maintain the catalog.

---

## 1. Scan Internet & Add New Tools

```
Read C:\Users\Saphire\Documents\Lab\ai-tools-catalog\tools.js to get the current list of tools. Then search the web for NEW free and paid AI tools released or announced in the last 3 months that are NOT already in the catalog. Focus on these categories:

- Coding & Dev (code completion, IDEs, CLI, testing, DevOps, security)
- UI & Design (design-to-code, image generation, prototyping, color/font tools)
- Game Dev (sprites, NPC AI, level gen, game audio, pixel art, game engines)
- 3D & Motion (3D generation, Blender tools, mocap, NeRF/splatting, rigging)
- Audio & Video (music gen, video gen/editing, transcription, voice/TTS)
- Productivity (AI assistants, search, writing, research, local AI, automation)

For each new tool found, add it to the TOOLS array in tools.js following the exact existing format:
- name, url, description (1-2 sentences), category, tags (3-4), pricing ("free"|"freemium"|"open-source"|"paid"|"upcoming")
- For paid tools: add price field (e.g. "$20/mo")
- For upcoming tools: add status field (e.g. "Beta", "Coming Q2 2026")

Also check if any tools currently marked as "upcoming" have been fully released — if so, update their pricing field to the correct tier and remove the status field.

After updating tools.js, open http://localhost:3500 in the browser to verify the changes render correctly.
```

---

## 2. Audit & Clean Outdated Tools

```
Read C:\Users\Saphire\Documents\Lab\ai-tools-catalog\tools.js to get the current list of tools. Then audit EVERY tool in the catalog by checking its URL and searching the web for its current status. Look for:

1. **Dead tools**: URL returns 404, domain expired, or service has shut down → REMOVE from the array
2. **Renamed tools**: Tool has rebranded → UPDATE the name and URL
3. **Pricing changes**: Free tier removed, price increased/decreased, or tool went open-source → UPDATE pricing/price fields
4. **Description outdated**: Major new features or changes in what the tool does → UPDATE description
5. **Duplicate entries**: Same tool listed under slightly different names → REMOVE the duplicate, keep the better entry
6. **Category mismatch**: Tool better fits a different category now → UPDATE category

For each change made, briefly note what changed and why. After updating tools.js, open http://localhost:3500 in the browser to verify nothing is broken.
```
