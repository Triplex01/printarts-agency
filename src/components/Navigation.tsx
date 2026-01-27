import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoWhite from "@/assets/printsarts-logo-white.png";
import logoDark from "@/assets/printsarts-logo-dark.png";
import { useTheme } from "@/components/ThemeProvider";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  
  const isDark = resolvedTheme === 'dark';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={isDark ? logoWhite : logoDark} 
            alt="Print's Arts Multimedia" 
            className="h-10 sm:h-12 lg:h-16" 
          />
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Portfolio
          </Link>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Services
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            À propos
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-4 xl:px-6 text-sm">
            <Link to="/contact">Demander un Devis</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 border-2 border-foreground/20 hover:border-foreground/40 hover:bg-muted"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <span className="text-lg font-bold text-foreground">✕</span>
            ) : (
              <span className="text-xl font-bold text-foreground">☰</span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            <Link to="/portfolio" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/services" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
              À propos
            </Link>
            <Link to="/contact" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            <div className="pt-4 border-t border-border">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Demander un Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
