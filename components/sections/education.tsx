"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { education } from "@/data/education";

const icons = [Trophy, GraduationCap, GraduationCap];
const colors = [
  "border-violet-500/40 bg-violet-500/5",
  "border-blue-500/30 bg-blue-500/5",
  "border-slate-700 bg-slate-800/50",
];
const iconColors = ["text-violet-400", "text-blue-400", "text-slate-500"];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-slate-900/30">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Education
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          {education.map((item, i) => {
            const Icon = icons[i] || GraduationCap;
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border rounded-2xl p-6 flex gap-5 items-start ${colors[i] || "border-slate-700 bg-slate-800/50"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-slate-900/50 ${iconColors[i]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-slate-100 font-semibold">
                      {item.degree}
                    </h3>
                    <span className="text-xs text-slate-500 shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700">
                      {item.result}
                    </span>
                    {item.honors && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Award className="w-3 h-3" />
                        {item.honors}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
