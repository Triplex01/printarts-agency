import { Palette, Box, Smartphone, Signpost, Printer, Video, Globe, PartyPopper } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Le design est l'API entre la vision et la réalité. Logos, identité visuelle, packaging."
    },
    {
      icon: Video,
      title: "Animation",
      description: "Motion design, films institutionnels, spots publicitaires et FOOH animations virales."
    },
    {
      icon: Globe,
      title: "Technologie",
      description: "Sites web, applications mobiles, solutions digitales sur mesure."
    }
  ];

  const allServices = [
    { icon: Palette, name: "Design graphique" },
    { icon: Box, name: "Réalisations 3D" },
    { icon: Smartphone, name: "Applications mobiles" },
    { icon: Signpost, name: "Branding & enseignes" },
    { icon: Printer, name: "Impression" },
    { icon: Video, name: "Production audiovisuelle" },
    { icon: Globe, name: "Création web" },
    { icon: PartyPopper, name: "Événementiel" }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <p className="text-minimal text-muted-foreground mb-4">NOS SERVICES</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-4xl">
              Le design est l'API entre vision et réalité. Considérez-nous comme 
              <span className="text-primary"> votre passerelle</span>.
            </h2>
          </div>
          
          {/* Main Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all duration-500 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* All Services List */}
          <div className="border-t border-border pt-12">
            <p className="text-minimal text-muted-foreground mb-8">TOUTES NOS EXPERTISES</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-pointer">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
