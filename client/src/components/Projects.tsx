import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const ProjectCard = ({ project, index, t }: { project: any, index: number, t: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-8 py-12 border-b border-white/5 last:border-0"
    >
      {/* Visual / Thumbnail */}
      <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl overflow-hidden bg-background/50 border border-white/10 relative flex-shrink-0 shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-fuchsia-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
        {project.images && project.images.length > 0 ? (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
            <FolderGit2 className="w-20 h-20 text-primary/30" />
          </div>
        )}
        <div className="absolute top-4 left-4 z-20">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-md font-medium border-none text-foreground">
            {t(`projects_data.${project.slug}.category`, { defaultValue: project.category })}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-7/12 flex flex-col justify-center">
        <Link href={`/project/${project.slug}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
            {t(`projects_data.${project.slug}.title`, { defaultValue: project.title })}
            <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary duration-300" />
          </h3>
        </Link>
        
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl text-lg font-light">
          {t(`projects_data.${project.slug}.description`, { defaultValue: project.description })}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-sm font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.links.demo !== "#" && (
            <Button 
              className="rounded-xl h-12 px-6 shadow-md hover:-translate-y-0.5 transition-transform"
              onClick={() => window.open(project.links.demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> 
              {t('projects.btn_visit')}
            </Button>
          )}
          {project.links.github && project.links.github !== "#" && (
            <Button 
              variant="outline" 
              className="rounded-xl h-12 px-6 bg-transparent hover:bg-secondary border-border/50 hover:-translate-y-0.5 transition-all"
              onClick={() => window.open(project.links.github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" /> 
              {t('projects.btn_code')}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 bg-transparent relative">
      {/* Decorative right blurry spot */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">{t('projects.badge')}</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('projects.title')}</h3>
          <p className="text-xl text-muted-foreground font-light">
            {t('projects.desc')}
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
