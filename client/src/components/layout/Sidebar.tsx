import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Languages,
  Home, Code2, Briefcase, Blocks, FolderGit2, MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/* ─── Custom Logo Mark SVG ─────────────────────────────────── */
let _logoId = 0;
function LogoMark({ size = 40 }: { size?: number }) {
  // unique per-instance IDs to avoid gradient conflicts when rendered twice
  const uid = `lm${++_logoId}`;
  const g1 = `${uid}g1`;
  const g2 = `${uid}g2`;
  const glow = `${uid}glow`;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g1} x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="55%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id={g2} x1="38" y1="2" x2="2" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
        <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon shell */}
      <path
        d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
        fill={`url(#${g2})`}
        stroke={`url(#${g1})`}
        strokeWidth="1.8"
      />

      {/* Inner ring */}
      <path
        d="M20 9 L30 14.5 L30 25.5 L20 31 L10 25.5 L10 14.5 Z"
        fill="none"
        stroke={`url(#${g1})`}
        strokeWidth="0.7"
        strokeOpacity="0.45"
      />

      {/* "L" letterform — bold & clean */}
      <rect x="13.5" y="11.5" width="4" height="17" rx="2" fill={`url(#${g1})`} filter={`url(#${glow})`} />
      <rect x="13.5" y="25" width="13" height="4" rx="2" fill={`url(#${g1})`} filter={`url(#${glow})`} />

      {/* Accent dots at hex vertices */}
      <circle cx="20" cy="2" r="2"   fill="#c084fc" opacity="0.9" />
      <circle cx="36" cy="20" r="1.5" fill="#818cf8" opacity="0.85" />
      <circle cx="4"  cy="20" r="1.2" fill="#38bdf8" opacity="0.7" />
    </svg>
  );
}

/* ─── Logo wordmark ─────────────────────────────────────────── */
function LogoWordmark({ size = "text-xl" }: { size?: string }) {
  return (
    <span className={`font-black tracking-tight ${size} select-none`}>
      <span className="text-foreground/90">Its</span>
      <span
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(135deg, #a855f7 0%, #6366f1 60%, #38bdf8 100%)",
        }}
      >
        Luckt
      </span>
    </span>
  );
}

/* ─── Sidebar component ─────────────────────────────────────── */
export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("nav.home", "Accueil"),   href: "/",          icon: Home },
    { name: t("nav.expertise"),          href: "/services",  icon: Code2 },
    { name: t("nav.experience"),         href: "/experience",icon: Briefcase },
    { name: t("nav.stack"),              href: "/skills",    icon: Blocks },
    { name: t("nav.projects"),           href: "/projects",  icon: FolderGit2 },
    { name: t("nav.contact_me"),         href: "/contact",   icon: MessageSquare },
  ];

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  /* Active indicator shared layout animation */
  const activeClass = "text-primary";
  const inactiveClass = "text-muted-foreground hover:text-foreground";

  return (
    <>
      {/* ── Mobile top bar ─────────────────────────────────── */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-5"
        style={{ background: "rgba(10,5,20,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(168,85,247,0.12)" }}
      >
        <Link href="/">
          <div className="flex items-center gap-2.5 cursor-pointer">
            <LogoMark size={32} />
            <LogoWordmark size="text-lg" />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Desktop Sidebar ─────────────────────────────────── */}
      <motion.aside
        className="hidden md:flex flex-col w-60 h-screen relative z-40 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(15,7,30,0.96) 0%, rgba(10,5,20,0.98) 100%)",
          borderRight: "1px solid rgba(168,85,247,0.1)",
        }}
        initial={{ x: -240 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ambient glow top-left */}
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }} />
        {/* Ambient glow bottom */}
        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />

        {/* ── Logo ── */}
        <div className="px-6 pt-7 pb-6">
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                initial={{ rotate: -180, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }}
              >
                <LogoMark size={42} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <LogoWordmark size="text-xl" />
              </motion.div>
            </motion.div>
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.25), transparent)" }} />

        {/* ── Nav links ── */}
        <nav className="flex flex-col gap-1 px-3 flex-grow">
          {navLinks.map((link, i) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.45 }}
                  className={`relative flex items-center gap-3.5 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-250 group ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))", border: "1px solid rgba(168,85,247,0.2)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Left accent bar */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-accent-bar"
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                      style={{ background: "linear-gradient(180deg, #a855f7, #6366f1)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Hover background */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${isActive ? "hidden" : ""}`}
                    style={{ background: "rgba(168,85,247,0.06)" }} />

                  <link.icon className={`w-[18px] h-[18px] relative z-10 transition-colors ${isActive ? "text-primary" : "group-hover:text-foreground/80"}`} />
                  <span className="text-sm font-medium relative z-10 tracking-wide">{link.name}</span>

                  {/* Active dot */}
                  {isActive && (
                    <motion.div
                      className="ml-auto w-1.5 h-1.5 rounded-full relative z-10"
                      style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* ── Bottom controls ── */}
        <motion.div
          className="px-5 py-5 mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {/* Divider */}
          <div className="mb-4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)" }} />

          <div className="flex items-center justify-between gap-3">
            {/* Status badge */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="relative w-2 h-2 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
              <span className="text-xs text-muted-foreground/70 truncate font-medium">Disponible</span>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  <Languages className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                side="top"
                className="rounded-xl border-white/10 min-w-[140px]"
                style={{ background: "rgba(15,7,30,0.95)", backdropFilter: "blur(16px)" }}
              >
                <DropdownMenuItem onClick={() => changeLanguage("fr")} className="cursor-pointer rounded-lg focus:bg-primary/20 text-sm">
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")} className="cursor-pointer rounded-lg focus:bg-primary/20 text-sm">
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("de")} className="cursor-pointer rounded-lg focus:bg-primary/20 text-sm">
                  🇩🇪 Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>
      </motion.aside>

      {/* ── Mobile menu overlay ─────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col pt-20 px-5 pb-8"
            style={{ background: "rgba(8,4,18,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col gap-2 flex-grow">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.07 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden ${
                        isActive ? "text-primary" : "text-foreground/80"
                      }`}
                      style={isActive ? {
                        background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))",
                        border: "1px solid rgba(168,85,247,0.2)",
                      } : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full"
                          style={{ background: "linear-gradient(180deg, #a855f7, #6366f1)" }} />
                      )}
                      <link.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-lg font-semibold tracking-wide">{link.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-auto pt-5 border-t border-white/8 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="relative w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                </div>
                <span className="text-sm text-muted-foreground">Disponible</span>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="w-10 h-10 rounded-xl">
                      <Languages className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem onClick={() => { changeLanguage("fr"); setIsMobileMenuOpen(false); }}>🇫🇷 Français</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { changeLanguage("en"); setIsMobileMenuOpen(false); }}>🇬🇧 English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { changeLanguage("de"); setIsMobileMenuOpen(false); }}>🇩🇪 Deutsch</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
