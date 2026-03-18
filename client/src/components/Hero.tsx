import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-x-hidden pt-32 pb-24 min-h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/50 border border-border text-foreground text-sm font-medium mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span>Développeur FullStack, Mobile & Jeux</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Dév FullStack et d'applications mobiles <br className="hidden md:block"/>
            <span className="text-gradient">et de jeux.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Je suis spécialisé dans le web et les bases de données. 
            De la conception architecturale à l'implémentation d'interfaces modernes avec <span className="font-semibold text-foreground">React</span>, <span className="font-semibold text-foreground">Python</span> et <span className="font-semibold text-foreground">Node.js</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="rounded-lg text-base px-8 h-12 hover:scale-[1.02] transition-transform"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Découvrir mes travaux <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-lg text-base px-8 h-12 bg-background/50 backdrop-blur-sm hover:bg-accent/50 hover:scale-[1.02] transition-all"
              onClick={() => window.open("https://github.com/ItsLuckt", "_blank")}
            >
              <Github className="mr-2 w-4 h-4" /> Profil GitHub
            </Button>
          </div>
        </motion.div>

        {/* Technical Abstract Visualization */}
        <motion.div
          className="mt-12 w-full max-w-3xl relative z-20 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ y: y1 }}
        >
          <div className="relative rounded-2xl glass-card border border-border/50 p-4 md:p-6 overflow-hidden bg-background/80 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-border/50 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs font-mono text-muted-foreground flex items-center">
                <Code2 className="w-3 h-3 mr-2" /> developpeur.py
              </div>
            </div>
            
            <div className="overflow-x-auto w-full pb-4">
              <pre className="font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed text-muted-foreground/90 whitespace-pre">
                <code>
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">1</span> <span className="text-blue-500 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">typing</span> <span className="text-blue-500 dark:text-blue-400">import</span> List{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">2</span>{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">3</span> <span className="text-blue-500 dark:text-blue-400">class</span> <span className="text-yellow-600 dark:text-yellow-400">DeveloppeurLogiciel</span>:{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">4</span> {"    "}<span className="text-blue-500 dark:text-blue-400">def</span> <span className="text-purple-600 dark:text-purple-400">__init__</span>(<span className="text-orange-500 dark:text-orange-400">self</span>):{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">5</span> {"        "}<span className="text-orange-500 dark:text-orange-400">self</span>.nom = <span className="text-green-600 dark:text-green-400">"Luckt"</span>{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">6</span> {"        "}<span className="text-orange-500 dark:text-orange-400">self</span>.role = <span className="text-green-600 dark:text-green-400">"Dév FullStack & Logiciel"</span>{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">7</span> {"        "}<span className="text-orange-500 dark:text-orange-400">self</span>.competences = [<span className="text-green-600 dark:text-green-400">"Python"</span>, <span className="text-green-600 dark:text-green-400">"React"</span>, <span className="text-green-600 dark:text-green-400">"Node.js"</span>]{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">8</span>{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">9</span> {"    "}<span className="text-blue-500 dark:text-blue-400">def</span> <span className="text-purple-600 dark:text-purple-400">creer_solutions</span>(<span className="text-orange-500 dark:text-orange-400">self</span>) -&gt; <span className="text-green-600 dark:text-green-400">str</span>:{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">10</span> {"        "}<span className="text-blue-500 dark:text-blue-400">return</span> <span className="text-green-600 dark:text-green-400">"Déploiement d'applications robustes..."</span>{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">11</span>{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">12</span> <span className="text-blue-500 dark:text-blue-400">if</span> __name__ == <span className="text-green-600 dark:text-green-400">"__main__"</span>:{"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">13</span> {"    "}luckt = DeveloppeurLogiciel(){"\n"}
<span className="text-primary mr-2 sm:mr-3 w-3 sm:w-4 inline-block select-none text-right">14</span> {"    "}<span className="text-yellow-600 dark:text-yellow-400">print</span>(luckt.creer_solutions())
                </code>
              </pre>
            </div>
            
            {/* Subtle scanning effect */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-[1px] bg-primary/30"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center hidden md:flex"
        style={{ opacity }}
      >
        <span className="text-[10px] font-medium text-muted-foreground mb-1 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
