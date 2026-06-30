import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/data/types";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export function getArticleBySlug(slug: string): { meta: Article; content: string } | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data as Article, content };
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getAdjacentArticles(currentSlug: string, allSlugs: string[], count = 3): string[] {
  const idx = allSlugs.indexOf(currentSlug);
  const next = allSlugs.slice(idx + 1, idx + 1 + count);
  if (next.length < count) next.push(...allSlugs.slice(0, count - next.length));
  return next.filter((s) => s !== currentSlug);
}
