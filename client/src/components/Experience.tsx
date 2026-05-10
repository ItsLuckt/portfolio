import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
    <section id="experience" className="py-24 relative bg-background border-b border-border/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">{t('experience.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('experience.title')}</h3>
          <p className="text-lg text-muted-foreground">
            {t('experience.desc')}
          </p>
        </motion.div>

        <div className="max-w-3xl">
          <div className="relative border-l border-border/50 ml-3 md:ml-4 space-y-12 pb-4">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 md:pl-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <span className="text-sm font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                    {exp.year}
                  </span>
                </div>
                
                <h5 className="text-primary font-medium mb-4">{exp.company}</h5>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
