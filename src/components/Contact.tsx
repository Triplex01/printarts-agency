import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-foreground text-background overflow-hidden">
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
              <p className="text-minimal text-primary mb-3 md:mb-4">CONTACT</p>
              <h2 className="text-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8 leading-tight">
                Parlons de votre <span className="text-primary">projet</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-background/70 leading-relaxed mb-8 md:mb-12">
                Prêt à donner vie à vos idées ? Contactez-nous pour discuter de votre 
                prochain projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  className="flex items-start gap-3 md:gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 text-sm md:text-base">Adresse</h4>
                    <p className="text-background/70 text-xs md:text-sm">Cocody Riviera 3, Abidjan, Côte d'Ivoire</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3 md:gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 text-sm md:text-base">Téléphone</h4>
                    <a href="tel:+2250709779679" className="text-background/70 text-xs md:text-sm hover:text-primary transition-colors">
                      +225 07 09 77 96 79
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3 md:gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1 text-sm md:text-base">Email</h4>
                    <a href="mailto:email@printsartsmultimedia.com" className="text-background/70 text-xs md:text-sm hover:text-primary transition-colors break-all">
                      email@printsartsmultimedia.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div 
                className="mt-8 md:mt-10 flex gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://facebook.com/printsartsmultimedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://instagram.com/printsarts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/printsarts-multimedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Form */}
            <motion.div 
              className="bg-background/5 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 border border-background/10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Demandez un devis gratuit</h3>
              <p className="text-background/60 mb-6 md:mb-8 text-sm md:text-base">Réponse sous 24h garantie</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block text-xs md:text-sm">Nom *</label>
                    <Input 
                      name="name"
                      required
                      placeholder="Votre nom" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-lg md:rounded-xl focus:border-primary focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block text-xs md:text-sm">Email *</label>
                    <Input 
                      name="email"
                      type="email"
                      required
                      placeholder="votre@email.com" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-lg md:rounded-xl focus:border-primary focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block text-xs md:text-sm">Téléphone</label>
                    <Input 
                      name="phone"
                      type="tel"
                      placeholder="+225 XX XX XX XX" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-lg md:rounded-xl focus:border-primary focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block text-xs md:text-sm">Entreprise</label>
                    <Input 
                      name="company"
                      placeholder="Nom de votre entreprise" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-lg md:rounded-xl focus:border-primary focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-minimal text-background/60 mb-2 block text-xs md:text-sm">Service souhaité *</label>
                  <Input 
                    name="service"
                    required
                    placeholder="Design, Branding, Web, Audiovisuel..." 
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-lg md:rounded-xl focus:border-primary focus:ring-primary text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-background/60 mb-2 block text-xs md:text-sm">Décrivez votre projet *</label>
                  <Textarea 
                    name="message"
                    required
                    placeholder="Parlez-nous de votre projet, vos objectifs, votre budget estimé..." 
                    rows={4}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-lg md:rounded-xl resize-none focus:border-primary focus:ring-primary text-sm md:text-base"
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
