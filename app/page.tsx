import Navbar from "@/components/Navbar";
import Hero from "@/components/Accueil";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Realisations from "@/components/Realisations";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Realisations />
        <Stats />
        <Contact />
      </main>
    </>
  );
}
