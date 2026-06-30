"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

export default function HeroSection() {
  return (
    <section id="hero">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-violet-500/50 ring-4 ring-violet-500/20 shadow-lg shadow-violet-500/30">
              <img
                src="/images/profile.jpg"
                alt="Md Mainul Islam"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Md+Mainul+Islam&size=112&background=7c3aed&color=fff";
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-950" />
          </div>

          <div>
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">
              Researcher · Project Manager · Educator
            </p>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-slate-50 to-slate-400 bg-clip-text text-transparent leading-tight">
              Md Mainul Islam
            </h1>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
              AI Researcher at United International University, Project Manager
              at WebAlive Australia. Passionate about machine learning, IoT, and
              building intelligent systems that matter.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-full text-sm font-medium transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              Get in Touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-2.5 border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-violet-300 rounded-full text-sm font-medium transition-all duration-200"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/Mainul003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mainul-fuad-6922ba98/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:mainulfuad95@gmail.com"
              className="text-slate-500 hover:text-violet-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-4 text-slate-600 hover:text-slate-400 transition-colors flex flex-col items-center gap-1"
            aria-label="Scroll to about"
          >
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </motion.div>
      </LampContainer>
    </section>
  );
}
