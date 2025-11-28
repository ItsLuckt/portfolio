import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "The School RP FR",
    category: "Roblox Development",
    description: "Jeu de Roleplay scolaire francophone immersif sur Roblox. Développement des systèmes de gameplay et d'interactions.",
    tags: ["Lua", "Roblox Studio", "RP"],
    links: { demo: "https://www.roblox.com/games/88123962653564/The-School-RP-FR", github: "" },
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "French Donations",
    category: "Roblox Systems",
    description: "Système de sanction automatisée innovant pour la gestion communautaire et la sécurité du jeu.",
    tags: ["Lua", "Automation", "Security"],
    links: { demo: "#", github: "" },
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Portfolio Moderne",
    category: "Web Development",
    description: "Ce site portfolio interactif construit avec React, TypeScript et Framer Motion pour des animations fluides.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    links: { demo: "#", github: "https://github.com/ItsLuckt" },
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Récents</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-background/50 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col">
                <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-2xl text-white/20 uppercase tracking-widest text-center px-4">{project.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 pt-0">
                  {project.links.github && (
                    <Button 
                      size="sm" 
                      className="w-full" 
                      variant="outline"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" /> Code
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(project.links.demo, "_blank")}
                    disabled={project.links.demo === "#"}
                  >
                    {project.category.includes("Roblox") ? <Play className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />} 
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
