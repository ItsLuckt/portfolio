import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      className="glass-card group flex flex-col lg:flex-row mb-12 p-0 overflow-hidden"
    >
      {/* Visual */}
      <div className="w-full lg:w-1/2 relative flex-shrink-0 border-b-4 lg:border-b-0 lg:border-r-4 border-foreground overflow-hidden bg-secondary">
        {project.images && project.images.length > 0 ? (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <FolderGit2 className="w-32 h-32 text-foreground/20" />
          </div>
        )}
        <div className="absolute top-0 left-0 bg-primary text-primary-foreground border-b-4 border-r-4 border-foreground px-6 py-3 font-bold uppercase tracking-widest z-20">
          {t(`projects_data.${project.slug}.category`, { defaultValue: project.category })}
        </div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10"></div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-background relative z-20">
        <Link href={`/project/${project.slug}`}>
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter group-hover:text-primary transition-colors cursor-pointer">
            {t(`projects_data.${project.slug}.title`, { defaultValue: project.title })}
          </h3>
        </Link>
        
        <p className="text-xl text-foreground font-medium leading-relaxed mb-8 border-l-4 border-primary pl-6">
          {t(`projects_data.${project.slug}.description`, { defaultValue: project.description })}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-sm font-bold uppercase tracking-wider text-foreground border-2 border-foreground px-4 py-2 bg-secondary shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))]">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mt-auto">
          {project.links.demo !== "#" && (
            <Button 
              size="lg"
              className="h-14 px-8 text-base font-bold uppercase rounded-none border-2 border-foreground bg-primary text-primary-foreground shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))] transition-all"
              onClick={() => window.open(project.links.demo, "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-3" /> 
              {t('projects.btn_visit')}
            </Button>
          )}
          {project.links.github && project.links.github !== "#" && (
            <Button 
              variant="outline" 
              size="lg"
              className="h-14 px-8 text-base font-bold uppercase rounded-none border-2 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))] transition-all"
              onClick={() => window.open(project.links.github, "_blank")}
            >
              <Github className="w-5 h-5 mr-3" /> 
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
    <section id="projects" className="py-24 bg-background border-b-4 border-foreground">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-foreground pb-8 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl font-bold tracking-widest text-primary uppercase mb-4">
              {"// " + t('projects.badge')}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t('projects.title')}</h3>
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground max-w-sm">
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
