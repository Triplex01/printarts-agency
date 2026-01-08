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
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src={isDark ? logoWhite : logoDark} 
            alt="Print's Arts Multimedia" 
            className="h-10 sm:h-12 lg:h-16" 
          />
        </a>
        
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <a href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline">
            Portfolio
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

        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-4 xl:px-6 text-sm">
            <a href="/contact">Demander un Devis</a>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </Button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            <a href="/portfolio" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2">
              Portfolio
            </a>
            <a href="/services" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2">
              Services
            </a>
            <a href="/about" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2">
              À propos
            </a>
            <a href="/contact" className="block text-base text-muted-foreground hover:text-foreground transition-colors duration-300 py-2">
              Contact
            </a>
            
            <div className="pt-4 border-t border-border">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full w-full">
                <a href="/contact">Demander un Devis</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
