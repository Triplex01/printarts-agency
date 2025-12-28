import project1 from "@/assets/portfolio/project-01.jpg";
import project2 from "@/assets/portfolio/project-02.jpg";
import project3 from "@/assets/portfolio/project-03.jpg";
import project4 from "@/assets/portfolio/project-04.jpg";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "Campagne Corporate PETROCI",
      description: "Identité visuelle complète et campagne de communication pour le leader pétrolier national.",
      category: "Branding"
    },
    {
      image: project2,
      title: "Production Audiovisuelle BAD",
      description: "Film institutionnel et spots publicitaires pour la Banque Africaine de Développement.",
      category: "Audiovisuel"
    },
    {
      image: project3,
      title: "Gala Children of Africa",
      description: "Conception et scénographie complète pour le gala annuel de la fondation.",
      category: "Événementiel"
    },
    {
      image: project4,
      title: "Site Web Noom Hotels",
      description: "Création digitale et stratégie web pour la chaîne hôtelière panafricaine.",
      category: "Digital"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <section id="work" className="py-32 bg-muted/30 overflow-hidden">
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
            <p className="text-minimal text-primary mb-4">NOS RÉALISATIONS</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-4xl">
              Du rêve au déploiement, nous donnons vie aux idées des innovateurs grâce à un 
              <span className="text-primary"> design percutant</span>.
            </h2>
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-primary/90 text-primary-foreground px-4 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    {project.category}
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-background">
                      {project.title}
                    </h3>
                    <p className="text-sm text-background/80 mt-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 group"
            >
              <a href="/portfolio">
                Voir toutes nos réalisations
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;