# Spiderum-Style Blog Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic Docusaurus template look (teal hero banner, colorful SVG feature grid) with a minimal, Spiderum-inspired theme: white/near-black palette with a warm orange accent, system sans-serif typography, and a homepage article feed.

**Architecture:** Presentation-layer only. A new hand-curated `posts.ts` data file feeds a new `ArticleFeed` component rendered on the homepage. Global colors/typography are re-themed via Infima CSS variable overrides in `custom.css`. Navbar/footer are simplified via `docusaurus.config.ts`. No changes to `docs/` content or sidebar structure.

**Tech Stack:** Docusaurus 3.7 (React 19, TypeScript), Infima CSS framework, yarn.

## Global Constraints

- Spec: `project/superpowers/specs/2026-08-07-spiderum-style-redesign-design.md`
- This repo has no unit test framework — verification is `yarn typecheck` (TS correctness), `yarn build` (build succeeds, no broken links — `onBrokenLinks: 'throw'` is set in `docusaurus.config.ts`), and manual checks via `yarn start`.
- `docs/` is the Docusaurus content root and is published as live pages — never put planning/spec artifacts there (see `project/superpowers/`).
- Colors: light bg `#ffffff` / text `#1a1a1a` / accent `#f2542d` / muted `#6b6b6b` / border `#ececec`. Dark bg `#181818` / text `#e8e8e8` / accent `#ff7a52` / muted `#9a9a9a` / border `#2e2e2e`.
- Typography: system sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`), body text 17px / line-height 1.7.
- No images/pagination/filters on the homepage feed. No changes to Prism/code-block theming.

---

### Task 1: Re-theme global CSS

**Files:**
- Modify: `src/css/custom.css` (full replacement)

**Interfaces:**
- Produces: CSS custom properties consumed automatically by Infima (`--ifm-color-primary*`, `--ifm-background-color`, `--ifm-font-color-base`, `--ifm-color-emphasis-600`, `--ifm-toc-border-color`, `--ifm-font-family-base`) and by `ArticleFeed`/homepage styles in later tasks (`var(--ifm-color-emphasis-600)`, `var(--ifm-toc-border-color)`).

- [ ] **Step 1: Replace `src/css/custom.css` with the re-themed version**

```css
/**
 * Global theme overrides for the Spiderum-style redesign.
 * Infima variables control color site-wide; typography rules apply to
 * body text.
 */

