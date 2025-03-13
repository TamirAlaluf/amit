import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import HeroSection from "./components/HeroSection";
import MainMessageSection from "./components/MainMessageSection";
import JourneySection from "./components/JourneySection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#F7F7F7]">
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <MainMessageSection />
        <AboutSection />
        <JourneySection />
        <Contact />
      </main>
    </div>
  );
}
