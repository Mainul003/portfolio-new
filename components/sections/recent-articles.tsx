"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { getRecentArticles } from "@/data/articles";

export default function RecentArticlesSection() {
  const articles = getRecentArticles(4);

  return (
    <section id="articles" className="section-padding bg-stone-100/60">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Writing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Recent Articles
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Articles and blog posts on AI, technology, and related topics.
          </p>
        </motion.div>

        {articles.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-400">Articles are being loaded...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="group bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-300 hover:shadow-md transition-all block h-full"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex text-xs font-medium px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-stone-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-stone-900 font-semibold leading-snug line-clamp-2 group-hover:text-violet-700 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-1.5 text-xs text-stone-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-violet-600 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-stone-300 hover:border-violet-400 text-stone-600 hover:text-violet-700 rounded-full text-sm font-medium transition-all duration-200"
          >
            View all 70+ articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
