import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Hero />
      <About />
      <Skills />
      <Leadership />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}