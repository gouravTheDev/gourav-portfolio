
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <WorkExperience />
      <Skills />
      <Education />

      <Footer />
    </main>
  );
}
