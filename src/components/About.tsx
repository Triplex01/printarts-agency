import { CheckCircle, ArrowRight, Users, Trophy, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Écoute & Conseil",
      description: "Compréhension approfondie de vos besoins et objectifs"
    },
    {
      icon: Star,
      title: "Créativité & Innovation", 
      description: "Des solutions originales qui vous démarquent"
    },
    {
      icon: Trophy,
      title: "Qualité & Fiabilité",
      description: "Livraison dans les délais avec un haut niveau d'exigence"
    }
  ];

  const stats = [
    { value: "10+", label: "Années d'expérience", icon: Clock },
    { value: "500+", label: "Projets réalisés", icon: Trophy },
    { value: "70%", label: "Par recommandation", icon: Star },
    { value: "50+", label: "Clients fidèles", icon: Users }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-minimal text-primary mb-3 md:mb-4">LE STUDIO</p>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 leading-tight">
                Votre partenaire de confiance en 
                <span className="text-primary"> Côte d'Ivoire</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
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

              <motion.div 
                className="mt-8"
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
                  <a href="/about">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-muted/50 rounded-2xl p-8">
                <p className="text-minimal text-primary mb-6">NOTRE APPROCHE</p>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors">{value.title}</h4>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-muted/50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center group hover:bg-primary/10 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl md:text-3xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">{stat.value}</p>
                    <p className="text-xs md:text-minimal text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;