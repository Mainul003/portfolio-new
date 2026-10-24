"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { education } from "@/data/education";

const icons = [Trophy, GraduationCap, GraduationCap];
const colors = [
  "border-violet-200 bg-violet-50",
  "border-blue-200 bg-blue-50",
  "border-stone-200 bg-stone-50",
];
const iconColors = ["text-violet-600", "text-blue-600", "text-stone-500"];

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-stone-100/60">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
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
                className={`border rounded-2xl p-6 flex gap-5 items-start ${colors[i] || "border-stone-200 bg-stone-50"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white shadow-sm ${iconColors[i]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-stone-900 font-semibold">
                      {item.degree}
                    </h3>
                    <span className="text-xs text-stone-400 shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mt-1">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full bg-white text-stone-700 border border-stone-200 shadow-sm">
                      {item.result}
                    </span>
                    {item.honors && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
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
