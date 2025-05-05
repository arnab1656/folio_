"use client";
import Navbar from "src/components/Navbar";
import IntroSection from "src/components/IntroSection";
import SkillsSection from "src/components/SkillsSection";
import ProjectsSection from "src/components/ProjectsSection";
import AboutSection from "src/components/AboutSection";
import EducationSection from "src/components/EducationSection";
import ContactSection from "src/components/ContactSection";
import Footer from "src/components/Footer";

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
