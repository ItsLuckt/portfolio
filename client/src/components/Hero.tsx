import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Code2, Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiRoblox } from "react-icons/si";
import { useTranslation, Trans } from "react-i18next";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-x-hidden pt-32 pb-24 min-h-screen"
    >
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div 
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/80 border border-border/50 text-foreground text-sm font-medium mb-8 backdrop-blur-md shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent font-semibold">{t('hero.badge')}</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
            {t('hero.title_1')} <br className="hidden lg:block"/>
            <span className="text-gradient drop-shadow-sm">{t('hero.title_2')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            <Trans i18nKey="hero.description">
              Je suis spécialisé dans le web et les bases de données. 
              De la conception architecturale à l'implémentation d'interfaces modernes avec <span className="font-medium text-foreground">React</span>, <span className="font-medium text-foreground">Python</span> et <span className="font-medium text-foreground">Node.js</span>.
            </Trans>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto mt-2">
            <Button
              size="lg"
              className="rounded-xl text-base px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t('hero.btn_projects')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl text-base px-8 h-14 bg-background/40 backdrop-blur-xl border-border/50 hover:bg-secondary hover:border-border hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => window.open("https://github.com/ItsLuckt", "_blank")}
            >
              <Github className="mr-2 w-5 h-5" /> {t('hero.btn_github')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl text-base px-8 h-14 bg-background/40 backdrop-blur-xl border-border/50 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-500 hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => window.open("https://www.roblox.com/users/454458772/profile", "_blank")}
            >
              <SiRoblox className="mr-2 w-5 h-5" /> {t('hero.btn_roblox')}
            </Button>
          </div>
        </motion.div>

        {/* Technical Abstract Visualization & Avatar */}
        <div className="relative flex flex-col items-center lg:items-end w-full gap-8">
          <motion.div
            className="w-full max-w-lg relative z-20 text-left"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1 }}
          >
            <div className="relative rounded-2xl glass-card p-5 md:p-7 overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50"></div>
              
              <div className="flex items-center justify-between mb-5 border-b border-border/40 pb-4 relative z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="text-xs font-mono text-muted-foreground/80 flex items-center bg-secondary/50 px-3 py-1 rounded-full">
                  <Terminal className="w-3 h-3 mr-2 text-primary" /> app.tsx
                </div>
              </div>
              
              <div className="overflow-x-auto w-full pb-2 relative z-20">
                <pre className="font-mono text-[11px] sm:text-sm leading-relaxed text-muted-foreground/90 whitespace-pre">
                  <code>
<span className="text-purple-400">import</span> {"{ "}Developer{" }"} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@/core"</span>;{"\n"}
<span className="text-purple-400">import</span> {"{ "}React, Python, Node{" }"} <span className="text-purple-400">from</span> <span className="text-emerald-400">"@/skills"</span>;{"\n\n"}
<span className="text-blue-400">const</span> luckt = <span className="text-blue-400">new</span> <span className="text-yellow-300">Developer</span>({"{"}{"\n"}
{"  "}name: <span className="text-emerald-400">"Luckt"</span>,{"\n"}
{"  "}roles: [<span className="text-emerald-400">"FullStack"</span>, <span className="text-emerald-400">"Mobile"</span>, <span className="text-emerald-400">"Roblox"</span>],{"\n"}
{"  "}stack: [React, Python, Node],{"\n"}
{"  "}passion: <span className="text-emerald-400">"Building great products"</span>{"\n"}
{"}"});{"\n\n"}
<span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">Portfolio</span>() {"{"}{"\n"}
{"  "}<span className="text-purple-400">return</span> ({"\n"}
{"    "}&lt;<span className="text-pink-400">App</span> <span className="text-blue-300">creator</span>={"{luckt}"}&gt;{"\n"}
{"      "}&lt;<span className="text-pink-400">Innovation</span> /&gt;{"\n"}
{"    "}&lt;/<span className="text-pink-400">App</span>&gt;{"\n"}
{"  "});{"\n"}
{"}"}
                  </code>
                </pre>
              </div>
              
              {/* Subtle animated scanning line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-30"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 6 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute -right-4 lg:-right-12 -top-10 lg:-top-16 z-30 hidden md:block w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-primary/30 bg-background/50 backdrop-blur-sm group transition-all duration-500 hover:rotate-0 hover:scale-110 hover:border-primary/50 hover:shadow-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-fuchsia-500/20 mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity"></div>
            <img 
              src="https://tr.rbxcdn.com/30DAY-Avatar-8971640538441A88601841642E81E4CC-Png/720/720/Avatar/Png/noFilter" 
              alt="Luckt Avatar Roblox"
              className="w-full h-full object-cover bg-secondary/80 relative z-0"
            />
          </motion.div>

          {/* Mobile avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative z-30 md:hidden mt-4 w-32 h-32 rounded-2xl overflow-hidden border border-white/20 shadow-xl shadow-primary/30 bg-background"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-fuchsia-500/20 mix-blend-overlay z-10"></div>
            <img 
              src="https://tr.rbxcdn.com/30DAY-Avatar-8971640538441A88601841642E81E4CC-Png/720/720/Avatar/Png/noFilter" 
              alt="Luckt Avatar Roblox"
              className="w-full h-full object-cover bg-secondary/80"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center hidden md:flex"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
