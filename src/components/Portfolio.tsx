import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "Campagne Corporate",
      description: "Nous avons créé une identité visuelle complète et une campagne de communication impactante pour une entreprise leader en Côte d'Ivoire.",
      size: "large"
    },
    {
      image: project2,
      title: "Production Audiovisuelle",
      description: "Film institutionnel et spots publicitaires pour une marque nationale avec des animations FOOH virales.",
      size: "medium"
    },
    {
      image: project3,
      title: "Événement d'Entreprise",
      description: "Conception et organisation d'un gala annuel avec scénographie complète et branding événementiel.",
      size: "medium"
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <p className="text-minimal text-muted-foreground mb-4">NOS RÉALISATIONS</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-4xl">
              Du rêve au déploiement, nous donnons vie aux idées des innovateurs grâce à un 
              <span className="text-primary"> design percutant</span>.
            </h2>
          </div>
          
          {/* Projects Grid - Kaanari Style */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Large Project */}
            <div className="group cursor-pointer md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[3/4]">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-heading font-bold text-background">
                    {projects[0].title}
                  </h3>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
            </div>

            {/* Medium Projects */}
            {projects.slice(1).map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-heading font-bold text-background">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
