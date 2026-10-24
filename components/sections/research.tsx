"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Tag, ExternalLink } from "lucide-react";
import { papers, researchTags } from "@/data/papers";
import Image from "next/image";

const academicProfiles = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=tCo0nkkAAAAJ" },
  { label: "ResearchGate", href: "https://www.researchgate.net/publication/407431330_Artificial_Intelligence_in_Healthcare_Predictive_Analytics_for_Early_Detection_of_Chronic_Diseases" },
  { label: "ASE 2026 Profile", href: "https://conf.researchr.org/profile/ase-2026/mdmainulislam" },
  { label: "Research Conference Profile", href: "https://conf.researchr.org/profile/mdmainulislam" },
];

export default function ResearchSection() {
  return (
    <section id="research" className="section-padding bg-white">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Publications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Research &amp; Papers
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Published research in healthcare AI and software engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-5 rounded-2xl bg-stone-50 border border-stone-200 p-5 mb-8"
        >
          <Image
            src="/images/researcher.png"
            alt="Research-themed illustration representing AI and healthcare research"
            width={320}
            height={220}
            sizes="(max-width: 640px) 100vw, 180px"
            className="w-full sm:w-44 h-32 object-contain shrink-0"
          />
          <div>
            <h3 className="font-semibold text-stone-900 mb-1">Research interests</h3>
            <p className="text-sm leading-relaxed text-stone-500">
              I explore AI-driven healthcare prediction and software testing, including how large language models interpret API specifications and generate tests.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {papers.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${
                    paper.status === "Published"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : paper.status === "Research Project"
                        ? "bg-stone-100 text-stone-600 border-stone-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      paper.status === "Published"
                        ? "bg-emerald-500"
                        : paper.status === "Research Project"
                          ? "bg-stone-400"
                          : "bg-amber-400 animate-pulse"
                    }`}
                  />
                  {paper.status}
                </span>
                {paper.paperId && (
                  <span className="text-xs text-stone-400">
                    Paper #{paper.paperId}
                  </span>
                )}
              </div>

              <h3 className="text-stone-900 font-semibold leading-snug group-hover:text-violet-700 transition-colors">
                {paper.title}
              </h3>

              <div className="space-y-2 text-sm text-stone-500">
                {paper.conference && <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                  <span className="font-medium text-stone-700">
                    {paper.conference}
                  </span>
                </div>}
                {paper.location && <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                  <span>{paper.location}</span>
                </div>}
                {paper.conferenceDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                    <span>{paper.conferenceDate}</span>
                  </div>
                )}
              </div>

              {paper.description && (
                <p className="text-sm text-stone-500 leading-relaxed">{paper.description}</p>
              )}

              {paper.links && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {paper.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-violet-600 hover:text-violet-800 hover:underline underline-offset-2">
                      {link.label}<ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-3 border-t border-stone-100">
                <p className="text-xs text-stone-400 flex items-start gap-1.5">
                  <Tag className="w-3 h-3 mt-0.5 text-stone-300 shrink-0" />
                  {paper.subjectArea}
                </p>
              </div>

              {paper.notificationDate && (
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-100">
                    <p className="text-stone-400">Notification</p>
                    <p className="text-stone-700 font-medium mt-0.5">
                      {paper.notificationDate}
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-100">
                    <p className="text-stone-400">Camera Ready</p>
                    <p className="text-stone-700 font-medium mt-0.5">
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
          <p className="text-center text-stone-400 text-sm mb-4">
            Research areas &amp; expertise
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {researchTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs rounded-full bg-stone-100 border border-stone-200 text-stone-500 hover:border-violet-300 hover:text-violet-600 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 pt-8 border-t border-stone-100">
          <p className="text-center text-stone-400 text-sm mb-4">Academic Profiles</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {academicProfiles.map((profile) => (
              <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-full bg-white border border-stone-200 text-stone-600 hover:text-violet-700 hover:border-violet-300 transition-colors">
                {profile.label}<ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
