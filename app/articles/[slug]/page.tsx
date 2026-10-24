import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getAdjacentArticles,
} from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getArticleBySlug(slug);
  if (!data) return { title: "Article Not Found" };
  return {
    title: `${data.meta.title} | Md Mainul Islam`,
    description: data.meta.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getArticleBySlug(slug);
  if (!data) notFound();

  const { meta, content } = data;
  const allSlugs = getAllArticleSlugs();
  const relatedSlugs = getAdjacentArticles(slug, allSlugs, 3);
  const related = relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getArticleBySlug>>[];

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-violet-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
              {meta.category}
            </span>
            <span className="text-xs text-stone-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {meta.readTime}
            </span>
            <span className="text-xs text-stone-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            {meta.title}
          </h1>
          <p className="text-stone-500 leading-relaxed">{meta.excerpt}</p>

          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              <Tag className="w-3.5 h-3.5 text-stone-400 mt-1" />
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Body */}
        <article className="prose prose-stone max-w-none prose-headings:text-stone-900 prose-p:text-stone-700 prose-p:leading-relaxed prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-stone-900 prose-code:text-violet-700 prose-code:bg-violet-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-stone-100 prose-pre:border prose-pre:border-stone-200 prose-blockquote:border-violet-400 prose-blockquote:text-stone-500 prose-hr:border-stone-200 mb-14">
          <MDXRemote source={content} />
        </article>

        <hr className="border-stone-200 mb-10" />

        {/* Source link */}
        <div className="mb-10 flex items-center gap-2 text-sm">
          <a
            href={`https://researchbymainul.com/article/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-violet-600 hover:text-violet-700 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View original on researchbymainul.com
          </a>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-stone-900 mb-5">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.meta.slug}
                  href={`/articles/${r.meta.slug}`}
                  className="group bg-white border border-stone-200 rounded-xl p-4 hover:border-violet-300 hover:shadow-sm transition-all"
                >
                  <span className="text-xs text-violet-600 mb-2 block">
                    {r.meta.category}
                  </span>
                  <p className="text-sm text-stone-700 font-medium leading-snug line-clamp-2 group-hover:text-violet-700 transition-colors">
                    {r.meta.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
