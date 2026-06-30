import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ResearchSection from "@/components/sections/research";
import RecentArticlesSection from "@/components/sections/recent-articles";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import SkillsSection from "@/components/sections/skills";
import AchievementsSection from "@/components/sections/achievements";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <RecentArticlesSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