:root {
  --ifm-color-primary: #f2542d;
  --ifm-color-primary-dark: #da431d;
  --ifm-color-primary-darker: #ce3f1b;
  --ifm-color-primary-darkest: #a93417;
  --ifm-color-primary-light: #f46b47;
  --ifm-color-primary-lighter: #f57855;
  --ifm-color-primary-lightest: #f89a7e;

  --ifm-background-color: #ffffff;
  --ifm-navbar-background-color: #ffffff;
  --ifm-font-color-base: #1a1a1a;
  --ifm-color-emphasis-600: #6b6b6b;
  --ifm-toc-border-color: #ececec;
  --ifm-hr-border-color: #ececec;
  --ifm-navbar-shadow: none;

  --ifm-font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif;
  --ifm-font-size-base: 17px;
  --ifm-line-height-base: 1.7;
  --ifm-code-font-size: 90%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {
  --ifm-color-primary: #ff7a52;
  --ifm-color-primary-dark: #ff5f2e;
  --ifm-color-primary-darker: #ff521c;
  --ifm-color-primary-darkest: #e63c04;
  --ifm-color-primary-light: #ff9576;
  --ifm-color-primary-lighter: #ffa389;
  --ifm-color-primary-lightest: #ffc4b3;

  --ifm-background-color: #181818;
  --ifm-navbar-background-color: #181818;
  --ifm-font-color-base: #e8e8e8;
  --ifm-color-emphasis-600: #9a9a9a;
  --ifm-toc-border-color: #2e2e2e;
  --ifm-hr-border-color: #2e2e2e;
  --docusaurus-highlighted-code-line-bg: rgba(255, 255, 255, 0.1);
}

.navbar {
  border-bottom: 1px solid var(--ifm-toc-border-color);
  box-shadow: none;
}

.footer {
  --ifm-footer-background-color: var(--ifm-background-color);
  --ifm-footer-color: var(--ifm-color-emphasis-600);
  --ifm-footer-link-color: var(--ifm-color-emphasis-600);
  border-top: 1px solid var(--ifm-toc-border-color);
  padding: 1.5rem 0;
}

.footer__copyright {
  font-size: 0.875rem;
}
```

- [ ] **Step 2: Typecheck**

Run: `yarn typecheck`
Expected: passes with no errors (CSS-only change; this mainly confirms the toolchain is still healthy before further edits).

- [ ] **Step 3: Commit**

```bash
git add src/css/custom.css
git commit -m "style: re-theme site to Spiderum-inspired white/orange palette"
```

---

### Task 2: Remove the old homepage feature grid

**Files:**
- Delete: `src/components/HomepageFeatures/index.tsx`
- Delete: `src/components/HomepageFeatures/styles.module.css`

**Interfaces:**
- None — this component is only imported by `src/pages/index.tsx`, which Task 5 rewrites to no longer reference it. Deleting it first (before Task 5) will leave a temporarily broken import in `index.tsx`; that's fine, it's fixed within this same task by removing the usage too.

- [ ] **Step 1: Delete the component directory**

```bash
rm -rf src/components/HomepageFeatures
```

- [ ] **Step 2: Remove its usage from `src/pages/index.tsx` so the build isn't broken mid-task**

In `src/pages/index.tsx`, remove the import line:
```tsx
import HomepageFeatures from '@site/src/components/HomepageFeatures';
```
and remove `<HomepageFeatures />` from the JSX (leave everything else in the file as-is — Task 5 replaces the rest of this file).

- [ ] **Step 3: Typecheck**

Run: `yarn typecheck`
Expected: passes with no errors (no remaining references to the deleted component).

- [ ] **Step 4: Commit**

```bash
git add -A src/components/HomepageFeatures src/pages/index.tsx
git commit -m "chore: remove colorful SVG feature grid from homepage"
```

---

### Task 3: Add curated posts data

**Files:**
- Create: `src/data/posts.ts`

**Interfaces:**
- Produces: `export interface Post { title: string; excerpt: string; category: string; href: string; date: string }` and `export const posts: Post[]`. Consumed by `ArticleFeed` (Task 4) and `src/pages/index.tsx` (Task 5).

- [ ] **Step 1: Create `src/data/posts.ts`**

```ts
export interface Post {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date: string;
}

export const posts: Post[] = [
  {
    title: '5. Pretraining on Unlabeled Data (Part 01)',
    excerpt:
      'Quy trình pretraining LLM trên dữ liệu chưa gán nhãn, từ tính loss đến vòng lặp huấn luyện.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/pretrain-unlabeled-data',
    date: '2026-05-31',
  },
  {
    title: '4. LLM Architecture (Part 02)',
    excerpt:
      'Triển khai transformer block, feed-forward network và GELU activation cho GPT.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/llm-architecture-02',
    date: '2026-01-29',
  },
  {
    title: 'OS',
    excerpt: 'Phân biệt Sequential, Concurrency & Parallelism, Thread & Process.',
    category: 'Interview',
    href: '/docs/interviews/os',
    date: '2025-12-17',
  },
  {
    title: '4. LLM Architecture (Part 01)',
    excerpt:
      'Kiến trúc tổng quan của GPT qua DummyGPTModel và các thành phần cốt lõi.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/llm-architecture-01',
    date: '2025-12-24',
  },
  {
    title: 'Probability & Statistics (Xác suất thống kê)',
    excerpt: 'Ghi chú các khái niệm xác suất thống kê nền tảng cho machine learning.',
    category: 'ML',
    href: '/docs/machine-learning/base-math/probability-statistics',
    date: '2025-12-24',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 04)',
    excerpt:
      'Biến đổi self-attention tiêu chuẩn thành causal attention - thành phần cốt lõi của Transformer.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-04',
    date: '2025-12-17',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 05)',
    excerpt: 'Mở rộng multi-head attention từ causal attention.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-05',
    date: '2025-12-17',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 01)',
    excerpt: 'Bốn biến thể của attention mechanism và lý do vì sao cần đến chúng.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-01',
    date: '2025-10-07',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 02)',
    excerpt:
      '"Self" trong self-attention nghĩa là gì và cách tính attention scores không có trọng số huấn luyện.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-02',
    date: '2025-10-07',
  },
  {
    title: '3. Coding Attention Mechanisms (Part 03)',
    excerpt:
      'Thêm trainable weight matrices được cập nhật trong quá trình huấn luyện vào self-attention.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/attention-mechanisms-03',
    date: '2025-10-07',
  },
  {
    title: '2. Data Preparation and Sampling',
    excerpt:
      'Biểu diễn văn bản thành vector: tokenization, embedding và sliding window sampling.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/data-preparation-and-sampling',
    date: '2025-10-01',
  },
  {
    title: '1. State of building LLMs',
    excerpt: 'Tổng quan hai giai đoạn xây dựng LLM: pretraining và finetuning.',
    category: 'LLM',
    href: '/docs/build-llm-from-scratch/state-of-building-LLMs',
    date: '2025-10-01',
  },
  {
    title: 'OOP',
    excerpt: '4 tính chất của OOP và nguyên lý SOLID.',
    category: 'Interview',
    href: '/docs/interviews/oop',
    date: '2025-01-13',
  },
  {
    title: 'Database',
    excerpt: 'UUID, transaction, SQL vs NoSQL, đánh index, sharding.',
    category: 'Interview',
    href: '/docs/interviews/database',
    date: '2025-01-13',
  },
  {
    title: '.NET',
    excerpt: 'Phân biệt .NET Core và .NET Framework.',
    category: 'Interview',
    href: '/docs/interviews/dotnet',
    date: '2025-01-13',
  },
  {
    title: 'Network',
    excerpt: '7 tầng mô hình OSI, SSL/TLS, HTTP vs HTTPS, TCP/UDP, Socket & WebSocket.',
    category: 'Interview',
    href: '/docs/interviews/network',
    date: '2025-01-13',
  },
  {
    title: 'Web',
    excerpt:
      'Session & Cookies, Local Storage & Session Storage, quản lý phiên làm việc ở server.',
    category: 'Interview',
    href: '/docs/interviews/web',
    date: '2025-01-13',
  },
  {
    title: 'C#',
    excerpt: 'Object & Class, Struct & Class, Property & Field, Abstract Class & Interface.',
    category: 'Interview',
    href: '/docs/interviews/csharp',
    date: '2025-01-13',
  },
];
```

- [ ] **Step 2: Typecheck**

Run: `yarn typecheck`
Expected: passes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/posts.ts
git commit -m "feat: add curated posts data for homepage feed"
```

