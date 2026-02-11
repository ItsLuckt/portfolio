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
              <Card className="h-full bg-secondary/30 border-white/5 overflow-hidden hover:border-primary/40 transition-all duration-500 group flex flex-col hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:-translate-y-2">
                <div className={`h-56 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="font-bold text-3xl text-white/10 uppercase tracking-[0.2em] text-center px-6">
                        {project.category}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-primary/70 font-medium tracking-wide uppercase text-[10px]">{project.category}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow pt-0">
                  <p className="text-muted-foreground/80 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary/90 px-2.5 py-0.5 rounded-full text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-4 pt-4 border-t border-white/5 p-6 grid grid-cols-2">
                  <Link href={`/project/${project.slug}`} className="w-full">
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 rounded-xl">
                      <Info className="w-4 h-4 mr-2" /> Détails
                    </Button>
                  </Link>
                  
                  <Button 
                    className="w-full rounded-xl shadow-lg shadow-primary/10"
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
