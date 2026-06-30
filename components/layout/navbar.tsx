"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#articles", label: "Articles" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg">
          <span className="gradient-text">MI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-full transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>

        <button
          className="md:hidden text-slate-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-violet-400 py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="/cv.pdf" download className="text-violet-400 font-medium">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
