import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AIExperiments from "@/components/AIExperiments";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIExperiments />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
