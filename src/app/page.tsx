"use client";
import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
