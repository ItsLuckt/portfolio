import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Contact</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Démarrons un projet ensemble.</h3>
          <p className="text-lg text-muted-foreground">
            Que ce soit pour une opportunité de collaboration, une question technique ou simplement pour échanger, n'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:luckt.rbx@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    luckt.rbx@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                  <FaDiscord className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Discord</h4>
                  <p className="text-lg font-medium text-foreground">luckt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Localisation</h4>
                  <p className="text-lg font-medium text-foreground">Lille, France</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-primary">Disponible pour de nouveaux défis</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-5 bg-background p-8 rounded-2xl border border-border shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Nom complet</label>
                <Input placeholder="Votre nom" className="h-12 bg-muted/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <Input placeholder="votre@email.com" type="email" className="h-12 bg-muted/50 border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Sujet</label>
              <Input placeholder="Objet de votre message" className="h-12 bg-muted/50 border-border" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Message</label>
              <Textarea placeholder="Décrivez votre projet ou votre besoin..." className="min-h-[150px] bg-muted/50 border-border resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full h-12 text-base font-medium mt-2">
              Envoyer le message <Send className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center px-6 container mx-auto gap-4 pb-8">
        <p className="font-medium">© {new Date().getFullYear()} Luckt. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
      </footer>
    </section>
  );
}
