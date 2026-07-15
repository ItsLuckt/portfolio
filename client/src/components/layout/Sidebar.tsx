import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon, Languages, Home, Code2, Briefcase, Blocks, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: "Accueil", href: "/", icon: Home },
    { name: t('nav.expertise'), href: "/services", icon: Code2 },
    { name: t('nav.experience'), href: "/experience", icon: Briefcase },
    { name: t('nav.stack'), href: "/skills", icon: Blocks },
    { name: t('nav.projects'), href: "/projects", icon: Hexagon },
    { name: t('nav.contact_me'), href: "/contact", icon: MessageSquare },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-lg border-b border-border/50 z-50 flex items-center justify-between px-4">
        <Link href="/">
          <div className="flex items-center gap-2 font-bold text-xl cursor-pointer">
            <Hexagon className="w-6 h-6 text-blue-500" />
            <span className="text-foreground tracking-tight">Luckt</span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden md:flex flex-col w-64 h-screen bg-background/40 backdrop-blur-xl border-r border-white/5 relative z-40"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="p-8 pb-4">
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 font-bold text-2xl cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
                  <Hexagon className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
              <span className="text-foreground tracking-tight">
                Luckt<span className="text-primary">.dev</span>
              </span>
            </motion.div>
          </Link>
        </div>

        <div className="flex flex-col gap-2 px-4 py-8 flex-grow">
          {navLinks.map((link, i) => {
            const isActive = location === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "bg-primary/10 text-primary font-semibold shadow-inner border border-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 font-medium"
                  }`}
                >
                  <link.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
        
        <div className="p-6 border-t border-border/40 flex flex-col gap-4 mt-auto">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl bg-background/50 backdrop-blur-md border-border/50">
                  <Languages className="w-4 h-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl glass-card border-white/10">
                <DropdownMenuItem onClick={() => changeLanguage('fr')} className="cursor-pointer rounded-lg focus:bg-primary/20">
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer rounded-lg focus:bg-primary/20">
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('de')} className="cursor-pointer rounded-lg focus:bg-primary/20">
                  🇩🇪 Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pb-6"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col gap-4 flex-grow">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.name} href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? "bg-primary/10 text-primary font-bold border border-primary/10" 
                          : "text-foreground font-medium bg-secondary/30"
                      }`}
                    >
                      <link.icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xl">{link.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-6 border-t border-border/40 flex justify-center"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full h-14 rounded-xl text-base gap-3">
                    <Languages className="w-5 h-5" />
                    Changer de langue
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-full min-w-[200px] rounded-xl glass-card">
                  <DropdownMenuItem onClick={() => {changeLanguage('fr'); setIsMobileMenuOpen(false);}} className="text-lg py-3 justify-center">
                    🇫🇷 Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {changeLanguage('en'); setIsMobileMenuOpen(false);}} className="text-lg py-3 justify-center">
                    🇬🇧 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {changeLanguage('de'); setIsMobileMenuOpen(false);}} className="text-lg py-3 justify-center">
                    🇩🇪 Deutsch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}