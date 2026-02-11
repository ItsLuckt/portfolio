import { motion } from "framer-motion";
import { ArrowRight, Github, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_3d_geometric_shapes_with_neon_lighting_for_developer_portfolio.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Développeur Fullstack & Roblox
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-6 tracking-tighter">
              Créer des expériences{" "}
              <span className="text-gradient">digitales</span> uniques.
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Je suis un développeur passionné maîtrisant <span className="text-foreground font-medium">Python</span>, <span className="text-foreground font-medium">Lua</span>, et bien d'autres technologies modernes pour donner vie à vos idées.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button
                size="lg"
                className="rounded-full text-base px-10 h-14 glow-primary hover:scale-105 transition-transform"
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
                className="rounded-full text-base px-10 h-14 border-white/10 hover:bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform"
                onClick={() => window.open("https://github.com/ItsLuckt", "_blank")}
              >
                <Github className="mr-2 w-5 h-5" /> GitHub
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right side abstract visual or 3D card */}
        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-500" />
            <div className="relative glass-card rounded-3xl p-10 w-full h-full flex flex-col justify-between overflow-hidden border-primary/20 group-hover:border-primary/40 transition-all duration-500">
              <div className="absolute top-0 right-0 p-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="flex justify-between items-start">
                <Code2Icon className="w-12 h-12 text-primary" />
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="font-mono text-sm text-muted-foreground space-y-2 mt-8">
                <p>
                  <span className="text-purple-400"></span> developer ={" "}
                  <span className="text-yellow-400">{"{"}</span>
                </p>
                <p className="pl-4">
                  name :{" "}
                  <span className="text-green-400">" Mon Portfolio"</span>,
                </p>
                <p className="pl-4">
                  skills : [<span className="text-green-400">"Dart"</span>,{" "}
                  <span className="text-green-400">"Lua"</span>,{" "}
                  <span className="text-green-400">"Python"</span>],
                </p>
                <p className="pl-4">
                  passion : <span className="text-blue-400">true</span>
                </p>
                <p>
                  <span className="text-yellow-400">{"}"}</span>
                </p>
              </div>

              <div className="mt-auto pt-8">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </div>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Je compile mes rêves...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function Code2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}
