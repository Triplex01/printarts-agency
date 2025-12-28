import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "CAMPAGNE CORPORATE",
      category: "BRANDING",
      description: "Identité visuelle complète et campagne de communication pour une entreprise leader"
    },
    {
      image: project2,
      title: "PRODUCTION AUDIOVISUELLE",
      category: "VIDÉO",
      description: "Film institutionnel et spots publicitaires pour une marque nationale"
    },
    {
      image: project3,
      title: "ÉVÉNEMENT D'ENTREPRISE",
      category: "ÉVÉNEMENTIEL",
      description: "Conception et organisation d'un gala annuel avec scénographie complète"
    }
  ];

  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-minimal text-primary mb-4">PRINT'S ZONE</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand">
                Nos <span className="text-primary">conquêtes</span>
              </h2>
            </div>
            <Button variant="outline" className="mt-6 md:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Voir tout le portfolio
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-minimal text-primary font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mt-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
