import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Play, Info } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { useRef } from "react";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // We use standard Framer Motion animations here instead of scroll-based ones
  // to avoid position calculation issues mentioned in the console
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full"
    >
      <Card className="h-full bg-secondary/30 border-white/5 overflow-hidden hover:border-primary/40 transition-all duration-500 group flex flex-col hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:-translate-y-2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
        <div className={`h-56 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center z-10`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <CardHeader className="space-y-1 z-10 relative bg-background/50 backdrop-blur-sm pt-6">
          <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-primary/70 font-medium tracking-wide uppercase text-[10px]">{project.category}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow pt-4 z-10 relative bg-background/50 backdrop-blur-sm">
          <p className="text-muted-foreground/80 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary/90 px-2.5 py-0.5 rounded-full text-[11px] font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-4 pt-4 border-t border-white/5 p-6 grid grid-cols-2 z-10 relative bg-background/50 backdrop-blur-sm mt-auto">
          <Link href={`/project/${project.slug}`} className="w-full">
            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 rounded-xl transition-all hover:scale-105">
              <Info className="w-4 h-4 mr-2" /> Détails
            </Button>
          </Link>
          
          <Button 
            className="w-full rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
            onClick={() => window.open(project.links.demo, "_blank")}
            disabled={project.links.demo === "#"}
          >
            {project.category.includes("Roblox") ? <Play className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />} 
            Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Projets Récents</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Une sélection de mes meilleures réalisations en développement Fullstack et Roblox.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
