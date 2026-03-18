import { motion } from "framer-motion";
import { Code, Server, Gamepad2, Palette } from "lucide-react";

const services = [
  {
    title: "Développement Fullstack",
    description: "Création d'applications web complètes, performantes et scalables, de la base de données (MySQL) à l'interface utilisateur (React).",
    icon: Code,
  },
  {
    title: "Jeux Roblox & Luau",
    description: "Conception de mécaniques de jeu avancées et d'expériences immersives avec Luau sur la plateforme Roblox.",
    icon: Gamepad2,
  },
  {
    title: "Automatisation Python",
    description: "Développement de scripts sur mesure, bots Discord et outils d'analyse pour optimiser vos processus.",
    icon: Server,
  },
  {
    title: "Design UI/UX",
    description: "Interfaces modernes et fluides avec des animations avancées (Framer Motion) et une attention particulière aux détails.",
    icon: Palette,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ce Que Je Propose</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions techniques sur mesure pour répondre à vos besoins, avec une approche professionnelle et rigoureuse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
