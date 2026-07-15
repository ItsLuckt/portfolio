import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-full bg-transparent text-foreground relative transition-colors duration-500 flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-7xl mx-auto">
        <Hero />
      </div>
    </main>
  );
}