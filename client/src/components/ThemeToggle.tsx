import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Use resolved theme to know what's actually being displayed
  const resolvedTheme = theme === "system" 
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") 
    : theme;
    
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
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
