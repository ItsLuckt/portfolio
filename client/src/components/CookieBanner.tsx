import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold mb-2">{t('gdpr.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('gdpr.desc')} <Link href="/mentions-legales" className="text-primary hover:underline">{t('gdpr.link')}</Link>
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button variant="outline" onClick={declineCookies} className="flex-1 md:flex-none">
                {t('gdpr.decline')}
              </Button>
              <Button onClick={acceptCookies} className="flex-1 md:flex-none bg-primary hover:bg-primary/90">
                {t('gdpr.accept')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}