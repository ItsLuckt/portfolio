import { motion } from "framer-motion";
import { Terminal, Sparkles, Layers } from "lucide-react";
import { SiGithub, SiRoblox } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "wouter";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-12 pb-24 min-h-[90vh] overflow-hidden"
    >
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center gap-12 xl:gap-16">

        {/* ── Left: text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center xl:items-start text-center xl:text-left flex-1 min-w-0"
        >
          <motion.div
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/80 border border-border/50 text-foreground text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent font-semibold">
              {t("hero.badge")}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
            {t("hero.title_1")} <br className="hidden xl:block" />
            <span className="text-gradient drop-shadow-sm">{t("hero.title_2")}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
            <Trans i18nKey="hero.description">
              Je suis spécialisé dans le web et les bases de données. De la
              conception architecturale à l'implémentation d'interfaces modernes
              avec{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">Python</span> et{" "}
              <span className="font-medium text-foreground">Node.js</span>.
            </Trans>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center xl:justify-start gap-4 w-full sm:w-auto mt-2">
            <Link href="/projects">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Layers className="mr-2 w-5 h-5" /> {t("hero.btn_projects")}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-background/40 backdrop-blur-xl border-border/50 hover:bg-secondary hover:border-border hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => window.open("https://github.com/ItsLuckt", "_blank")}
            >
              <SiGithub className="mr-2 w-5 h-5" /> {t("hero.btn_github")}
            </Button>
          </div>
        </motion.div>

        {/* ── Right: avatar + code card ── */}
        <div className="flex flex-col items-center gap-6 w-full xl:w-auto xl:flex-shrink-0 xl:w-[420px]">

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-44 h-44 lg:w-56 lg:h-56 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-background/50 backdrop-blur-sm group transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-primary/40 rotate-3 hover:rotate-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-cyan-500/20 mix-blend-overlay z-10 group-hover:opacity-40 transition-opacity" />
            <img
              src="https://tr.rbxcdn.com/30DAY-Avatar-109EDC05A115DA5839771BC5D83F967F-Png/720/720/Avatar/Png/noFilter"
              alt="Luckt Avatar Roblox"
              className="w-full h-full object-cover bg-secondary/50 relative z-0"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <Button
                size="sm"
                className="rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/70 text-white"
                onClick={() =>
                  window.open(
                    "https://www.roblox.com/users/454458772/profile",
                    "_blank"
                  )
                }
              >
                <SiRoblox className="mr-2 w-4 h-4" /> {t("hero.btn_roblox")}
              </Button>
            </div>
          </motion.div>

          {/* Code card */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl bento-card p-5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10 rounded-full" />

              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground/80 flex items-center">
                  <Terminal className="w-3 h-3 mr-1.5" /> ItsLuckt
                </div>
              </div>

              <div className="overflow-x-auto w-full">
                <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-muted-foreground/90 whitespace-pre">
                  <code>
<span className="text-indigo-400">import</span> {"{ "}Developer{" }"} <span className="text-indigo-400">from</span> <span className="text-emerald-400">"@/core"</span>;{"\n"}
<span className="text-blue-400">const</span> me = <span className="text-blue-400">new</span> <span className="text-amber-300">Developer</span>({"{"}{"\n"}
{"  "}name: <span className="text-emerald-400">"Luckt"</span>,{"\n"}
{"  "}status: <span className="text-emerald-400">"Building solutions 🚀"</span>,{"\n"}
{"  "}skills: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Lua"</span>]{"\n"}
{"}"});{"\n\n"}
me.<span className="text-amber-300">execute</span>();
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
