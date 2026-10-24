"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { articles, categories } from "@/data/articles";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All Research");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list =
      activeCategory === "All Research"
        ? articles
        : articles.filter((a) => a.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list.sort((a, b) => b.date.localeCompare(a.date));
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      <div className="max-container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Research Writing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            All Articles
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            {articles.length > 0
              ? `${articles.length} in-depth articles on AI, machine learning, and smart systems`
              : "Articles are being imported — check back shortly."}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-full pl-11 pr-5 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/20 transition-colors shadow-sm"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`text-xs px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat.label
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "bg-white border-stone-200 text-stone-500 hover:border-violet-300 hover:text-violet-700"
              }`}
            >
              {cat.label}
              {cat.count > 0 && (
                <span className="ml-1.5 opacity-60">({cat.count})</span>
              )}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {articles.length === 0 ? (
          <div className="text-center py-24">
            <BookOpen className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-500 text-lg mb-2">Articles loading...</p>
            <p className="text-stone-400 text-sm">
              Run the scrape script to import all 70 articles from
              researchbymainul.com
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-stone-500">No articles match your search.</p>
          </div>
        ) : (
          <>
            <p className="text-stone-400 text-sm mb-6">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.5) }}
                >
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group bg-white border border-stone-200 rounded-2xl p-5 flex flex-col gap-3 hover:border-violet-300 hover:shadow-md transition-all h-full block"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200 line-clamp-1">
                        {article.category}
                      </span>
                      <span className="text-xs text-stone-400 flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-stone-900 font-semibold text-sm leading-snug line-clamp-2 group-hover:text-violet-700 transition-colors flex-1">
                      {article.title}
                    </h2>
                    <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-violet-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
