import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  "PETROCI", "CÔTE D'IVOIRE EXPORT", "BAD", "SIDAAL", "TEYLIOM PROPERTIES",
  "URBANEA", "BAAB", "NOOM HOTELS", "LA ROUTE AFRICAINE", "JETOUR",
  "MG MOTORS", "CHANGAN", "NOURRIVOIRE", "GBAT", "DAVCOM",
  "GROUPE ATLANTIQUE", "MARAZ", "FAFCI", "MASA", "CHILDREN OF AFRICA"
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 grid-pattern overflow-hidden">
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-32 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.p 
            className="text-minimal text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AGENCE DE COMMUNICATION • ABIDJAN
          </motion.p>
          
          <motion.h1 
            className="text-display text-5xl md:text-7xl lg:text-[5.5rem] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Du rêve au déploiement, nous donnons vie aux idées des 
            <span className="text-primary"> conquérants</span> grâce à un design percutant.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Depuis plus de 10 ans en Côte d'Ivoire, nous accompagnons les entreprises 
            dans leur communication interne et externe avec excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 group"
            >
              <a href="/portfolio">
                Découvrir nos réalisations
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-medium rounded-full px-8 group"
            >
              <a href="/contact">
                <Phone className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Demander un Devis
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Partners Marquee - La Print's Zone */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="py-6 overflow-hidden">
          <motion.p 
            className="text-minimal text-primary text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            LA PRINT'S ZONE • ILS NOUS FONT CONFIANCE
          </motion.p>
          <div className="relative">
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 px-6">
                  {clients.map((client, index) => (
                    <span 
                      key={`${i}-${index}`}
                      className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/50 hover:text-primary whitespace-nowrap transition-colors duration-300 cursor-default"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;