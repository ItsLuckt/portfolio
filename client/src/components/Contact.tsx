import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Me Contacter</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Prêt à démarrer un nouveau projet ? N'hésitez pas à m'envoyer un message.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl border-white/5 space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-primary w-6 h-6" />
                Informations
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-5 group/item">
                  <div className="p-4 bg-secondary/50 rounded-2xl text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:luckt.rbx@gmail.com" className="font-medium hover:text-primary transition-colors">luckt.rbx@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group/item">
                  <div className="p-4 bg-secondary/50 rounded-2xl text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <FaDiscord className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Discord</p>
                    <p className="font-medium">luckt</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item">
                  <div className="p-4 bg-secondary/50 rounded-2xl text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Localisation</p>
                    <p className="font-medium">Lille, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 text-center">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-primary">Disponible pour de nouveaux projets</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6 glass-card p-8 md:p-10 rounded-3xl border-white/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground/80 pl-1">Nom complet</label>
                <Input placeholder="John Doe" className="bg-secondary/30 border-white/10 h-14 rounded-2xl px-5 focus-visible:ring-primary/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground/80 pl-1">Adresse email</label>
                <Input placeholder="john@example.com" type="email" className="bg-secondary/30 border-white/10 h-14 rounded-2xl px-5 focus-visible:ring-primary/50 transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground/80 pl-1">Sujet</label>
              <Input placeholder="Comment puis-je vous aider ?" className="bg-secondary/30 border-white/10 h-14 rounded-2xl px-5 focus-visible:ring-primary/50 transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground/80 pl-1">Message</label>
              <Textarea placeholder="Parlez-moi de votre projet en détail..." className="bg-secondary/30 border-white/10 min-h-[180px] rounded-2xl p-5 focus-visible:ring-primary/50 transition-all resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full h-14 rounded-2xl text-lg font-medium glow-primary hover:scale-[1.02] transition-transform">
              Envoyer le message <Send className="w-5 h-5 ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground flex flex-col gap-3 pb-8">
        <p className="font-medium tracking-wide">© 2025 Luckt. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="hover:text-primary transition-colors inline-block w-fit mx-auto">Mentions Légales</Link>
      </footer>
    </section>
  );
}
