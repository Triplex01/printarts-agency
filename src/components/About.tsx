import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Écoute & Conseil",
      description: "Compréhension approfondie de vos besoins et objectifs"
    },
    {
      title: "Créativité & Innovation", 
      description: "Des solutions originales qui vous démarquent"
    },
    {
      title: "Qualité & Fiabilité",
      description: "Livraison dans les délais avec un haut niveau d'exigence"
    }
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <p className="text-minimal text-muted-foreground mb-4">LE STUDIO</p>
              <h2 className="text-display text-4xl md:text-5xl mb-8">
                Votre partenaire de confiance en 
                <span className="text-primary"> Côte d'Ivoire</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Depuis plus de 10 ans, <strong className="text-foreground">PRINT'S ARTS MULTIMEDIA</strong> accompagne 
                  les entreprises dans leur communication interne et externe. À l'écoute de 
                  chaque client, nous concevons des stratégies sur mesure pour sensibiliser, 
                  valoriser et impacter durablement.
                </p>
                
                <p>
                  Plus de <strong className="text-foreground">70% de nos projets</strong> sont réalisés par recommandation, 
                  gage de la confiance que nous inspirons.
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-2xl p-8">
                <p className="text-minimal text-muted-foreground mb-6">NOTRE APPROCHE</p>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-semibold mb-1">{value.title}</h4>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading font-bold mb-2">10+</p>
                  <p className="text-minimal text-muted-foreground">Années d'expérience</p>
                </div>
                <div className="bg-muted/50 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-heading font-bold mb-2">500+</p>
                  <p className="text-minimal text-muted-foreground">Projets réalisés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
