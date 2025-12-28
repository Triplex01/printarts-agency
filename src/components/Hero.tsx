import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 grid-pattern">
      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <p className="text-minimal text-muted-foreground mb-6 reveal">
            AGENCE DE COMMUNICATION
          </p>
          
          <h1 className="text-display text-5xl md:text-7xl lg:text-[5.5rem] mb-8 reveal">
            Du rêve au déploiement, nous donnons vie aux idées des 
            <span className="text-primary"> conquérants</span> grâce à un design percutant.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 reveal-delayed">
            Depuis plus de 10 ans en Côte d'Ivoire, nous accompagnons les entreprises 
            dans leur communication interne et externe avec excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 reveal-delayed-2">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background font-medium rounded-full px-8 group"
            >
              Découvrir nos réalisations
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border text-foreground hover:bg-muted font-medium rounded-full px-8"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
      
      {/* Partners Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="py-6 overflow-hidden">
          <p className="text-minimal text-muted-foreground text-center mb-4">
            Ils nous font confiance
          </p>
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <span className="text-2xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap">CANAL+</span>
                <span className="text-2xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap">ORANGE</span>
                <span className="text-2xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap">PRIMATURE</span>
                <span className="text-2xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap">TV5 MONDE</span>
                <span className="text-2xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap">EDF</span>
                <span className="text-2xl font-heading font-bold text-muted-foreground/40 whitespace-nowrap">VINCI</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
