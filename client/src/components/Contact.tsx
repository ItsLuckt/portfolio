import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
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
    
    // Simulate sending
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
    <section className="py-12 bg-background/40 backdrop-blur-md relative border-t border-white/5 rounded-3xl">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mb-20 text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3 inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full"><MessageSquare className="w-4 h-4" /> {t('contact.badge')}</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('contact.title')}</h3>
          <p className="text-xl text-muted-foreground font-light">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="space-y-8 glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:luckt.rbx@gmail.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                    luckt.rbx@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                  <FaDiscord className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Discord</h4>
                  <p className="text-lg font-bold text-foreground">luckt</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-fuchsia-500/10 rounded-2xl text-fuchsia-500 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('contact.location')}</h4>
                  <p className="text-lg font-bold text-foreground">{t('contact.city')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl glass-card flex items-center gap-4 bg-gradient-to-r from-primary/5 to-transparent">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-sm font-bold text-foreground block">{t('contact.status')}</span>
                <span className="text-xs text-muted-foreground">Prêt pour de nouveaux projets</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-6 glass-card p-8 md:p-10 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">{t('contact.form.name')}</label>
                <Input 
                  placeholder={t('contact.form.name_placeholder')} 
                  className="h-14 bg-background/50 border-white/10 focus-visible:ring-primary/50 rounded-xl" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">{t('contact.form.email')}</label>
                <Input 
                  placeholder={t('contact.form.email_placeholder')} 
                  type="email" 
                  className="h-14 bg-background/50 border-white/10 focus-visible:ring-primary/50 rounded-xl" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-1">{t('contact.form.subject')}</label>
              <Input 
                placeholder={t('contact.form.subject_placeholder')} 
                className="h-14 bg-background/50 border-white/10 focus-visible:ring-primary/50 rounded-xl" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-1">{t('contact.form.message')}</label>
              <Textarea 
                placeholder={t('contact.form.message_placeholder')} 
                className="min-h-[180px] bg-background/50 border-white/10 focus-visible:ring-primary/50 rounded-xl resize-none p-4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <Button type="submit" size="lg" className="w-full h-14 text-base font-bold mt-4 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg hover:-translate-y-1 transition-all duration-300" disabled={isSubmitting}>
              {isSubmitting ? "..." : <>{t('contact.form.submit')} <Send className="w-5 h-5 ml-2" /></>}
            </Button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center px-6 container mx-auto gap-4 pb-8">
        <p className="font-medium">© {new Date().getFullYear()} Luckt. {t('contact.footer')}</p>
        <Link href="/mentions-legales" className="hover:text-primary transition-colors">{t('contact.legal')}</Link>
      </footer>
    </section>
  );
}