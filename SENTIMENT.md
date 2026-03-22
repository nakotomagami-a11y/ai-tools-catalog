# Sentiment Online — Feature Spec

## What
Every tool card shows a "What people say" section with a 1-2 sentence AI-generated summary of public opinion, plus a sentiment score (positive/mixed/negative/unknown).

## Data Structure
Add a `sentiment` object to each tool in `data/tools.json`:
```json
{
  "name": "Cursor",
  "sentiment": {
    "score": "positive",
    "summary": "Devs love the speed and inline edits but complain about pricing jumps and occasional context window issues.",
    "sources": ["reddit", "x", "hn"],
    "lastChecked": "2026-03-22"
  }
}
```

### Score values
- `"positive"` — mostly praised, recommended, growing adoption
- `"mixed"` — split opinions, notable pros and cons
- `"negative"` — widespread complaints, declining trust, abandoned
- `"unknown"` — too new or too niche for meaningful sentiment data

## How to Run a Sentiment Scan

### Prompt (copy-paste to Claude Code)
```
Read data/tools.json. For each tool that is missing a "sentiment" field OR whose sentiment.lastChecked is older than 30 days, search the web for recent public opinion. Search these sources:

- Reddit (r/programming, r/webdev, r/gamedev, r/machinelearning, r/devops, relevant subs)
- X/Twitter (search tool name + "review" or "vs" or "switched to/from")
- Hacker News (search tool name)
- GitHub issues/discussions (check stars trend, recent issues sentiment)
- YouTube comments on review videos
- Product Hunt reviews
- G2/Capterra/TrustPilot if applicable

For each tool, determine:
1. **score**: positive / mixed / negative / unknown
2. **summary**: 1-2 sentences capturing the dominant opinion. Include specific praise AND complaints. Be honest — don't sugarcoat.
3. **sources**: which platforms had meaningful discussion
4. **lastChecked**: today's date

Rules:
- Be brutally honest. If people hate it, say so.
- Focus on the LAST 3-6 MONTHS of discussion, not old opinions.
- If a tool has < 5 meaningful mentions, set score to "unknown".
- Prioritize developer communities over marketing blogs.
- Don't search for tools with pricing "upcoming" — skip those.

Process tools in batches of 10. After each batch, save progress to tools.json.
```

## UI Changes Needed
1. Add sentiment display to tool cards (small section below description)
2. Show colored indicator: green dot (positive), yellow (mixed), red (negative), gray (unknown)
3. Show the summary text
4. Optional: add sentiment as a filter/sort option

## Implementation Order
1. Start with high-priority categories first (Coding, Security, Marketing, Finance)
2. Then medium priority (Data, Productivity)
3. Then lower priority (Design, Game Dev, 3D, Audio/Video)
4. Skip "upcoming" tools entirely

## Refresh Schedule
- Run sentiment scan monthly
- Tools that changed score should be flagged for review
