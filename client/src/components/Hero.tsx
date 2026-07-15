import { motion } from "framer-motion";
import { ArrowRight, Github, SquareTerminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiRoblox } from "react-icons/si";
import { useTranslation, Trans } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-[90vh] pt-32 pb-24 border-b-4 border-foreground"
    >
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-primary text-primary-foreground font-bold uppercase tracking-widest w-fit mb-8 shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))]">
              <SquareTerminal className="w-5 h-5" />
              <span>{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black uppercase leading-[0.9] tracking-tighter mb-8">
              {t('hero.title_1')} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px hsl(var(--foreground))' }}>{t('hero.title_2')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-medium max-w-2xl mb-12 border-l-4 border-primary pl-6">
              <Trans i18nKey="hero.description">
                Je suis spécialisé dans le web et les bases de données. 
                De la conception architecturale à l'implémentation d'interfaces modernes avec React, Python et Node.js.
              </Trans>
            </p>

            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                className="h-16 px-8 text-lg font-bold uppercase rounded-none border-2 border-foreground bg-primary text-primary-foreground shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))] transition-all"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t('hero.btn_projects')} <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-8 text-lg font-bold uppercase rounded-none border-2 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))] transition-all"
                onClick={() => window.open("https://github.com/ItsLuckt", "_blank")}
              >
                <Github className="mr-3 w-6 h-6" /> {t('hero.btn_github')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-foreground bg-secondary shadow-[12px_12px_0px_0px_rgba(var(--color-primary))] overflow-hidden group">
              <img 
                src="https://tr.rbxcdn.com/30DAY-Avatar-109EDC05A115DA5839771BC5D83F967F-Png/720/720/Avatar/Png/noFilter" 
                alt="Luckt Avatar Roblox"
                className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              
              <Button
                size="icon"
                className="absolute bottom-4 right-4 w-12 h-12 rounded-none border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(var(--color-foreground))] transition-all z-20"
                onClick={() => window.open("https://www.roblox.com/users/454458772/profile", "_blank")}
                title={t('hero.btn_roblox')}
              >
                <SiRoblox className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden border-t-4 border-foreground bg-primary py-3 flex items-center">
        <motion.div 
          className="whitespace-nowrap flex font-black uppercase text-2xl tracking-widest text-primary-foreground"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center">
              LUCKT DEV <Sparkles className="w-6 h-6 ml-8 inline-block" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
