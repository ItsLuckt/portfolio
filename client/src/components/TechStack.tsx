import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiDart,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLua,
  SiRoblox,
  SiNodedotjs,
  SiGit
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend & Data",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB", desc: "Création de bots Discord, scripts d'automatisation et outils d'analyse de données divers." },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", desc: "Architecture d'APIs performantes et services backend." },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", desc: "Conception, gestion et optimisation de bases de données relationnelles." },
    ]
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", desc: "Développement d'interfaces utilisateur interactives, fluides et modernes." },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: "Développement web robuste, maintenable et fortement typé." },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Logique applicative complexe et dynamisme web." },
      { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26", desc: "Structure sémantique avancée, design responsive et animations." },
    ]
  },
  {
    title: "Game Dev & Mobile",
    skills: [
      { name: "Luau", icon: SiRoblox, color: "#00A2FF", desc: "Développement de systèmes de jeu complexes et mécaniques avancées sur Roblox." },
      { name: "Lua", icon: SiLua, color: "#000080", desc: "Développement système, scripting et intégrations pour jeux vidéo." },
      { name: "Dart", icon: SiDart, color: "#0175C2", desc: "Création d'applications mobiles performantes multi-plateformes." },
    ]
  },
  {
    title: "Outils",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", desc: "Versionning, collaboration efficace et gestion de code source." },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Stack Technique</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Les technologies que j'utilise au quotidien.</h3>
          <p className="text-lg text-muted-foreground">
            Une sélection d'outils et de langages maîtrisés pour concevoir, développer et déployer des applications complètes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-lg font-medium border-b border-border/50 pb-3 mb-6 text-foreground/80">{category.title}</h4>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/80 hover:border-primary/30 transition-colors group"
                  >
                    <div className="mt-1 p-2 rounded-md bg-background border border-border/50 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground/90 block mb-1">{skill.name}</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
