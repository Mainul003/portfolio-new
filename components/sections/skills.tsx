"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const categoryColors: Record<string, string> = {
  "Project Management": "bg-violet-500/20 text-violet-300",
  Technical: "bg-blue-500/20 text-blue-300",
  "Quality Assurance": "bg-emerald-500/20 text-emerald-300",
  "Research & AI": "bg-amber-500/20 text-amber-300",
};

const categoryIcons: Record<string, string> = {
  "Project Management": "🗂️",
  Technical: "⚙️",
  "Quality Assurance": "✅",
  "Research & AI": "🧠",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Skills
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            A multidisciplinary skill set spanning research, engineering, and leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{categoryIcons[category.label]}</span>
                <h3 className="text-slate-100 font-semibold">
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${categoryColors[category.label] || "bg-slate-800 text-slate-400"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
