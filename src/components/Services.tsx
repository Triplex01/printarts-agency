import { Palette, Box, Smartphone, Signpost, Printer, Video, Globe, PartyPopper } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      number: "01",
      title: "DESIGN GRAPHIQUE",
      description: "Création de visuels impactants : logos, flyers, affiches, brochures, packaging et identité visuelle complète"
    },
    {
      icon: Box,
      number: "02", 
      title: "RÉALISATIONS 3D",
      description: "Modélisation et rendu 3D pour vos projets architecturaux, produits et animations visuelles immersives"
    },
    {
      icon: Smartphone,
      number: "03",
      title: "APPLICATIONS MOBILES",
      description: "Développement d'applications iOS et Android sur mesure pour digitaliser votre activité"
    },
    {
      icon: Signpost,
      number: "04",
      title: "BRANDING & ENSEIGNES",
      description: "Conception et réalisation d'enseignes lumineuses, habillage de véhicules et signalétique"
    },
    {
      icon: Printer,
      number: "05",
      title: "IMPRESSION",
      description: "Impression sur tous supports : bâches, roll-ups, kakemonos, textiles, objets publicitaires"
    },
    {
      icon: Video,
      number: "06",
      title: "PRODUCTION AUDIOVISUELLE",
      description: "Réalisation de films institutionnels, spots publicitaires, motion design et captation événementielle"
    },
    {
      icon: Globe,
      number: "07",
      title: "CRÉATION WEB",
      description: "Sites web modernes et responsive, e-commerce, référencement SEO et stratégie digitale"
    },
    {
      icon: PartyPopper,
      number: "08",
      title: "ÉVÉNEMENTIEL",
      description: "Organisation complète d'événements : conception, décoration, scénographie et coordination"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-minimal text-primary mb-4">NOS EXPERTISES</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand mb-6">
              Des solutions complètes pour votre <span className="text-primary">communication</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une agence globale et spécialisée intervenant dans le marketing, la publicité, 
              les médias et le digital.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group service-card bg-card p-6 rounded-xl border border-border hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-minimal text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
