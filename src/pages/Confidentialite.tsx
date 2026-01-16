import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Confidentialite = () => {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-display text-3xl md:text-4xl lg:text-5xl mb-4">
                Politique de <span className="text-primary">Confidentialité</span>
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
                  Print's Arts Multimedia s'engage à protéger la vie privée de ses utilisateurs. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons 
                  et protégeons vos informations personnelles lorsque vous utilisez notre site web.
                </p>
              </section>

              {/* Collecte des données */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Collecte des Données</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Nous collectons les informations que vous nous fournissez directement :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Formulaire de contact :</strong> nom, email, téléphone, entreprise, description du projet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Cookies :</strong> données de navigation et préférences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Analytics :</strong> données anonymisées sur l'utilisation du site</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Utilisation des données */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Utilisation des Données</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Vos données sont utilisées pour :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Répondre à vos demandes de devis et questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Améliorer nos services et votre expérience utilisateur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Vous envoyer des informations sur nos services (avec votre consentement)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Respecter nos obligations légales</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Protection des données */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Protection des Données</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Chiffrement SSL/TLS pour toutes les communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Accès restreint aux données personnelles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Stockage sécurisé sur des serveurs protégés</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Vos droits */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-display text-xl md:text-2xl">Vos Droits</h2>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Conformément à la réglementation, vous disposez des droits suivants :
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Droit de rectification :</strong> corriger vos données inexactes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Droit à l'effacement :</strong> demander la suppression de vos données</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</span>
                    </li>
                  </ul>
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
                    Pour exercer vos droits ou pour toute question concernant cette politique, 
                    contactez-nous à :
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
                  to="/conditions" 
                  className="text-primary hover:underline text-sm"
                >
                  Voir les Conditions Générales →
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

export default Confidentialite;
