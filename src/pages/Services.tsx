import Navigation from "@/components/Navigation";
import { Palette, Box, Smartphone, Signpost, Printer, Video, Globe, PartyPopper } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      number: "01",
      title: "DESIGN GRAPHIQUE",
      description: "Création de visuels impactants : logos, flyers, affiches, brochures, packaging et identité visuelle complète. Nous donnons vie à vos idées avec créativité et professionnalisme.",
      features: ["Création de logo", "Charte graphique", "Supports print", "Packaging"]
    },
    {
      icon: Box,
      number: "02", 
      title: "RÉALISATIONS 3D",
      description: "Modélisation et rendu 3D pour vos projets architecturaux, produits et animations visuelles immersives. Visualisez vos concepts avant leur réalisation.",
      features: ["Modélisation 3D", "Rendu réaliste", "Animation 3D", "Visite virtuelle"]
    },
    {
      icon: Smartphone,
      number: "03",
      title: "APPLICATIONS MOBILES",
      description: "Développement d'applications iOS et Android sur mesure pour digitaliser votre activité et offrir une expérience mobile exceptionnelle à vos clients.",
      features: ["iOS & Android", "UX/UI Design", "Maintenance", "Publication stores"]
    },
    {
      icon: Signpost,
      number: "04",
      title: "BRANDING & ENSEIGNES",
      description: "Conception et réalisation d'enseignes lumineuses, habillage de véhicules et signalétique pour une visibilité maximale de votre marque.",
      features: ["Enseignes lumineuses", "Habillage véhicule", "Signalétique", "Totems"]
    },
    {
      icon: Printer,
      number: "05",
      title: "IMPRESSION",
      description: "Impression sur tous supports : bâches, roll-ups, kakemonos, textiles, objets publicitaires. Qualité professionnelle garantie.",
      features: ["Grand format", "Textile", "Objets pub", "Finitions premium"]
    },
    {
      icon: Video,
      number: "06",
      title: "PRODUCTION AUDIOVISUELLE",
      description: "Réalisation de films institutionnels, spots publicitaires, motion design et captation événementielle pour raconter votre histoire.",
      features: ["Film corporate", "Spot TV/Web", "Motion design", "Captation live"]
    },
    {
      icon: Globe,
      number: "07",
      title: "CRÉATION WEB",
      description: "Sites web modernes et responsive, e-commerce, référencement SEO et stratégie digitale pour une présence en ligne performante.",
      features: ["Site vitrine", "E-commerce", "SEO", "Hébergement"]
    },
    {
      icon: PartyPopper,
      number: "08",
      title: "ÉVÉNEMENTIEL",
      description: "Organisation complète d'événements : conception, décoration, scénographie et coordination pour des moments mémorables.",
      features: ["Conception", "Décoration", "Scénographie", "Coordination"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-minimal text-primary mb-4">NOS SERVICES</p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand mb-6">
                Solutions complètes de <span className="text-primary">communication</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une agence globale et spécialisée intervenant dans le marketing, la publicité, 
                les médias et le digital avec un seul objectif : vous offrir des solutions efficaces.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-minimal text-muted-foreground">{service.number}</span>
                        <h2 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
