import Navigation from "@/components/Navigation";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-minimal text-primary mb-4">À PROPOS</p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand mb-6">
                L'agence des <span className="text-primary">conquérants</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Depuis plus de 10 ans, PRINT'S ARTS MULTIMEDIA accompagne les entreprises 
                dans leur communication interne et externe en Côte d'Ivoire.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Notre <span className="text-primary">histoire</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    À l'écoute de chaque client, nous concevons des stratégies sur mesure 
                    pour sensibiliser, valoriser et impacter durablement. Agence globale 
                    et spécialisée, nous intervenons dans le marketing, la publicité, 
                    les médias et le digital.
                  </p>
                  <p>
                    Plus de <strong className="text-foreground">70% de nos projets</strong> sont 
                    réalisés par recommandation, gage de la confiance que nous inspirons. 
                    Face à une demande croissante, nous renforçons continuellement nos 
                    outils et méthodes pour rester à la hauteur de vos ambitions.
                  </p>
                  <p>
                    Notre mission : vous offrir des solutions efficaces et de qualité 
                    pour faire de vous un conquérant sur votre marché.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">10+</p>
                  <p className="text-minimal text-muted-foreground">Années d'expérience</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-heading font-bold text-secondary mb-2">500+</p>
                  <p className="text-minimal text-muted-foreground">Projets réalisés</p>
                </div>
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-heading font-bold text-primary mb-2">70%</p>
                  <p className="text-minimal text-muted-foreground">Par recommandation</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-heading font-bold text-secondary mb-2">100%</p>
                  <p className="text-minimal text-muted-foreground">Satisfaction client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-10">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                Nos <span className="text-primary">valeurs</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Un haut niveau d'exigence dans chaque projet
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Écoute</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprendre vos besoins pour mieux y répondre
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Créativité</h3>
                  <p className="text-sm text-muted-foreground">
                    Des solutions originales qui vous démarquent
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Des résultats mesurables et durables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
