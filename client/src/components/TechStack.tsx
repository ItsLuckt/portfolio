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
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes Compétences
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Une boîte à outils complète pour donner vie à vos idées, du web au
            gaming.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              <skill.icon
                className="w-12 h-12 transition-transform duration-300"
                style={{ color: skill.color }}
              />
              <span className="font-medium text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
