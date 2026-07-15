import TechStack from "@/components/TechStack";

export default function SkillsPage() {
  return (
    <main className="min-h-full bg-transparent text-foreground relative transition-colors duration-500 p-6 lg:p-12">
      <div className="w-full max-w-7xl mx-auto pt-10">
        <TechStack />
      </div>
    </main>
  );
}