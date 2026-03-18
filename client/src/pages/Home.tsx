import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground relative transition-colors duration-500">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
