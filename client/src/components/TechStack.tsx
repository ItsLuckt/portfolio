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
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">{t('techstack.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('techstack.title')}</h3>
          <p className="text-lg text-muted-foreground">
            {t('techstack.desc')}
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
                    <div className="mt-1 p-2 rounded-md bg-transparent border border-border/50 group-hover:scale-110 transition-transform">
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
