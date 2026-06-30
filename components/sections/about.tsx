"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, BookOpen } from "lucide-react";

const stats = [
  { label: "Research Articles", value: "70+", icon: BookOpen },
  { label: "Years of Experience", value: "5+", icon: Briefcase },
  { label: "GPA (Summa Cum Laude)", value: "3.92", icon: GraduationCap },
  { label: "Conference Papers", value: "2", icon: BookOpen },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-slate-900/30">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm{" "}
              <span className="text-violet-400 font-semibold">
                Md Mainul Islam
              </span>
              , an AI researcher and software professional based in Bangladesh.
              Currently, I serve as an{" "}
              <span className="text-slate-100 font-medium">
                Adjunct Lecturer
              </span>{" "}
              at United International University and{" "}
              <span className="text-slate-100 font-medium">
                Project Manager
              </span>{" "}
              at WebAlive, an Australian digital agency.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My research spans machine learning, deep learning, IoT, and their
              applications in healthcare, agriculture, environmental monitoring,
              and smart systems. I graduated Summa Cum Laude from UIU with a
              BSc in CSE, maintaining a 3.92 GPA throughout.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond research, I write extensively on AI topics — with over 70
              published articles exploring the frontiers of artificial
              intelligence and its real-world impact.
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-sm pt-2">
              <MapPin className="w-4 h-4 text-violet-500" />
              <span>Dhaka, Bangladesh (Remote-friendly)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-violet-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-sm mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
