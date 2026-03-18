import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: y2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Développeur Fullstack & Roblox</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-6 tracking-tighter">
              Créer des expériences{" "}
              <span className="text-gradient inline-block">digitales</span> uniques.
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-medium">
              Je suis un développeur passionné maîtrisant <span className="text-foreground">Python</span>, <span className="text-foreground">Lua</span>, et bien d'autres technologies modernes pour donner vie à vos idées.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button
                size="lg"
                className="rounded-full text-base px-10 h-14 glow-primary hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Voir mes projets <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base px-10 h-14 border-white/10 hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all"
                onClick={() => window.open("https://github.com/ItsLuckt", "_blank")}
              >
                <Github className="mr-2 w-5 h-5" /> GitHub
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right side abstract visual or 3D card */}
        <motion.div
          className="hidden md:flex justify-center relative z-20 perspective-1000"
          initial={{ opacity: 0, scale: 0.8, rotateY: 10, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          style={{ y: y1 }}
        >
          <motion.div 
            className="relative w-full max-w-md aspect-square group"
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-500" />
            <div className="relative glass-card rounded-[2.5rem] p-10 w-full h-full flex flex-col justify-between overflow-hidden border-primary/20 group-hover:border-primary/40 transition-all duration-500 bg-background/40">
              <div className="absolute top-0 right-0 p-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 p-40 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="flex justify-between items-start relative z-10">
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 backdrop-blur-md">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
              </div>

              <div className="font-mono text-sm md:text-base text-muted-foreground space-y-3 mt-8 relative z-10">
                <p>
                  <span className="text-purple-400 font-bold">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span>
                </p>
                <motion.p 
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  name: <span className="text-green-400">"Luckt"</span>,
                </motion.p>
                <motion.p 
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"Lua"</span>],
                </motion.p>
                <motion.p 
                  className="pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  status: <span className="text-primary animate-pulse">"Building awesome things"</span>
                </motion.p>
                <p>
                  <span className="text-yellow-400">{"}"}</span>
                </p>
              </div>

              <div className="mt-auto pt-8 relative z-10">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-md">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-purple-400 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="text-xs text-center mt-3 text-muted-foreground font-medium tracking-widest uppercase">
                  INITIALIZATION...
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1 backdrop-blur-md bg-background/20">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
