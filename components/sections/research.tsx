"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Tag, ExternalLink } from "lucide-react";
import { papers, researchTags } from "@/data/papers";

export default function ResearchSection() {
  return (
    <section id="research" className="section-padding">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Research & Papers
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Submitted conference papers exploring AI in software engineering and healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {papers.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-500/40 transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  {paper.status}
                </span>
                {paper.paperId && (
                  <span className="text-xs text-slate-600">
                    Paper #{paper.paperId}
                  </span>
                )}
              </div>

              <h3 className="text-slate-100 font-semibold leading-snug group-hover:text-violet-300 transition-colors">
                {paper.title}
              </h3>

              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                  <span className="font-medium text-slate-300">
                    {paper.conference}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                  <span>{paper.location}</span>
                </div>
                {paper.conferenceDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                    <span>{paper.conferenceDate}</span>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-3 border-t border-slate-800">
                <p className="text-xs text-slate-600 flex items-start gap-1.5">
                  <Tag className="w-3 h-3 mt-0.5 text-slate-700 shrink-0" />
                  {paper.subjectArea}
                </p>
              </div>

              {paper.notificationDate && (
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-800/60 rounded-lg p-2.5">
                    <p className="text-slate-600">Notification</p>
                    <p className="text-slate-300 font-medium mt-0.5">
                      {paper.notificationDate}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 rounded-lg p-2.5">
                    <p className="text-slate-600">Camera Ready</p>
                    <p className="text-slate-300 font-medium mt-0.5">
                      {paper.cameraReadyDate}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-slate-500 text-sm mb-4">
            Research areas &amp; expertise
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {researchTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:border-violet-500/30 hover:text-violet-300 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
