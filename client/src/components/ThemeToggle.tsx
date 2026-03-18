import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial preference from class or local storage
    const isDarkMode = document.documentElement.classList.contains("dark") || 
                       localStorage.getItem("theme") === "dark";
    
    // Fallback if nothing set
    if (localStorage.getItem("theme") === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full bg-secondary/50 hover:bg-secondary border border-border w-10 h-10 overflow-hidden relative"
    >
      <motion.div
        initial={false}
        animate={{ 
          y: isDark ? 0 : -30,
          opacity: isDark ? 1 : 0
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-5 w-5 text-foreground" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          y: isDark ? 30 : 0,
          opacity: isDark ? 0 : 1
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5 text-foreground" />
      </motion.div>
    </Button>
  );
}
