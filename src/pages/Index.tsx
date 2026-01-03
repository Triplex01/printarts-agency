import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import ChatbotWidget from "@/components/ChatbotWidget";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <ChatbotWidget />
    </motion.div>
  );
};

export default Index;