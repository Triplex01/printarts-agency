import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";

// Import service illustrations
import designGraphique from "@/assets/services/design-graphique.png";
import realisation3d from "@/assets/services/realisation-3d.png";
import applicationsMobiles from "@/assets/services/applications-mobiles.png";
import branding from "@/assets/services/branding.png";
import impression from "@/assets/services/impression.png";
import audiovisuel from "@/assets/services/audiovisuel.png";
import creationWeb from "@/assets/services/creation-web.png";
import evenementiel from "@/assets/services/evenementiel.png";

const Services = () => {
  const services = [
    {
      illustration: designGraphique,
      number: "01",
      title: "DESIGN GRAPHIQUE",
      description: "Création de visuels impactants : logos, flyers, affiches, brochures, packaging et identité visuelle complète.",
      features: ["Création de logo", "Charte graphique", "Supports print", "Packaging"],
      color: "from-primary/20 to-primary/5"
    },
    {
      illustration: realisation3d,
      number: "02", 
      title: "RÉALISATIONS 3D",
      description: "Modélisation et rendu 3D pour vos projets architecturaux, produits et animations visuelles immersives.",
      features: ["Modélisation 3D", "Rendu réaliste", "Animation 3D", "Visite virtuelle"],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      illustration: applicationsMobiles,
      number: "03",
      title: "APPLICATIONS MOBILES",
      description: "Développement d'applications iOS et Android sur mesure pour digitaliser votre activité.",
      features: ["iOS & Android", "UX/UI Design", "Maintenance", "Publication stores"],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      illustration: branding,
      number: "04",
      title: "BRANDING & ENSEIGNES",
      description: "Conception et réalisation d'enseignes lumineuses, habillage de véhicules et signalétique.",
      features: ["Enseignes lumineuses", "Habillage véhicule", "Signalétique", "Totems"],
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      illustration: impression,
      number: "05",
      title: "IMPRESSION",
      description: "Impression sur tous supports : bâches, roll-ups, kakemonos, textiles, objets publicitaires.",
      features: ["Grand format", "Textile", "Objets pub", "Finitions premium"],
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      illustration: audiovisuel,
      number: "06",
      title: "PRODUCTION AUDIOVISUELLE",
      description: "Réalisation de films institutionnels, spots publicitaires, motion design et captation événementielle.",
      features: ["Film corporate", "Spot TV/Web", "Motion design", "Captation live"],
      color: "from-pink-500/20 to-pink-500/5"
    },
    {
      illustration: creationWeb,
      number: "07",
      title: "CRÉATION WEB",
      description: "Sites web modernes et responsive, e-commerce, référencement SEO et stratégie digitale.",
      features: ["Site vitrine", "E-commerce", "SEO", "Hébergement"],
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      illustration: evenementiel,
      number: "08",
      title: "ÉVÉNEMENTIEL",
      description: "Organisation complète d'événements : conception, décoration, scénographie et coordination.",
      features: ["Conception", "Décoration", "Scénographie", "Coordination"],
      color: "from-orange-500/20 to-orange-500/5"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p 
              className="text-minimal text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              NOS SERVICES
            </motion.p>
            <motion.h1 
              className="text-display text-5xl md:text-7xl lg:text-8xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Solutions complètes de <span className="text-primary">communication</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Une agence globale et spécialisée intervenant dans le marketing, la publicité, 
              les médias et le digital avec un seul objectif : vous offrir des solutions efficaces.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`group relative bg-gradient-to-br ${service.color} rounded-3xl p-8 md:p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden`}
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col md:flex-row items-start gap-6">
                    {/* Illustration */}
                    <motion.div 
                      className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={service.illustration} 
                        alt={service.title}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl font-heading font-bold text-primary/30">
                          {service.number}
                        </span>
                        <h2 className="text-xl md:text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-full bg-background/80 text-foreground font-medium border border-border"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a 
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-medium group/link"
                        whileHover={{ x: 5 }}
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-display text-4xl md:text-6xl text-background mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Prêt à transformer votre <span className="text-primary">vision</span> ?
            </motion.h2>
            <motion.p 
              className="text-xl text-background/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
            </motion.p>
            <motion.a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
