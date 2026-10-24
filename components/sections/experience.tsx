"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/50 via-violet-400/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((item, i) => {
              const Icon =
                item.type === "academia" ? GraduationCap : Briefcase;
              return (
                <motion.div
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="md:pl-16 relative"
                >
                  <div className="absolute left-0 top-5 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white border-2 border-violet-300 text-violet-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-md transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-stone-900 font-semibold group-hover:text-violet-700 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-violet-600 text-sm mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full border ${
                            item.type === "academia"
                              ? "bg-blue-50 border-blue-200 text-blue-600"
                              : "bg-violet-50 border-violet-200 text-violet-600"
                          }`}
                        >
                          {item.type === "academia" ? "Academia" : "Industry"}
                        </span>
                        <span className="text-xs text-stone-400">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
