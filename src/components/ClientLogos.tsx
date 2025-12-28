import { motion } from "framer-motion";

const clients = [
  "PETROCI", "CÔTE D'IVOIRE EXPORT", "BAD", "SIDAAL", "TEYLIOM PROPERTIES",
  "URBANEA", "BAAB", "NOOM HOTELS", "LA ROUTE AFRICAINE", "JETOUR",
  "MG MOTORS", "CHANGAN", "NOURRIVOIRE", "GBAT", "DAVCOM",
  "GROUPE ATLANTIQUE", "MARAZ", "FAFCI", "MASA", "CHILDREN OF AFRICA"
];

const ClientLogos = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p 
            className="text-minimal text-primary mb-4"
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
          <motion.p
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Des entreprises leaders en Côte d'Ivoire et en Afrique qui nous font confiance 
            pour leur communication et leur image de marque.
          </motion.p>
        </div>
      </div>
      
      {/* Scrolling Logos - First Row */}
      <div className="relative mb-4">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-5">
              {clients.slice(0, 10).map((client, index) => (
                <motion.span
                  key={`${i}-${index}`}
                  className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground/40 hover:text-primary whitespace-nowrap transition-colors duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {client}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Logos - Second Row (Reverse) */}
      <div className="relative">
        <div className="flex animate-marquee-reverse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-5">
              {clients.slice(10, 20).map((client, index) => (
                <motion.span
                  key={`${i}-${index}`}
                  className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground/40 hover:text-primary whitespace-nowrap transition-colors duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {client}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;