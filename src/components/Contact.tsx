import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-minimal text-primary mb-4">CONTACT</p>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-8">
                Parlons de votre <span className="text-primary">projet</span>
              </h2>
              
              <p className="text-lg text-background/70 leading-relaxed mb-12">
                Prêt à donner vie à vos idées ? Contactez-nous pour discuter de votre 
                prochain projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Adresse</h4>
                    <p className="text-background/70 text-sm">Cocody Riviera 3, Abidjan, Côte d'Ivoire</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Téléphone</h4>
                    <a href="tel:+22507080910" className="text-background/70 text-sm hover:text-primary transition-colors">
                      +225 07 08 09 10 11
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <a href="mailto:email@printsartsmultimedia.com" className="text-background/70 text-sm hover:text-primary transition-colors">
                      email@printsartsmultimedia.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div 
                className="mt-10 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://facebook.com/printsartsmultimedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/printsarts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/printsarts-multimedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Form */}
            <motion.div 
              className="bg-background/5 rounded-2xl p-8 md:p-10 border border-background/10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-2">Demandez un devis gratuit</h3>
              <p className="text-background/60 mb-8">Réponse sous 24h garantie</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block">Nom *</label>
                    <Input 
                      required
                      placeholder="Votre nom" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block">Email *</label>
                    <Input 
                      type="email"
                      required
                      placeholder="votre@email.com" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block">Téléphone</label>
                    <Input 
                      type="tel"
                      placeholder="+225 XX XX XX XX" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block">Entreprise</label>
                    <Input 
                      placeholder="Nom de votre entreprise" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-minimal text-background/60 mb-2 block">Service souhaité *</label>
                  <Input 
                    required
                    placeholder="Design, Branding, Web, Audiovisuel..." 
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-background/60 mb-2 block">Décrivez votre projet *</label>
                  <Textarea 
                    required
                    placeholder="Parlez-nous de votre projet, vos objectifs, votre budget estimé..." 
                    rows={5}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl resize-none focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Envoyer ma demande
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
          
          {/* Footer */}
          <motion.div 
            className="mt-20 pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-background/60 text-sm">
              © 2024 Print's Arts Multimedia. Tous droits réservés. L'agence des conquérants.
            </p>
            <div className="flex items-center gap-6">
              <a href="/portfolio" className="text-background/60 hover:text-primary text-sm transition-colors">Portfolio</a>
              <a href="/services" className="text-background/60 hover:text-primary text-sm transition-colors">Services</a>
              <a href="/about" className="text-background/60 hover:text-primary text-sm transition-colors">À propos</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;