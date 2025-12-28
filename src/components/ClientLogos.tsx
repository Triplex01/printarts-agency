import clientLogos from "@/assets/client-logos.png";
import { motion } from "framer-motion";

const ClientLogos = () => {
  return (
    <section className="py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p 
            className="text-minimal text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            LA PRINT'S ZONE
          </motion.p>
          <motion.h2 
            className="text-display text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Une sélection de nos <span className="text-primary">conquêtes</span>
          </motion.h2>
        </div>
      </div>
      
      {/* Scrolling Logos */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...Array(3)].map((_, i) => (
            <motion.img
              key={i}
              src={clientLogos}
              alt="Nos clients partenaires"
              className="h-16 md:h-20 object-contain px-8 opacity-70 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
