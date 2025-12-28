import heroImage from "@/assets/hero-printsarts.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        <p className="text-minimal text-primary font-semibold mb-4 reveal tracking-widest">
          AGENCE DE COMMUNICATION GLOBALE
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white text-brand mb-6 reveal">
          L'agence des
          <br />
          <span className="text-primary">conquérants</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-10 reveal-delayed leading-relaxed">
          Depuis plus de 10 ans, nous accompagnons les entreprises dans leur communication 
          interne et externe. Devenez incontournable. Devenez conquérant.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delayed">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 btn-glow"
          >
            Découvrir nos services
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
          >
            Voir nos réalisations
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/10 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
              <p className="text-minimal text-white/70">Années d'expérience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">70%</p>
              <p className="text-minimal text-white/70">Par recommandation</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-minimal text-white/70">Projets réalisés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
