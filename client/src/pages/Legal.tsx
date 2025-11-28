import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Mentions Légales</h1>

          <div className="space-y-8 text-muted-foreground">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
              <p>
                Ce site est un portfolio personnel édité par un particulier à des fins non commerciales.
              </p>
              <p>
                <strong>Responsable de la publication :</strong> [Votre Nom]<br />
                <strong>Contact :</strong> contact@exemple.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Hébergement</h2>
              <p>
                Ce site est hébergé par la société <strong>Vercel Inc.</strong><br />
                Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Protection des données personnelles</h2>
              <p>
                Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur. Les informations recueillies via le formulaire de contact (Nom, Email) ne sont utilisées que pour répondre à votre demande et ne sont jamais cédées à des tiers.
              </p>
              <p>
                Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
