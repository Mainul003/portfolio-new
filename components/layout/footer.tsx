import Link from "next/link";
import { Mail, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold gradient-text">Md Mainul Islam</p>
          <p className="text-slate-500 text-sm">Researcher · Project Manager · Educator</p>
        </div>
        <div className="flex items-center gap-4">
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
          <Link
            href="/articles"
            className="text-slate-500 hover:text-violet-400 transition-colors"
            aria-label="Research Articles"
          >
            <BookOpen className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} Md Mainul Islam · All rights reserved
        </p>
      </div>
    </footer>
  );
}
