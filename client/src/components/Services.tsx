import { motion } from "framer-motion";
import { Code2, Server, Gamepad2, Blocks, ArrowUpRight } from "lucide-react";
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
    <section id="services" className="py-24 border-b-4 border-foreground bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-4 border-foreground pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-widest text-primary uppercase mb-4">{"// " + t('services.badge')}</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t('services.title')}</h3>
          </div>
          <p className="text-lg md:text-xl text-foreground font-medium max-w-sm">
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
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 border-4 border-foreground bg-primary text-primary-foreground">
                  <service.icon className="w-8 h-8" />
                </div>
                <ArrowUpRight className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <h4 className="text-3xl font-black uppercase tracking-tight mb-4">{service.title}</h4>
              <p className="text-lg text-foreground/80 font-medium mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="pt-6 border-t-2 border-foreground mt-auto">
                <span className="text-sm font-bold uppercase tracking-widest bg-secondary text-foreground px-4 py-2 border-2 border-foreground inline-block">
                  {service.tech}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
