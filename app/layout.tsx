import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Mainul Islam | Researcher · Project Manager · Educator",
  description:
    "Portfolio of Md Mainul Islam — AI researcher, Project Manager at WebAlive Australia, and Adjunct Lecturer at United International University. Expert in machine learning, IoT, and smart systems.",
  keywords: [
    "Mainul Islam",
    "AI Researcher",
    "Project Manager",
    "UIU",
    "WebAlive",
    "Machine Learning",
    "Deep Learning",
  ],
  authors: [{ name: "Md Mainul Islam" }],
  openGraph: {
    title: "Md Mainul Islam | Researcher · Project Manager · Educator",
    description:
      "Unified portfolio — research, experience, publications, and achievements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
