import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Layers } from "lucide-react";
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
      className="bento-card group p-0 p-0 flex flex-col md:flex-row gap-0 overflow-hidden mb-8 max-w-6xl mx-auto"
    >
      {/* Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative z-10">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md font-bold tracking-wide uppercase w-fit mb-6">
          {t(`projects_data.${project.slug}.category`, { defaultValue: project.category })}
        </Badge>

        <Link href={`/project/${project.slug}`}>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight group-hover:text-primary transition-colors flex items-center gap-3 cursor-pointer">
            {t(`projects_data.${project.slug}.title`, { defaultValue: project.title })}
            <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary duration-300" />
          </h3>
        </Link>
        
        <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">
          {t(`projects_data.${project.slug}.description`, { defaultValue: project.description })}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-bold font-mono text-secondary-foreground bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.links.demo !== "#" && (
            <Button 
              className="rounded-full h-12 px-8 shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.open(project.links.demo, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> 
              {t('projects.btn_visit')}
            </Button>
          )}
          {project.links.github && project.links.github !== "#" && (
            <Button 
              variant="outline" 
              className="rounded-full h-12 px-8 bg-transparent border-white/20 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.open(project.links.github, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" /> 
              {t('projects.btn_code')}
            </Button>
          )}
        </div>
      </div>

      {/* Visual / Thumbnail */}
      <div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-background/50 relative flex-shrink-0 order-1 md:order-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent md:from-secondary md:via-secondary/50 md:to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10 pointer-events-none md:hidden"></div>
        
        {project.images && project.images.length > 0 ? (
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
            <FolderGit2 className="w-24 h-24 text-primary/20" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 bg-transparent relative">
      {/* Decorative right blurry spot */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-20 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full">
            <Layers className="w-4 h-4" /> {t('projects.badge')}
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{t('projects.title')}</h3>
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
