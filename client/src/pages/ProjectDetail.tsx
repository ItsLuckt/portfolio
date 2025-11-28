import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:slug");
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!match || !params) return <NotFound />;

  const project = projects.find(p => p.slug === params.slug);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Background decoration */}
      <div className={`absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b ${project.color} opacity-10 -z-10 blur-3xl`} />

      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Retour aux projets
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="text-primary border-primary/30 px-3 py-1 text-sm">
              {project.category}
            </Badge>
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-secondary/20 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle2 className="mr-3 text-primary" />
                  Fonctionnalités Clés
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/20 rounded-2xl p-6 border border-white/5 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Liens du projet</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.open(project.links.demo, "_blank")}
                    disabled={project.links.demo === "#"}
                  >
                    {project.category.includes("Roblox") ? <Play className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                    Voir le projet
                  </Button>
                  
                  {project.links.github && (
                    <Button 
                      variant="outline" 
                      className="w-full border-white/10 hover:bg-white/5" 
                      size="lg"
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Voir le code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
