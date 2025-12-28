import { useState } from "react";
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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src={isDark ? logoWhite : logoDark} 
            alt="Print's Arts Multimedia" 
            className="h-10 md:h-12" 
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Réalisations
          </a>
          <a href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Services
          </a>
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            À propos
          </a>
          <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium rounded-full px-6">
            Ping Us
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
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="/work" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Réalisations
            </a>
            <a href="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Services
            </a>
            <a href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              À propos
            </a>
            <a href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
            
            <div className="pt-4 border-t border-border flex items-center gap-4">
              <ThemeToggle />
              <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium rounded-full flex-1">
                Ping Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
