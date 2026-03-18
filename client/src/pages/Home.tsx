import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-primary/30 selection:text-primary-foreground relative">
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
