import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

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
        transition={{
          duration: 8,
          repeat: Infinity
        }} 
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl" 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4]
        }} 
        transition={{
          duration: 6,
          repeat: Infinity
        }} 
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-display leading-[0.95] mb-8">
            Du rêve au déploiement, nous donnons vie aux idées des{" "}
            <span className="text-primary">conquérants</span> grâce à un design percutant.
          </h1>
          
          <motion.p 
            className="text-body text-muted-foreground max-w-xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Agence de communication créative basée en Côte d'Ivoire, nous transformons vos ambitions en expériences visuelles mémorables.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button size="lg" className="group" asChild>
              <a href="#contact">
                Demander un Devis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="tel:+22527222222">
                <Phone className="mr-2 h-4 w-4" />
                Nous Appeler
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;