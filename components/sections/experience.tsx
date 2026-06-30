"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, experienceStats } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-14">
          {experienceStats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-violet-500/30 transition-colors"
            >
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden md:block" />

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
                  <div className="absolute left-0 top-5 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-slate-900 border-2 border-violet-500/40 text-violet-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-slate-100 font-semibold group-hover:text-violet-300 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-violet-400 text-sm mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full border ${
                            item.type === "academia"
                              ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                              : "bg-violet-500/10 border-violet-500/20 text-violet-400"
                          }`}
                        >
                          {item.type === "academia" ? "Academia" : "Industry"}
                        </span>
                        <span className="text-xs text-slate-600">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-500 border border-slate-700"
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
