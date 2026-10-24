#!/usr/bin/env tsx
import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";

const BASE_URL = "https://researchbymainul.com";
const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const DATA_FILE = path.join(process.cwd(), "data", "articles.ts");

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function parseDate(raw: string): string {
  try {
    const months: Record<string, string> = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };
    const m = raw.match(/(\d{1,2})\s+(\w{3})\s+(\d{4})/);
    if (m) return `${m[3]}-${months[m[2]] || "01"}-${m[1].padStart(2, "0")}`;
    const d = new Date(raw);
    if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
  } catch {}
  return "2024-01-01";
}

interface ArticleSummary {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

async function main() {
  fs.mkdirSync(ARTICLES_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log("📚 Collecting article list...");
  const summaries: ArticleSummary[] = [];

  await page.goto(`${BASE_URL}/article`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await sleep(2000);

  // Click each page button 1..24
  for (let pageNum = 1; pageNum <= 24; pageNum++) {
    if (pageNum > 1) {
      const btn = page.getByRole("button", { name: String(pageNum), exact: true });
      if ((await btn.count()) === 0) break;
      await btn.click();
      await sleep(2000);
    }

    const found = await page.evaluate((): ArticleSummary[] => {
      const results: ArticleSummary[] = [];
      document.querySelectorAll("article").forEach((card) => {
        const linkEl = card.querySelector('a[href*="/article/"]') as HTMLAnchorElement | null;
        if (!linkEl) return;
        const slug = linkEl.href.split("/article/")[1]?.split("?")[0] || "";
        const title = (card.querySelector("h3") as HTMLElement)?.innerText?.trim() || "";
        const excerpt = (card.querySelector("p") as HTMLElement)?.innerText?.trim() || "";

        let date = "";
        card.querySelectorAll("*").forEach((el) => {
          const t = el.childNodes[0]?.textContent?.trim() || "";
          if (/\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}/.test(t)) date = t;
        });

        let category = "";
        card.querySelectorAll("div, span, p").forEach((el) => {
          const t = el.textContent?.trim() || "";
          if (t.length > 3 && t.length < 50 && !t.includes("min") && !t.match(/\d{1,2}\s+\w+\s+\d{4}/) && !t.includes("Abstract")) {
            if (["AI", "Blockchain", "Data", "Digital"].some((kw) => t.startsWith(kw))) category = t;
          }
        });

        if (slug && title) results.push({ slug, title, date, category, excerpt });
      });
      return results;
    });

    summaries.push(...found);
    console.log(`  Page ${pageNum}: +${found.length} (total: ${summaries.length})`);
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = summaries.filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });

  console.log(`\n✅ Found ${unique.length} articles. Scraping full content...`);

  const fullArticles: Array<{
    slug: string; title: string; date: string; category: string;
    tags: string[]; excerpt: string; readTime: string; body: string;
  }> = [];

  for (const s of unique) {
    try {
      await page.goto(`${BASE_URL}/article/${s.slug}`, { waitUntil: "domcontentloaded", timeout: 60000 });
      await sleep(800);

      const detail = await page.evaluate(() => {
        const tagSection = Array.from(document.querySelectorAll("h3, h4")).find(
          (el) => el.textContent?.includes("Tags")
        );
        const tags: string[] = [];
        tagSection?.nextElementSibling?.querySelectorAll("*").forEach((el) => {
          const t = el.textContent?.trim();
          if (t && el.children.length === 0 && t.length < 40) tags.push(t);
        });

        let readTime = "5 min read";
        document.querySelectorAll("*").forEach((el) => {
          const t = el.childNodes[0]?.textContent?.trim() || "";
          if (/\d+\s+min\s+read/.test(t)) readTime = t;
        });

        const abstractH = Array.from(document.querySelectorAll("h2")).find((h) =>
          h.textContent?.includes("Abstract")
        );
        const abstract = (abstractH?.nextElementSibling as HTMLElement)?.innerText?.trim() || "";

        const article = document.querySelector("article");
        const bodyParagraphs: string[] = [];
        article?.querySelectorAll("p").forEach((p) => {
          const t = (p as HTMLElement).innerText?.trim();
          if (t && t !== abstract && t.length > 60) bodyParagraphs.push(t);
        });

        return { tags: [...new Set(tags)], readTime, abstract, bodyParagraphs };
      });

      const body = [
        detail.abstract ? `## Abstract\n\n${detail.abstract}` : "",
        ...detail.bodyParagraphs,
      ]
        .filter(Boolean)
        .join("\n\n");

      fullArticles.push({
        slug: s.slug,
        title: s.title,
        date: parseDate(s.date),
        category: s.category || "Research",
        tags: detail.tags,
        excerpt: s.excerpt || detail.abstract,
        readTime: detail.readTime,
        body,
      });

      const safeTitle = s.title.replace(/"/g, '\\"').replace(/\n/g, " ");
      const safeExcerpt = (s.excerpt || detail.abstract)
        .replace(/"/g, '\\"').replace(/\n/g, " ").slice(0, 300);

      const mdx = `---
slug: "${s.slug}"
title: "${safeTitle}"
date: "${parseDate(s.date)}"
category: "${s.category || "Research"}"
tags: [${detail.tags.map((t) => `"${t.replace(/"/g, '\\"')}"`).join(", ")}]
excerpt: "${safeExcerpt}"
readTime: "${detail.readTime}"
---

${body}
`;
      fs.writeFileSync(path.join(ARTICLES_DIR, `${s.slug}.mdx`), mdx, "utf-8");
      console.log(`  ✓ ${s.title.slice(0, 60)}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${s.slug}`, err);
    }
  }

  // Write data/articles.ts
  const meta = fullArticles.map(({ body: _body, ...rest }) => rest);
  const dataContent = `import type { Article } from "./types";

// Auto-generated by scripts/scrape-articles.ts — do not edit manually
export const articles: Article[] = ${JSON.stringify(meta, null, 2)};

export function getArticlesByCategory(category: string): Article[] {
  if (category === "All Research") return articles;
  return articles.filter((a) => a.category === category);
}

export function getRecentArticles(count = 4): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
}

export const categories = [
  { label: "All Research", count: articles.length },
  ...["AI for Sustainability", "AI in Agriculture", "AI in Business & Industry",
      "AI in Education", "AI in Healthcare", "AI in Public Policy", "AI in Urban Systems",
      "Blockchain & Digital Governance", "Data Security", "Digital Infrastructure Security"]
    .map((label) => ({ label, count: articles.filter((a) => a.category === label).length })),
];
`;

  fs.writeFileSync(DATA_FILE, dataContent, "utf-8");
  await browser.close();
  console.log(`\n🎉 Done — ${fullArticles.length} articles scraped.`);
}

main().catch(console.error);
