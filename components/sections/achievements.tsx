"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, GraduationCap, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { achievements } from "@/data/achievements";

const tabs = [
  { key: "competitions", label: "Competitions", icon: Trophy },
  { key: "academic", label: "Academic", icon: GraduationCap },
  { key: "certifications", label: "Certifications", icon: Award },
];

export default function AchievementsSection() {
  const [activeTab, setActiveTab] = useState("competitions");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = achievements.filter((a) => a.tab === activeTab);
  const withImages = filtered.filter((a) => a.imagePath);

  function openLightbox(imgIndex: number) {
    setLightbox(imgIndex);
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function navigate(dir: 1 | -1) {
    if (lightbox === null) return;
    const next = (lightbox + dir + withImages.length) % withImages.length;
    setLightbox(next);
  }

  return (
    <section id="achievements" className="section-padding bg-stone-100/60">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-2">
            Honours &amp; Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Achievements
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center bg-white border border-stone-200 rounded-2xl p-1 gap-1 shadow-sm max-w-full">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === key
                    ? "bg-violet-600 text-white shadow"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "certifications" ? (
              <div className="grid md:grid-cols-3 gap-5 max-w-2xl mx-auto">
                {filtered.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-stone-200 rounded-2xl p-6 text-center hover:border-violet-300 hover:shadow-md transition-all"
                  >
                    <div className="w-14 h-14 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-violet-600" />
                    </div>
                    <h3 className="text-stone-900 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 text-sm mt-1">
                      {item.subtitle}
                    </p>
                    <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filtered.map((item, imgIdx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: imgIdx * 0.05 }}
                    className={`bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-md transition-all group ${item.imagePath ? "cursor-pointer" : ""}`}
                    onClick={() =>
                      item.imagePath
                        ? openLightbox(withImages.indexOf(item))
                        : undefined
                    }
                  >
                    {item.imagePath && (
                      <div className="aspect-video overflow-hidden bg-stone-100">
                        <img
                          src={item.imagePath}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-stone-900 font-semibold text-sm group-hover:text-violet-700 transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-stone-400 text-xs mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && withImages[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={withImages[lightbox].imagePath}
                alt={withImages[lightbox].title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">
                  {withImages[lightbox].title}
                </p>
                <p className="text-white/60 text-sm">
                  {withImages[lightbox].subtitle}
                </p>
              </div>
              {withImages.length > 1 && (
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={() => navigate(-1)}
                    className="pointer-events-auto -ml-12 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => navigate(1)}
                    className="pointer-events-auto -mr-12 text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
