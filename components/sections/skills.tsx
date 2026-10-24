"use client";
import { motion } from "framer-motion";
import { Bug, Gauge, Database, BrainCircuit, Wrench, Code, Microscope } from "lucide-react";
import { skills } from "@/data/skills";

const categoryColors: Record<string, string> = {
  "API & Software Testing": "bg-violet-100 text-violet-700",
  "Automation & Performance": "bg-blue-100 text-blue-700",
  "Database & Integration": "bg-emerald-100 text-emerald-700",
  "AI-Assisted Testing": "bg-amber-100 text-amber-700",
  "Tools & Collaboration": "bg-stone-100 text-stone-700",
  "Programming & Cloud": "bg-cyan-100 text-cyan-700",
  "Research & AI": "bg-rose-100 text-rose-700",
};

const categoryIcons = {
  "API & Software Testing": Bug,
  "Automation & Performance": Gauge,
  "Database & Integration": Database,
  "AI-Assisted Testing": BrainCircuit,
  "Tools & Collaboration": Wrench,
  "Programming & Cloud": Code,
  "Research & AI": Microscope,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Skills
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            A multidisciplinary skill set spanning research, engineering, and leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, i) => {
            const Icon = categoryIcons[category.label as keyof typeof categoryIcons] ?? Wrench;
            return (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon className="w-5 h-5 text-violet-600" aria-hidden="true" />
                <h3 className="text-stone-900 font-semibold">
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${categoryColors[category.label] || "bg-stone-100 text-stone-600"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
