"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, BookOpen, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import Image from "next/image";

const stats = [
  { value: "70+", label: "Articles & blog posts" },
  { value: "3", label: "Education milestones" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center bg-stone-50 overflow-hidden pt-20 min-h-[92vh]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/80 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#6d28d9 1px, transparent 1px), linear-gradient(to right, #6d28d9 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-container px-4 w-full py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-semibold tracking-wide uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
              Open to Collaboration
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight tracking-tight">
              Md Mainul{" "}
              <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
                Islam
              </span>
            </h1>
            <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mt-3">
            Sr. SQA Engineer · Adjunct Faculty · Researcher
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-stone-600 text-base leading-relaxed max-w-md"
          >
            Sr. SQA Engineer and Adjunct Faculty (Industry) in CSE at United
            International University. My interests include AI, machine learning, healthcare
            AI, and software engineering, including LLM-generated test suites
            and test adequacy.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-stone-900">{s.value}</p>
                <p className="text-xs text-stone-400">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="#contact"
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full text-sm font-medium transition-all duration-200 shadow-md shadow-violet-500/20"
            >
              Get in Touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-2.5 border border-stone-300 hover:border-violet-400 text-stone-600 hover:text-violet-700 rounded-full text-sm font-medium transition-all duration-200 bg-white hover:bg-violet-50"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          </motion.div>

          {/* Socials + scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <a href="https://github.com/Mainul003" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-violet-600 transition-colors" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mainul-fuad-6922ba98/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-violet-600 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:mainulfuad95@gmail.com" className="text-stone-400 hover:text-violet-600 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <span className="w-px h-4 bg-stone-200" />
            <a
              href="#about"
              className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-violet-600 transition-colors uppercase tracking-widest"
            >
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              Explore
            </a>
          </motion.div>
        </div>

        {/* Right — photo + cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 order-1 md:order-2"
        >
          {/* Profile photo */}
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-violet-200/40 ring-8 ring-violet-100/60">
              <Image
                src="/images/profile-new.png"
                alt="Portrait of Md Mainul Islam"
                width={600}
                height={600}
                sizes="(max-width: 768px) 192px, 224px"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Online indicator */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-stone-100">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-stone-500 font-medium">Available</span>
            </div>
          </div>

          {/* Floating info cards */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-violet-200 transition-all">
              <BookOpen className="w-5 h-5 text-violet-600 mb-2" />
              <p className="text-lg font-bold text-stone-900">70+</p>
              <p className="text-xs text-stone-400">Articles &amp; blog posts</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-violet-200 transition-all">
              <GraduationCap className="w-5 h-5 text-violet-600 mb-2" />
              <p className="text-lg font-bold text-stone-900">3</p>
              <p className="text-xs text-stone-400">Education milestones</p>
            </div>
            <div className="col-span-2 bg-violet-600 rounded-2xl p-4 shadow-md">
              <p className="text-white text-xs font-medium mb-1">Current Role</p>
              <p className="text-white font-semibold text-sm">ADN Diginet Limited | BRAC Bank (Augmentation)</p>
              <p className="text-white font-semibold text-sm">Sr. SQA Engineer</p>
              <p className="text-violet-200 text-xs mt-0.5">Dhaka, Bangladesh | October 2026 – Present</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
