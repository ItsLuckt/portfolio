import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-full bg-transparent text-foreground relative transition-colors duration-500 p-6 lg:p-12">
      <div className="w-full max-w-7xl mx-auto pt-10">
        <Contact />
      </div>
    </main>
  );
}