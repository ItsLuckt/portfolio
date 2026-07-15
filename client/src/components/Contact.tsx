import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.form.error_title', 'Erreur'),
        description: t('contact.form.error_desc', 'Veuillez remplir tous les champs obligatoires.'),
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: t('contact.form.success_title', 'Message envoyé !'),
        description: t('contact.form.success_desc', 'Je vous répondrai dans les plus brefs délais.'),
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary/5 border-t-4 border-foreground">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-foreground pb-8 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl font-bold tracking-widest text-primary uppercase mb-4">
              {"// " + t('contact.badge')}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t('contact.title')}</h3>
          </div>
          <p className="text-lg md:text-xl font-medium text-foreground max-w-sm">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="glass-card p-6 flex items-center gap-6 group hover:bg-primary transition-colors duration-300">
                <div className="p-4 border-4 border-foreground bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1 group-hover:text-primary-foreground/80">Email</h4>
                  <a href="mailto:luckt.rbx@gmail.com" className="text-2xl font-black text-foreground group-hover:text-primary-foreground">
                    luckt.rbx@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-6 flex items-center gap-6 group hover:bg-primary transition-colors duration-300">
                <div className="p-4 border-4 border-foreground bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <FaDiscord className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1 group-hover:text-primary-foreground/80">Discord</h4>
                  <p className="text-2xl font-black text-foreground group-hover:text-primary-foreground">luckt</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-6 group hover:bg-primary transition-colors duration-300">
                <div className="p-4 border-4 border-foreground bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-1 group-hover:text-primary-foreground/80">{t('contact.location')}</h4>
                  <p className="text-2xl font-black text-foreground group-hover:text-primary-foreground">{t('contact.city')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 glass-card flex items-center gap-6 border-l-8 border-l-green-500 bg-background">
              <span className="relative flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-none h-6 w-6 bg-green-500 border-2 border-foreground"></span>
              </span>
              <div>
                <span className="text-xl font-black uppercase text-foreground block">{t('contact.status')}</span>
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Prêt pour de nouveaux projets</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-foreground">{t('contact.form.name')}</label>
              <Input 
                placeholder={t('contact.form.name_placeholder')} 
                className="h-16 bg-secondary/50 border-4 border-foreground focus-visible:ring-0 focus-visible:border-primary rounded-none shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] focus-visible:shadow-[2px_2px_0px_0px_rgba(var(--color-foreground))] focus-visible:translate-x-[4px] focus-visible:translate-y-[4px] transition-all text-lg font-medium" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-foreground">{t('contact.form.email')}</label>
              <Input 
                placeholder={t('contact.form.email_placeholder')} 
                type="email" 
                className="h-16 bg-secondary/50 border-4 border-foreground focus-visible:ring-0 focus-visible:border-primary rounded-none shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] focus-visible:shadow-[2px_2px_0px_0px_rgba(var(--color-foreground))] focus-visible:translate-x-[4px] focus-visible:translate-y-[4px] transition-all text-lg font-medium" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-foreground">{t('contact.form.message')}</label>
              <Textarea 
                placeholder={t('contact.form.message_placeholder')} 
                className="min-h-[200px] bg-secondary/50 border-4 border-foreground focus-visible:ring-0 focus-visible:border-primary rounded-none shadow-[6px_6px_0px_0px_rgba(var(--color-foreground))] focus-visible:shadow-[2px_2px_0px_0px_rgba(var(--color-foreground))] focus-visible:translate-x-[4px] focus-visible:translate-y-[4px] transition-all text-lg font-medium resize-none p-4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <Button type="submit" size="lg" className="w-full h-16 text-xl font-black uppercase tracking-widest rounded-none border-4 border-foreground bg-primary text-primary-foreground shadow-[8px_8px_0px_0px_rgba(var(--color-foreground))] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(var(--color-foreground))] transition-all mt-8" disabled={isSubmitting}>
              {isSubmitting ? "..." : <>{t('contact.form.submit')} <Send className="w-6 h-6 ml-3" /></>}
            </Button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t-4 border-foreground text-center text-sm text-foreground font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center px-6 container mx-auto gap-4 pb-8">
        <p>© {new Date().getFullYear()} Luckt. {t('contact.footer')}</p>
        <Link href="/mentions-legales" className="hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary">{t('contact.legal')}</Link>
      </footer>
    </section>
  );
}
