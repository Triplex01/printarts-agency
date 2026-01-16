import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, Handshake, Gavel, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Conditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-display text-3xl md:text-4xl lg:text-5xl mb-4">
                Conditions <span className="text-primary">Générales</span>
              </h1>
              <p className="text-muted-foreground">
                Dernière mise à jour : Janvier 2025
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Introduction */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Les présentes conditions générales régissent l'utilisation du site web 
                  de Print's Arts Multimedia et les services proposés. En utilisant notre site, 
                  vous acceptez ces conditions dans leur intégralité.
                </p>
              </section>

              {/* Mentions légales */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Mentions Légales</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong className="text-foreground">Raison sociale :</strong> Print's Arts Multimedia</p>
                    <p><strong className="text-foreground">Adresse :</strong> Cocody Riviera 3, Abidjan, Côte d'Ivoire</p>
                    <p><strong className="text-foreground">Téléphone :</strong> +225 07 09 77 96 79</p>
                    <p><strong className="text-foreground">Email :</strong> email@printsartsmultimedia.com</p>
                    <p><strong className="text-foreground">Site web :</strong> printsartsmultimedia.com</p>
                  </div>
                </div>
              </section>

              {/* Services */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Nos Services</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Print's Arts Multimedia propose les services suivants :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Design graphique et identité visuelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Branding et stratégie de marque</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Création de sites web et applications mobiles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Production audiovisuelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Impression et supports marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Organisation d'événements</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Propriété Intellectuelle</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Tous les contenus présents sur ce site (textes, images, logos, vidéos, 
                    créations graphiques) sont la propriété exclusive de Print's Arts Multimedia 
                    ou de ses clients avec leur autorisation.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Toute reproduction est interdite sans autorisation écrite préalable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Les marques et logos sont protégés par le droit de propriété intellectuelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Les créations réalisées pour nos clients restent confidentielles</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Responsabilité */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Gavel className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Limitation de Responsabilité</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Print's Arts Multimedia s'efforce de fournir des informations exactes et à jour. 
                    Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence 
                    des informations présentes sur ce site.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Nous ne sommes pas responsables des dommages résultant de l'utilisation du site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Les liens vers des sites tiers sont fournis à titre informatif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Nous nous réservons le droit de modifier le contenu du site à tout moment</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Droit applicable */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Scale className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Droit Applicable</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Les présentes conditions générales sont régies par le droit ivoirien. 
                    Tout litige relatif à l'utilisation du site sera soumis à la compétence 
                    exclusive des tribunaux d'Abidjan, Côte d'Ivoire.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Contact</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pour toute question concernant ces conditions générales, contactez-nous :
                  </p>
                  <a 
                    href="mailto:email@printsartsmultimedia.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    email@printsartsmultimedia.com
                  </a>
                </div>
              </section>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                <Link 
                  to="/confidentialite" 
                  className="text-primary hover:underline text-sm"
                >
                  Voir la Politique de Confidentialité →
                </Link>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Retour à l'accueil
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conditions;
