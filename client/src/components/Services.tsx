import { motion } from "framer-motion";
import { Code2, Server, Gamepad2, Blocks } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.items.0.title'),
      description: t('services.items.0.desc'),
      icon: Code2,
      tech: t('services.items.0.tech')
    },
    {
      title: t('services.items.1.title'),
      description: t('services.items.1.desc'),
      icon: Server,
      tech: t('services.items.1.tech')
    },
    {
      title: t('services.items.2.title'),
      description: t('services.items.2.desc'),
      icon: Gamepad2,
      tech: t('services.items.2.tech')
    },
    {
      title: t('services.items.3.title'),
      description: t('services.items.3.desc'),
      icon: Blocks,
      tech: t('services.items.3.tech')
    }
  ];

  return (
    <section className="py-12 relative bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">{t('services.badge')}</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('services.title')}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            {t('services.desc')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-8 font-light">
                  {service.description}
                </p>
                <div className="pt-5 border-t border-border/40 mt-auto">
                  <span className="text-xs font-mono text-muted-foreground/80 bg-secondary/50 px-3 py-1.5 rounded-full">{service.tech}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}