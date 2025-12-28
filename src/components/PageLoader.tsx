import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/printsarts-logo-white.png";

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

const PageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-foreground flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-12"
          >
            <motion.img
              src={logoWhite}
              alt="Print's Arts"
              className="h-20 md:h-28 object-contain"
              animate={{ 
                filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-2xl bg-primary/30 -z-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 md:w-64 h-1 bg-background/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            className="mt-6 text-background/60 text-minimal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            CHARGEMENT...
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 border border-primary/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
