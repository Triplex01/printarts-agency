import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-minimal text-primary mb-4">À PROPOS</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand mb-8">
                Votre partenaire de confiance en <span className="text-primary">Côte d'Ivoire</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Depuis plus de 10 ans, <strong>PRINT'S ARTS MULTIMEDIA</strong> accompagne 
                  les entreprises dans leur communication interne et externe. À l'écoute de 
                  chaque client, nous concevons des stratégies sur mesure pour sensibiliser, 
                  valoriser et impacter durablement.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Plus de <strong>70% de nos projets</strong> sont réalisés par recommandation, 
                  gage de la confiance que nous inspirons. Face à une demande croissante, nous 
                  renforçons continuellement nos outils et méthodes pour rester à la hauteur 
                  de vos ambitions.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-muted/30 rounded-xl p-8">
                <h3 className="text-minimal text-primary mb-6">NOTRE APPROCHE</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Écoute & Conseil</h4>
                      <p className="text-muted-foreground text-sm">Compréhension approfondie de vos besoins et objectifs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Créativité & Innovation</h4>
                      <p className="text-muted-foreground text-sm">Des solutions originales qui vous démarquent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Qualité & Fiabilité</h4>
                      <p className="text-muted-foreground text-sm">Livraison dans les délais avec un haut niveau d'exigence</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">10+</p>
                  <p className="text-minimal text-muted-foreground">Années d'expérience</p>
                </div>
                <div className="bg-secondary/10 rounded-xl p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-secondary mb-2">500+</p>
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
