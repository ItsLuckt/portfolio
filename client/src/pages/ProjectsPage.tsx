import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-full bg-transparent text-foreground relative transition-colors duration-500 p-6 lg:p-12">
      <div className="w-full max-w-7xl mx-auto pt-10">
        <Projects />
      </div>
    </main>
  );
}