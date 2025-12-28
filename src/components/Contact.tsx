import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <p className="text-minimal text-background/60 mb-4">CONTACT</p>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-8">
                Parlons de votre <span className="text-primary">projet</span>
              </h2>
              
              <p className="text-lg text-background/70 leading-relaxed mb-12">
                Prêt à donner vie à vos idées ? Contactez-nous pour discuter de votre 
                prochain projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Adresse</h4>
                    <p className="text-background/70 text-sm">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Téléphone</h4>
                    <p className="text-background/70 text-sm">+225 XX XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <p className="text-background/70 text-sm">email@printsartsmultimedia.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="bg-background/5 rounded-2xl p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block">Nom</label>
                    <Input 
                      placeholder="Votre nom" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-background/60 mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="votre@email.com" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-minimal text-background/60 mb-2 block">Sujet</label>
                  <Input 
                    placeholder="Sujet de votre demande" 
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-background/60 mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Décrivez votre projet..." 
                    rows={5}
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 rounded-xl resize-none"
                  />
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full group"
                >
                  Envoyer le message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-20 pt-10 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-background/60 text-sm">
              © 2024 Print's Arts Multimedia. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Facebook</a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Instagram</a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
