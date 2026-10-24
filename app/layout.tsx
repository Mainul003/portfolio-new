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
  title: "Md Mainul Islam | Sr. SQA Engineer · Adjunct Faculty · Researcher",
  description:
    "Portfolio of Md Mainul Islam, Sr. SQA Engineer at ADN Diginet Limited assigned to BRAC Bank (Augmentation), and Adjunct Faculty (Industry) at United International University. Research interests include healthcare AI and software testing.",
  keywords: [
    "Mainul Islam",
    "Software Quality Assurance",
    "Sr. SQA Engineer",
    "UIU",
    "Software Testing",
    "Machine Learning",
    "Deep Learning",
  ],
  authors: [{ name: "Md Mainul Islam" }],
  openGraph: {
    title: "Md Mainul Islam | Sr. SQA Engineer · Adjunct Faculty · Researcher",
    description:
      "Portfolio — software quality assurance, teaching, research, publications, and achievements.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