---

### Task 4: Build the ArticleFeed component

**Files:**
- Create: `src/components/ArticleFeed/index.tsx`
- Create: `src/components/ArticleFeed/styles.module.css`

**Interfaces:**
- Consumes: `Post` type and `posts` array from `@site/src/data/posts` (Task 3). `Link` from `@docusaurus/Link` (site-relative `to` prop, e.g. `/docs/...`, is automatically prefixed with `baseUrl` by Docusaurus).
- Produces: `export default function ArticleFeed({posts}: {posts: Post[]}): ReactNode`, consumed by `src/pages/index.tsx` (Task 5).

- [ ] **Step 1: Create `src/components/ArticleFeed/styles.module.css`**

```css
.feed {
  list-style: none;
  margin: 0;
  padding: 0;
}

.card {
  border-bottom: 1px solid var(--ifm-toc-border-color);
  padding: 1.75rem 0;
}

.card:first-child {
  padding-top: 0;
}

.cardLink {
  display: block;
  color: inherit;
  text-decoration: none;
}

.cardLink:hover {
  text-decoration: none;
}

.meta {
  font-size: 0.85rem;
  color: var(--ifm-color-emphasis-600);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 0.4rem;
}

.dot {
  margin: 0 0.4rem;
}

.title {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--ifm-font-color-base);
}

.cardLink:hover .title {
  color: var(--ifm-color-primary);
}

.excerpt {
  margin: 0;
  color: var(--ifm-color-emphasis-600);
  font-size: 0.95rem;
  line-height: 1.6;
}
```

- [ ] **Step 2: Create `src/components/ArticleFeed/index.tsx`**

```tsx
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Post} from '@site/src/data/posts';

import styles from './styles.module.css';

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function ArticleFeed({posts}: {posts: Post[]}): ReactNode {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <ul className={styles.feed}>
      {sorted.map((post) => (
        <li key={post.href} className={styles.card}>
          <Link to={post.href} className={styles.cardLink}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.dot}>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `yarn typecheck`
Expected: passes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ArticleFeed
git commit -m "feat: add ArticleFeed component for homepage post list"
```

---

### Task 5: Rewrite the homepage

**Files:**
- Modify: `src/pages/index.tsx` (full replacement)
- Modify: `src/pages/index.module.css` (full replacement)

**Interfaces:**
- Consumes: `ArticleFeed` (Task 4) and `posts` (Task 3).

