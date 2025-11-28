import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
          <p className="text-muted-foreground">Vous avez un projet en tête ? Discutons-en.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">luckt.rbx@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <FaDiscord className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Discord</h3>
                <p className="text-muted-foreground">luckt</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Localisation</h3>
                <p className="text-muted-foreground">Lille, France</p>
              </div>
            </div>

            <Card className="p-6 bg-secondary/30 border-white/5">
              <h4 className="font-bold mb-2">Disponibilité</h4>
              <p className="text-sm text-muted-foreground">
                Actuellement disponible pour des missions freelance et des collaborations sur des projets Roblox ou Web.
              </p>
            </Card>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-card/50 p-8 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom</label>
                <Input placeholder="Votre nom" className="bg-secondary/50 border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="votre@email.com" className="bg-secondary/50 border-white/10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Parlez-moi de votre projet..." className="bg-secondary/50 border-white/10 min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full">
              Envoyer <Send className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground flex flex-col gap-2 pb-8">
        <p>© 2025 Portfolio Développeur. Fait avec React & Passion.</p>
        <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
      </footer>
    </section>
  );
}
