"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, BookOpen } from "lucide-react";

const stats = [
  { label: "Articles & blog posts", value: "70+", icon: BookOpen },
  { label: "Education milestones", value: "3", icon: GraduationCap },
  { label: "GPA (Summa Cum Laude)", value: "3.92", icon: GraduationCap },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-stone-100/60">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
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
            <p className="text-stone-700 leading-relaxed text-lg">
              I&apos;m{" "}
              <span className="text-violet-600 font-semibold">
                Md Mainul Islam
              </span>
              , Sr. SQA Engineer at ADN Diginet Limited, assigned to BRAC
              Bank (Augmentation), and an{" "}
              <span className="text-stone-900 font-medium">
                Adjunct Faculty (Industry)
              </span>{" "}
              in the Department of Computer Science and Engineering at United
              International University, where I teach System Analysis and
              Design Laboratory (CSE 3412).
            </p>
            <p className="text-stone-500 leading-relaxed">
              My interests span Artificial Intelligence, Machine Learning,
              Healthcare AI, and Software Engineering. My research explores
              AI-driven healthcare prediction and software testing, including
              LLM-generated test suites and test adequacy. I graduated Summa
              Cum Laude from UIU with a BSc in CSE and a 3.92 CGPA.
            </p>
            <p className="text-stone-500 leading-relaxed">
              My writing also includes more than 70 articles and blog posts;
              these are distinct from my peer-reviewed research publications.
            </p>

            <div className="flex items-center gap-2 text-stone-400 text-sm pt-2">
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
                  className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-violet-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-stone-400 text-sm mt-0.5">
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
