import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark" || theme === "system";

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700 ${isDark ? 'bg-background' : 'bg-background'}`}>
      
      {/* Brutalist Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />
      
      {/* Big typography decorative */}
      <div className="absolute top-1/4 -left-20 text-[20vw] font-black text-foreground/5 opacity-10 select-none whitespace-nowrap rotate-90">
        DEV
      </div>
      <div className="absolute bottom-0 -right-10 text-[15vw] font-black text-foreground/5 opacity-10 select-none whitespace-nowrap">
        CODE
      </div>

    </div>
  );
}
