import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Présent",
    role: "Créateur de Jeux & Développeur Luau",
    company: "Roblox",
    description: "Développement de systèmes de jeu complexes, d'interfaces utilisateur immersives et de mécaniques multijoueurs poussées sur la plateforme Roblox.",
  },
  {
    year: "2023 - Présent",
    role: "Développeur Fullstack Indépendant",
    company: "Freelance",
    description: "Création d'applications web modernes avec React, Node.js et MySQL. Conception d'interfaces utilisateur fluides, sécurisées et optimisées pour la performance.",
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
    <section id="experience" className="py-24 relative bg-background border-b border-border/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Expérience</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Mon parcours professionnel.</h3>
          <p className="text-lg text-muted-foreground">
            Une évolution guidée par la passion de la résolution de problèmes et la création d'expériences numériques de qualité.
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
