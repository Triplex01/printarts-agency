import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import logoLight from "@/assets/printsarts-logo.png";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                <img src={logoLight} alt="Print's Arts" className="w-10 h-10 object-contain" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">🍪 Nous utilisons des cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                      En continuant, vous acceptez notre{" "}
                      <Link to="/confidentialite" className="text-primary hover:underline">
                        politique de confidentialité
                      </Link>{" "}
                      et nos{" "}
                      <Link to="/conditions" className="text-primary hover:underline">
                        conditions générales
                      </Link>.
                    </p>
                  </div>
                  <button
                    onClick={declineCookies}
                    className="p-1 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button
                    onClick={acceptCookies}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                  >
                    Accepter tout
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    className="rounded-full px-6 border-border hover:bg-muted"
                  >
                    Refuser
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
