import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-minimal text-primary mb-4">CONTACTEZ-NOUS</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand mb-6">
                Prêt à devenir <span className="text-primary">conquérant</span> ?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Parlons de votre projet ! Notre équipe est à votre écoute pour 
                vous accompagner dans votre stratégie de communication.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Adresse</h3>
                    <address className="text-muted-foreground not-italic">
                      Cocody, Abidjan<br />
                      Côte d'Ivoire
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+2250700000000" className="text-muted-foreground hover:text-primary transition-colors">
                      +225 07 00 00 00 00
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <a href="mailto:contact@printsartsmultimedia.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@printsartsmultimedia.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lun - Ven : 8h00 - 18h00<br />
                      Sam : 9h00 - 14h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Demandez un devis gratuit</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-minimal text-muted-foreground mb-2 block">Nom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="text-minimal text-muted-foreground mb-2 block">Prénom</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-minimal text-muted-foreground mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-muted-foreground mb-2 block">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-muted-foreground mb-2 block">Service souhaité</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                    <option value="">Sélectionnez un service</option>
                    <option value="design">Design Graphique</option>
                    <option value="3d">Réalisations 3D</option>
                    <option value="app">Applications Mobiles</option>
                    <option value="branding">Branding & Enseignes</option>
                    <option value="print">Impression</option>
                    <option value="video">Production Audiovisuelle</option>
                    <option value="web">Création Web</option>
                    <option value="event">Événementiel</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-minimal text-muted-foreground mb-2 block">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                  Envoyer ma demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
