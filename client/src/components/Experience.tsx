import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export default function Experience() {
  const { t } = useTranslation();
  
  const experiences = [
    {
      year: t('experience.items.0.year'),
      role: t('experience.items.0.role'),
      company: t('experience.items.0.company'),
      description: t('experience.items.0.desc'),
    },
    {
      year: t('experience.items.1.year'),
      role: t('experience.items.1.role'),
      company: t('experience.items.1.company'),
      description: t('experience.items.1.desc'),
    },
    {
      year: t('experience.items.2.year'),
      role: t('experience.items.2.role'),
      company: t('experience.items.2.company'),
      description: t('experience.items.2.desc'),
    }
  ];

  return (
    <section id="experience" className="py-24 border-b-4 border-foreground">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-foreground pb-8 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl font-bold tracking-widest text-primary uppercase mb-4">
              {"// " + t('experience.badge')}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t('experience.title')}</h3>
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground max-w-sm">
            {t('experience.desc')}
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="glass-card group flex flex-col md:flex-row md:items-stretch"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Year Block */}
              <div className="bg-foreground text-background p-6 md:w-48 flex items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-foreground shrink-0">
                <span className="text-2xl font-black tracking-widest">{exp.year}</span>
              </div>
              
              {/* Content Block */}
              <div className="p-8 flex-grow flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h4 className="text-3xl font-black uppercase text-foreground">{exp.role}</h4>
                  <div className="flex items-center gap-2 px-4 py-2 border-2 border-primary bg-primary/10 text-primary font-bold uppercase tracking-wider w-fit">
                    {exp.company}
                  </div>
                </div>
                
                <p className="text-lg text-foreground/80 font-medium max-w-3xl">
                  {exp.description}
                </p>
              </div>

              {/* Action Block */}
              <div className="hidden md:flex w-24 border-l-4 border-foreground bg-secondary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <ArrowRight className="w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
