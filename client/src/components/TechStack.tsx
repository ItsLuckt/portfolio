import { motion } from "framer-motion";
import {
  SiPython,
  SiPostgresql,
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
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "SQL", icon: SiPostgresql, color: "#336791" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Lua", icon: SiLua, color: "#000080" },
  { name: "Luau", icon: SiRoblox, color: "#FFFFFF" },
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl bg-secondary/20 border border-white/5 hover:border-primary/40 hover:bg-secondary/40 transition-all duration-500 flex flex-col items-center justify-center gap-6 cursor-default overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: skill.color }}
              />
              
              <skill.icon
                className="w-16 h-16 transition-all duration-500 group-hover:scale-110 drop-shadow-lg relative z-10"
                style={{ color: skill.color }}
              />
              <span className="font-semibold text-lg tracking-wide text-foreground/90 group-hover:text-foreground relative z-10">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
