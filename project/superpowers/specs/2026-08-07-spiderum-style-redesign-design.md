# Spiderum-style blog redesign

## Problem

The site (Docusaurus 3, docs-only, no active blog feed) currently uses the
stock Docusaurus template look: a colored hero banner, a default Infima teal
theme, and a playful multi-color SVG "feature grid" on the homepage. It reads
as an unmodified starter template rather than a personal blog.

## Goal

Restyle the site to feel clean, minimal, and content-focused — in the spirit
of Spiderum (Vietnamese blogging platform): white background, near-black
text, a single warm accent color, a plain-text header, and a vertical feed of
article cards on the homepage instead of a hero + feature grid.

Scope is presentation-layer only. No changes to `docs/` content, sidebar
structure, or the docs plugin config.

## Non-goals

- No thumbnails/cover images on cards (docs have none today).
- No pagination or category-filter UI on the homepage feed (only 3
  categories; existing navbar links already cover that).
- No migration to the Docusaurus `blog` plugin — homepage feed is a
  hand-curated list pointing at existing `docs/` pages.
- No change to code block / Prism theming (github light / dracula dark)
  — not part of the "generic template" complaint.

## Design

### Files touched

| File | Change |
|---|---|
| `src/css/custom.css` | Replace teal Infima theme vars with new palette + typography (light & dark) |
| `src/pages/index.tsx` | Replace hero banner with plain-text title/tagline + `<ArticleFeed />` |
| `src/pages/index.module.css` | Simplify/remove hero-specific styles |
| `src/data/posts.ts` | **New.** Hand-curated list of featured docs (title, excerpt, category, href, date) |
| `src/components/ArticleFeed/index.tsx` | **New.** Renders `posts.ts` as a vertical list of Spiderum-style cards |
| `src/components/ArticleFeed/styles.module.css` | **New.** Card/list styling |
| `src/components/HomepageFeatures/` | **Deleted** (colorful SVG feature grid, no longer used) |
| `docusaurus.config.ts` | Navbar: drop logo image, keep text wordmark + existing links. Footer: simplify to one muted line |

### Data model — `src/data/posts.ts`

```ts
export interface Post {
  title: string;
  excerpt: string;
  category: string;  // 'LLM' | 'Interview' | 'ML'
  href: string;       // link into the doc, e.g. /docs/build-llm-from-scratch/...
  date: string;        // 'YYYY-MM-DD'
}

export const posts: Post[] = [ /* seeded from current docs/ content */ ];
```

Seeded once from the existing docs (LLM series, interview topics, base-math)
so the homepage isn't empty on first load. Going forward, a new entry is
added by hand whenever a new doc page is published — no build-time scanning
or extra tooling.

### Homepage (`src/pages/index.tsx`)

Header becomes plain text, left-aligned, no color block, no button:

```
Tyan Blog
Notes on LLMs, interviews, and everything in between
```

Below it, `<ArticleFeed posts={posts} />` renders a single-column vertical
list, newest first, each card:

```
CATEGORY · Aug 7, 2026
Title of the article                    (bold, larger, orange on hover)
One-line excerpt in muted gray text...
───────────────────────────────────────  (thin divider)
```

No images, no pagination, no filter controls.

### Global theme — `src/css/custom.css`

| Token | Light | Dark |
|---|---|---|
| background | `#ffffff` | `#181818` |
| text | `#1a1a1a` | `#e8e8e8` |
| accent (`--ifm-color-primary`) | `#f2542d` | `#ff7a52` |
| muted / metadata | `#6b6b6b` | `#9a9a9a` |
| border / divider | `#ececec` | `#2e2e2e` |

Typography: system sans-serif stack
(`-apple-system, "Segoe UI", Roboto, sans-serif`) throughout — body,
headings, nav. Article body text at 17–18px with 1.7 line-height (Infima
defaults are tighter). Headings bold but not oversized; no hero-scale type
anywhere.

Dark mode stays on via Infima's existing `[data-theme='dark']` selector,
re-themed to the palette above — no functional/toggle changes.

### Navbar & footer (`docusaurus.config.ts`)

- Navbar: remove the logo image, keep the "Tyan Blog" text wordmark and the
  existing Interview/LLM links. Thin bottom border instead of a shadow;
  background matches the page (no separate navbar color block).
- Footer: single muted line (`© 2026 Tyan · GitHub`) instead of the current
  multi-column dark footer.

## Testing

- `yarn start` and visually verify: homepage feed renders all seeded posts,
  cards link to the correct doc pages, hover states show the accent color.
- Toggle dark mode and re-check contrast/readability of the new palette.
- Click through navbar links and a few doc pages to confirm typography and
  spacing changes apply site-wide without breaking existing layout (sidebar,
  TOC, code blocks).
- `yarn build` completes with no broken links (`onBrokenLinks: 'throw'` is
  already set, so this doubles as a link-integrity check for the new
  `href`s in `posts.ts`).
