import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/printsarts-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Print's Arts Multimedia" className="h-12 md:h-14" />
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="/work" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            RÉALISATIONS
          </a>
          <a href="/services" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            SERVICES
          </a>
          <a href="/about" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            À PROPOS
          </a>
          <a href="/contact" className="text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
            CONTACT
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Devis Gratuit
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="/work" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              RÉALISATIONS
            </a>
            <a href="/services" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              SERVICES
            </a>
            <a href="/about" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              À PROPOS
            </a>
            <a href="/contact" className="block text-minimal text-muted-foreground hover:text-primary transition-colors duration-300">
              CONTACT
            </a>
            
            <div className="pt-4 border-t border-border flex items-center gap-4">
              <ThemeToggle />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex-1">
                Devis Gratuit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
