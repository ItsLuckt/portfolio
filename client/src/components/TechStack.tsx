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
} from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, color: "#3776AB", desc: "Automatisation & Backend" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", desc: "Bases de données relationnelles" },
  { name: "Dart", icon: SiDart, color: "#0175C2", desc: "Développement Mobile" },
  { name: "React", icon: SiReact, color: "#61DAFB", desc: "Interfaces Web Modernes" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: "JavaScript fortement typé" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Logique applicative" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", desc: "Structure Sémantique" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", desc: "Design & Animations" },
  { name: "Lua", icon: SiLua, color: "#000080", desc: "Scripting performant" },
  { name: "Luau", icon: SiRoblox, color: "#00A2FF", desc: "Développement Roblox avancé" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function TechStack() {
  return (
    <section
      id="skills"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Mes Compétences
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Une boîte à outils complète pour donner vie à vos idées, du web au
            gaming.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative p-6 rounded-3xl glass-card hover:border-primary/40 transition-all duration-500 flex flex-col items-center justify-center gap-4 cursor-default overflow-hidden text-center h-full"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: skill.color }}
              />
              
              <skill.icon
                className="w-14 h-14 transition-all duration-500 group-hover:scale-110 drop-shadow-sm relative z-10"
                style={{ color: skill.color }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-bold text-lg tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">{skill.name}</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
