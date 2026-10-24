"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgzkvzo";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Get in Touch
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Open to research collaborations, speaking opportunities, and
            interesting projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-stone-900 font-semibold mb-1">
                Let&apos;s collaborate
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Whether you&apos;re interested in research collaboration, a
                speaking invitation, or just want to connect, I&apos;d love to
                hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mainulfuad95@gmail.com"
                className="flex items-center gap-3 text-stone-500 hover:text-violet-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:border-violet-300 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">Email</p>
                  <p className="text-sm text-stone-700">mainulfuad95@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mainul-fuad-6922ba98/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-500 hover:text-violet-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:border-violet-300 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">LinkedIn</p>
                  <p className="text-sm text-stone-700">Mainul Islam</p>
                </div>
              </a>
              <a
                href="https://github.com/Mainul003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-500 hover:text-violet-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:border-violet-300 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">GitHub</p>
                  <p className="text-sm text-stone-700">Mainul003</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-stone-500 mb-1.5 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-stone-500 mb-1.5 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/20 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone-500 mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Research collaboration, speaking invite..."
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/20 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-stone-500 mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/20 transition-colors resize-none"
                />
              </div>

              {status === "sent" && (
                <div className="flex items-center gap-2 text-emerald-600 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try emailing directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-all duration-200 shadow-md shadow-violet-500/20"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
