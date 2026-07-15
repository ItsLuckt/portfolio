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
        { name: "Python", icon: SiPython, color: "#3776AB", desc: t('techstack.categories.0.skills.0.desc') },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", desc: t('techstack.categories.0.skills.1.desc') },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", desc: t('techstack.categories.0.skills.2.desc') },
      ]
    },
    {
      title: t('techstack.categories.1.title'),
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB", desc: t('techstack.categories.1.skills.0.desc') },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: t('techstack.categories.1.skills.1.desc') },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: t('techstack.categories.1.skills.2.desc') },
        { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26", desc: t('techstack.categories.1.skills.3.desc') },
      ]
    },
    {
      title: t('techstack.categories.2.title'),
      skills: [
        { name: "Luau", icon: SiRoblox, color: "#00A2FF", desc: t('techstack.categories.2.skills.0.desc') },
        { name: "Lua", icon: SiLua, color: "#000080", desc: t('techstack.categories.2.skills.1.desc') },
        { name: "Dart", icon: SiDart, color: "#0175C2", desc: t('techstack.categories.2.skills.2.desc') },
      ]
    },
    {
      title: t('techstack.categories.3.title'),
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", desc: t('techstack.categories.3.skills.0.desc') },
      ]
    },
    {
      title: t('techstack.categories.4.title'),
      skills: [
        { name: t('techstack.categories.4.skills.0.name'), icon: Languages, color: "#9333ea", desc: t('techstack.categories.4.skills.0.desc') },
        { name: t('techstack.categories.4.skills.1.name'), icon: Languages, color: "#d946ef", desc: t('techstack.categories.4.skills.1.desc') },
        { name: t('techstack.categories.4.skills.2.name'), icon: Languages, color: "#ec4899", desc: t('techstack.categories.4.skills.2.desc') },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background/30 backdrop-blur-sm border-b border-white/5 relative">
      {/* Decorative blurry spot */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">{t('techstack.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('techstack.title')}</h3>
          <p className="text-lg text-muted-foreground font-light">
            {t('techstack.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold border-b border-border/40 pb-4 mb-6 text-foreground">{category.title}</h4>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 p-2.5 rounded-xl bg-muted/50 border border-border/50 group-hover:scale-110 group-hover:bg-background transition-all duration-300 flex items-center justify-center shadow-sm">
                      <skill.icon className="w-6 h-6 transition-colors duration-300" style={{ color: skill.color }} />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block mb-1 group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className="text-sm text-muted-foreground/80 leading-relaxed font-light">{skill.desc}</span>
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
