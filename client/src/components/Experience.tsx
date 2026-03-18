import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Présent",
    role: "Développeur Fullstack Indépendant",
    company: "Freelance",
    description: "Création d'applications web modernes avec React, Node.js et MySQL. Conception d'interfaces utilisateur fluides, sécurisées et optimisées pour la performance.",
  },
  {
    year: "2025 - Présent",
    role: "Créateur de Jeux & Développeur Luau",
    company: "Roblox",
    description: "Développement de systèmes de jeu complexes, d'interfaces utilisateur immersives et de mécaniques multijoueurs poussées sur la plateforme Roblox.",
  },
  {
    year: "2020 - 2022",
    role: "Développeur Python",
    company: "Projets Personnels",
    description: "Création de bots Discord performants, de scripts d'automatisation et d'outils d'analyse de données divers en utilisant Python.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-secondary/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Mon Parcours Professionnel</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
              
              <div className={`md:flex items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-[7px] md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_15px_rgba(139,92,246,0.6)] z-10 border-2 border-background" />
                
                <div className="md:w-5/12" />
                
                <div className="md:w-5/12 glass-card p-8 rounded-3xl hover:border-primary/30 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="text-primary font-mono text-sm mb-2 block font-semibold">{exp.year}</span>
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{exp.role}</h3>
                  <span className="text-muted-foreground/80 font-medium mb-4 block">{exp.company}</span>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {exp.description}
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
