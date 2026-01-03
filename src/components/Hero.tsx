import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
const clients = ["PETROCI", "CÔTE D'IVOIRE EXPORT", "BAD", "SIDAAL", "TEYLIOM PROPERTIES", "URBANEA", "BAAB", "NOOM HOTELS", "LA ROUTE AFRICAINE", "JETOUR", "MG MOTORS", "CHANGAN", "NOURRIVOIRE", "GBAT", "DAVCOM", "GROUPE ATLANTIQUE", "MARAZ", "FAFCI", "MASA", "CHILDREN OF AFRICA"];
const Hero = () => {
  return <section className="relative min-h-screen flex flex-col justify-center pt-20 grid-pattern overflow-hidden">
      {/* Floating Elements */}
      <motion.div className="absolute top-32 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity
    }} />
      <motion.div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl" animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.4, 0.6, 0.4]
    }} transition={{
      duration: 6,
      repeat: Infinity
    }} />

      {/* Main Content */}
      
      
      {/* Partners Marquee - La Print's Zone */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="py-6 overflow-hidden">
          <motion.p className="text-minimal text-primary text-center mb-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }}>
            LA PRINT'S ZONE • ILS NOUS FONT CONFIANCE
          </motion.p>
          <div className="relative">
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, i) => <div key={i} className="flex items-center gap-12 px-6">
                  {clients.map((client, index) => <span key={`${i}-${index}`} className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/50 hover:text-primary whitespace-nowrap transition-colors duration-300 cursor-default">
                      {client}
                    </span>)}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;