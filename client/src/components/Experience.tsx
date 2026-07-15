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
    <section id="experience" className="py-32 relative bg-transparent border-b border-border/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">{t('experience.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('experience.title')}</h3>
          <p className="text-lg text-muted-foreground font-light">
            {t('experience.desc')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 rounded-2xl relative">
                  <div className="flex flex-col mb-4 gap-2">
                    <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {exp.year}
                    </span>
                    <h4 className="text-2xl font-bold text-foreground">{exp.role}</h4>
                  </div>
                  
                  <h5 className="text-lg text-muted-foreground mb-4 font-medium">{exp.company}</h5>
                  <p className="text-muted-foreground/80 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