- [ ] **Step 1: Replace `src/pages/index.module.css`**

```css
.main {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1rem 4rem;
}

.header {
  margin-bottom: 2.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.tagline {
  font-size: 1.05rem;
  color: var(--ifm-color-emphasis-600);
  margin: 0;
}
```

- [ ] **Step 2: Replace `src/pages/index.tsx`**

```tsx
import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ArticleFeed from '@site/src/components/ArticleFeed';
import {posts} from '@site/src/data/posts';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </header>
        <ArticleFeed posts={posts} />
      </main>
    </Layout>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `yarn typecheck`
Expected: passes with no errors.

- [ ] **Step 4: Manually verify in the browser**

Run: `yarn start`
Open `http://localhost:3000/tyan-blog/` and confirm:
- Plain-text title + tagline render above the feed (no colored hero banner).
- All 18 posts render as cards, newest first (`5. Pretraining on Unlabeled Data (Part 01)` should be first, `C#`/interview docs from 2025-01-13 should be last).
- Hovering a card title turns it orange (`#f2542d`).
- Clicking a card navigates to the correct doc page.

Stop the dev server (Ctrl+C) once confirmed.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.tsx src/pages/index.module.css
git commit -m "feat: replace hero banner with Spiderum-style article feed homepage"
```

---

### Task 6: Simplify navbar and footer

**Files:**
- Modify: `docusaurus.config.ts`

**Interfaces:**
- None — config-only change, no code consumes this beyond Docusaurus itself.

- [ ] **Step 1: Update the tagline**

In `docusaurus.config.ts`, change:
```ts
  tagline: 'Welcome to Tyan Blog',
```
to:
```ts
  tagline: 'Notes on LLMs, interviews, and everything in between',
```

- [ ] **Step 2: Remove the navbar logo**

In the `themeConfig.navbar` block, remove the `logo` field entirely:
```ts
    navbar: {
      title: 'Tyan Blog',
      logo: {
        alt: 'Tyan Blog Logo',
        src: 'img/logo.svg',
      },
      items: [
```
becomes:
```ts
    navbar: {
      title: 'Tyan Blog',
      items: [
```
(leave `items` and everything below it unchanged).

- [ ] **Step 3: Simplify the footer**

Replace the `footer` block:
```ts
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tyanfarm',
            },
          ],
        },
      ],
    },
```
with:
```ts
    footer: {
      style: 'light',
      links: [],
      copyright:
        'Copyright © 2026 Tyan · <a href="https://github.com/tyanfarm" target="_blank" rel="noreferrer">GitHub</a>',
    },
```

- [ ] **Step 4: Typecheck**

Run: `yarn typecheck`
Expected: passes with no errors.

- [ ] **Step 5: Manually verify in the browser**

Run: `yarn start`
Confirm:
- Navbar shows only the "Tyan Blog" text wordmark (no logo image) with a thin bottom border, background matching the page.
- Footer is a single muted line: "Copyright © 2026 Tyan · GitHub", with "GitHub" linking out, thin top border, no multi-column dark block.

Stop the dev server (Ctrl+C) once confirmed.

- [ ] **Step 6: Commit**

```bash
git add docusaurus.config.ts
git commit -m "style: simplify navbar (drop logo) and footer to a single line"
```

---

### Task 7: Full-site verification

**Files:** None (verification only).

- [ ] **Step 1: Typecheck the whole project**

Run: `yarn typecheck`
Expected: passes with no errors.

- [ ] **Step 2: Production build**

Run: `yarn build`
Expected: build succeeds with no broken-link errors (`onBrokenLinks: 'throw'` will fail the build if any `href` in `posts.ts` points to a non-existent route).

- [ ] **Step 3: Manual pass over doc pages**

Run: `yarn serve` (serves the `build/` output) and spot-check:
- One `build-llm-from-scratch` doc page: sidebar, body text (17px, 1.7 line-height, sans-serif), code blocks, and TOC all render correctly with the new palette.
- One `interviews` doc page: same check.
- Toggle dark mode (moon/sun icon in navbar) on both the homepage and a doc page; confirm text stays readable (no near-black-on-dark or white-on-white contrast issues) and the accent color switches to `#ff7a52`.

- [ ] **Step 4: Clean up the local build output**

```bash
rm -rf build
```

(The build directory is a local verification artifact, not something to commit — confirm it's covered by `.gitignore` or leave it untracked.)

No commit for this task — it's verification-only, confirming the six prior commits work together.
