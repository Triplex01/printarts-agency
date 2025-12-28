import { Palette, Box, Smartphone, Signpost, Printer, Video, Globe, PartyPopper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import designGraphique from "@/assets/services/design-graphique.png";
import realisation3d from "@/assets/services/realisation-3d.png";
import applicationsMobiles from "@/assets/services/applications-mobiles.png";
import branding from "@/assets/services/branding.png";
import impression from "@/assets/services/impression.png";
import audiovisuel from "@/assets/services/audiovisuel.png";
import creationWeb from "@/assets/services/creation-web.png";
import evenementiel from "@/assets/services/evenementiel.png";

const Services = () => {
  const mainServices = [
    {
      icon: Palette,
      image: designGraphique,
      title: "Design Graphique",
      description: "Logos, identité visuelle, packaging, supports print. Nous créons l'ADN visuel de votre marque."
    },
    {
      icon: Video,
      image: audiovisuel,
      title: "Production Audiovisuelle",
      description: "Films institutionnels, spots publicitaires, FOOH animations virales qui captent l'attention."
    },
    {
      icon: Globe,
      image: creationWeb,
      title: "Création Web & Digital",
      description: "Sites vitrines, e-commerce, applications mobiles, stratégie digitale complète."
    }
  ];

  const allServices = [
    { icon: Palette, name: "Design graphique", image: designGraphique },
    { icon: Box, name: "Réalisations 3D", image: realisation3d },
    { icon: Smartphone, name: "Applications mobiles", image: applicationsMobiles },
    { icon: Signpost, name: "Branding & enseignes", image: branding },
    { icon: Printer, name: "Impression", image: impression },
    { icon: Video, name: "Production audiovisuelle", image: audiovisuel },
    { icon: Globe, name: "Création web", image: creationWeb },
    { icon: PartyPopper, name: "Événementiel", image: evenementiel }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-minimal text-primary mb-4">NOS SERVICES</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-4xl">
              Le design est l'API entre vision et réalité. Considérez-nous comme 
              <span className="text-primary"> votre passerelle</span>.
            </h2>
          </motion.div>
          
          {/* Main Services Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative p-8 rounded-2xl border border-border hover:border-primary/30 bg-card hover:bg-muted/50 transition-all duration-500 hover-lift overflow-hidden"
                variants={itemVariants}
              >
                {/* Service Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* All Services List */}
          <motion.div 
            className="border-t border-border pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-minimal text-primary mb-8">TOUTES NOS EXPERTISES</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="group relative flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {service.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-medium rounded-full px-8 group"
            >
              <a href="/services">
                Découvrir tous nos services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;