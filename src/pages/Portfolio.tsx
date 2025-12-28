import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import ClientLogos from "@/components/ClientLogos";
import { ArrowUpRight, X } from "lucide-react";

// Import all portfolio images
import project01 from "@/assets/portfolio/project-01.jpg";
import project02 from "@/assets/portfolio/project-02.jpg";
import project03 from "@/assets/portfolio/project-03.jpg";
import project04 from "@/assets/portfolio/project-04.jpg";
import project05 from "@/assets/portfolio/project-05.jpg";
import project06 from "@/assets/portfolio/project-06.jpg";
import project07 from "@/assets/portfolio/project-07.jpg";
import project08 from "@/assets/portfolio/project-08.jpg";
import project09 from "@/assets/portfolio/project-09.jpg";
import project10 from "@/assets/portfolio/project-10.jpg";
import project11 from "@/assets/portfolio/project-11.jpg";
import project12 from "@/assets/portfolio/project-12.jpg";
import project13 from "@/assets/portfolio/project-13.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("TOUS");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    { image: project01, title: "Chemises Corporate", category: "PRINT", client: "MES" },
    { image: project02, title: "Magazine Institutionnel", category: "PRINT", client: "Magazine Up" },
    { image: project03, title: "Affiche Événementielle", category: "DESIGN", client: "Client Corporate" },
    { image: project04, title: "Poster Campagne", category: "DESIGN", client: "Marque Nationale" },
    { image: project05, title: "Affiche Promotionnelle", category: "DESIGN", client: "Entreprise" },
    { image: project06, title: "Chemise à Rabat", category: "PRINT", client: "Corporate" },
    { image: project07, title: "CV Créatif", category: "DESIGN", client: "Personnel" },
    { image: project08, title: "Affiche Gala", category: "ÉVÉNEMENT", client: "Gala Annuel" },
    { image: project09, title: "Set de Table", category: "PRINT", client: "MES" },
    { image: project10, title: "Identité Visuelle", category: "BRANDING", client: "Entreprise" },
    { image: project11, title: "Flyer ACIEX", category: "PRINT", client: "ACIEX" },
    { image: project12, title: "Rapport Annuel", category: "PRINT", client: "MES 2020" },
    { image: project13, title: "Plaquette Corporate", category: "PRINT", client: "MES" },
  ];

  const categories = ["TOUS", "PRINT", "DESIGN", "BRANDING", "ÉVÉNEMENT"];

  const filteredProjects = activeCategory === "TOUS" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.p 
              className="text-minimal text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              NOTRE PORTFOLIO
            </motion.p>
            <motion.h1 
              className="text-display text-5xl md:text-7xl lg:text-8xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Nos <span className="text-primary">réalisations</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Découvrez une sélection de nos projets les plus marquants. 
              Chaque création reflète notre passion pour l'excellence et l'innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-wrap gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-all duration-300 relative group px-4 py-2 rounded-full ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Masonry Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group cursor-pointer relative overflow-hidden rounded-xl ${
                      index % 5 === 0 ? "row-span-2" : ""
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Hover Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-xs text-primary font-medium">{project.category}</span>
                        <h3 className="text-lg font-heading font-bold text-background">
                          {project.title}
                        </h3>
                        <p className="text-sm text-background/70">{project.client}</p>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6">
                <span className="text-minimal text-primary">{selectedProject.category}</span>
                <h3 className="text-2xl font-heading font-bold mt-1">{selectedProject.title}</h3>
                <p className="text-muted-foreground">Client: {selectedProject.client}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-32 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-display text-4xl md:text-6xl text-background mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Prêt à créer votre <span className="text-primary">prochain projet</span> ?
            </motion.h2>
            <motion.a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Demander un devis gratuit
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
