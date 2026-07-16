import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const { t } = useTranslation();
  
  const experiences = [
    {
      year: t('experience.items.0.year'),
      role: t('experience.items.0.role'),
      company: t('experience.items.0.company'),
      description: t('experience.items.0.desc'),
      icon: Briefcase,
    },
    {
      year: t('experience.items.1.year'),
      role: t('experience.items.1.role'),
      company: t('experience.items.1.company'),
      description: t('experience.items.1.desc'),
      icon: Award,
    },
    {
      year: t('experience.items.2.year'),
      role: t('experience.items.2.role'),
      company: t('experience.items.2.company'),
      description: t('experience.items.2.desc'),
      icon: GraduationCap,
    }
  ];

  return (
    <section className="py-12 relative bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full">
             {t('experience.badge')}
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{t('experience.title')}</h3>
          <p className="text-lg text-muted-foreground font-light">
            {t('experience.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bento-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Decorative background glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-secondary/80 rounded-2xl shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-foreground">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                    {exp.year}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">{exp.role}</h4>
                <h5 className="text-sm text-muted-foreground mb-6 font-medium tracking-wide uppercase">{exp.company}</h5>
                
                <p className="text-muted-foreground/80 leading-relaxed font-light mt-auto">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}