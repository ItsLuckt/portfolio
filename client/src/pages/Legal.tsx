import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Legal() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('legal.back')}
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{t('legal.title')}</h1>

          <div className="space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">{t('legal.sections.0.title')}</h2>
              <p>
                {t('legal.sections.0.content')}
              </p>
              <p>
                <strong>Responsable de la publication :</strong> Luckt<br />
                <strong>Contact :</strong> luckt.rbx@gmail.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">{t('legal.sections.1.title')}</h2>
              <p>
                {t('legal.sections.1.content')}<br />
                Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">{t('legal.sections.2.title')}</h2>
              <p>
                {t('legal.sections.2.content')}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">{t('legal.sections.3.title')}</h2>
              <p>
                {t('legal.sections.3.content')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
