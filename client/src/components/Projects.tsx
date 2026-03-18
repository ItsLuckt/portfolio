import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-8 py-10 border-b border-border/50 last:border-0"
    >
      {/* Visual / Thumbnail */}
      <div className="w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden bg-muted/50 border border-border relative flex-shrink-0">
        {project.images && project.images.length > 0 ? (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
            <FolderGit2 className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-md font-medium">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
          {project.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-sm font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md border border-border/50">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.links.demo !== "#" && (
            <Button 
              className="rounded-md"
              onClick={() => window.open(project.links.demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> 
              Visiter le projet
            </Button>
          )}
          {project.links.github && project.links.github !== "#" && (
            <Button 
              variant="outline" 
              className="rounded-md"
              onClick={() => window.open(project.links.github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" /> 
              Code source
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Réalisations</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Projets sélectionnés.</h3>
          <p className="text-lg text-muted-foreground">
            Aperçu de mes travaux récents, démontrant ma capacité à concevoir et livrer des solutions logicielles de bout en bout.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
