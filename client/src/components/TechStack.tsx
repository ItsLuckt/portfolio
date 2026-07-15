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
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export default function TechStack() {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      title: t('techstack.categories.0.title'),
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ]
    },
    {
      title: t('techstack.categories.1.title'),
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26" },
      ]
    },
    {
      title: t('techstack.categories.2.title'),
      skills: [
        { name: "Luau", icon: SiRoblox, color: "#00A2FF" },
        { name: "Lua", icon: SiLua, color: "#000080" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
      ]
    },
    {
      title: t('techstack.categories.3.title'),
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
      ]
    },
    {
      title: t('techstack.categories.4.title'),
      skills: [
        { name: t('techstack.categories.4.skills.0.name'), icon: Languages, color: "#9333ea" },
        { name: t('techstack.categories.4.skills.1.name'), icon: Languages, color: "#d946ef" },
        { name: t('techstack.categories.4.skills.2.name'), icon: Languages, color: "#ec4899" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 border-b-4 border-foreground bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-foreground pb-8 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl font-bold tracking-widest text-primary uppercase mb-4">
              {"// " + t('techstack.badge')}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t('techstack.title')}</h3>
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground max-w-sm">
            {t('techstack.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col h-full"
            >
              <div className="bg-foreground text-background p-6 border-b-4 border-foreground">
                <h4 className="text-2xl font-black uppercase tracking-widest">{category.title}</h4>
              </div>
              <div className="p-8 flex flex-col gap-6 flex-grow bg-background">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="p-3 border-4 border-foreground bg-secondary group-hover:bg-primary transition-colors duration-300">
                      <skill.icon className="w-8 h-8 group-hover:text-primary-foreground" style={{ color: skill.color }} />
                    </div>
                    <span className="text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{skill.name}</span>
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
