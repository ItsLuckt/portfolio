import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Info } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { projects } from "@/data/projects";

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
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-background/50 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 group flex flex-col">
                <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-bold text-2xl text-white/20 uppercase tracking-widest text-center px-4">
                        {project.category}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-secondary/50 text-xs">+{project.tags.length - 3}</Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="gap-3 pt-0 grid grid-cols-2">
                  <Link href={`/project/${project.slug}`} className="w-full">
                    <Button variant="secondary" className="w-full bg-secondary/50 hover:bg-secondary">
                      <Info className="w-4 h-4 mr-2" /> Détails
                    </Button>
                  </Link>
                  
                  <Button 
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
