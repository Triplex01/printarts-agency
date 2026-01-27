import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoWhite from "@/assets/printsarts-logo-white.png";
import logoDark from "@/assets/printsarts-logo-dark.png";
import { useTheme } from "@/components/ThemeProvider";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const location = useLocation();
  
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div 
        className={`
          container mx-auto max-w-6xl
          transition-all duration-500 ease-out
          ${isScrolled 
            ? 'bg-background/80 dark:bg-background/70 shadow-lg shadow-black/5 dark:shadow-black/20' 
            : 'bg-background/60 dark:bg-background/40'
          }
          backdrop-blur-xl backdrop-saturate-150
          border border-border/50 dark:border-border/30
          rounded-full
          px-4 sm:px-6 py-2.5
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={isDark ? logoWhite : logoDark} 
              alt="Print's Arts Multimedia" 
              className="h-8 sm:h-10 lg:h-12 transition-all duration-300" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`
                  text-sm font-medium px-4 py-2 rounded-full
                  transition-all duration-300
                  ${isActive(link.to) 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <ThemeToggle />
            <Button 
              asChild 
              variant="outline"
              className="rounded-full px-5 text-sm font-medium border-2 border-foreground/20 hover:border-foreground/40 hover:bg-muted/50 transition-all duration-300"
            >
              <Link to="/portfolio">Nos projets</Link>
            </Button>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-5 text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              <Link to="/contact">Demander un Devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full hover:bg-muted/50 transition-all duration-300"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          lg:hidden fixed inset-0 z-40 
          transition-all duration-500
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ top: '80px' }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`
            relative mx-4 mt-2 p-6
            bg-background/95 dark:bg-background/90
            backdrop-blur-xl border border-border/50
            rounded-3xl shadow-xl shadow-black/10 dark:shadow-black/30
            transition-all duration-500 ease-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `}
        >
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`
                  block text-lg font-medium px-4 py-3 rounded-2xl
                  transition-all duration-300
                  ${isActive(link.to) 
                    ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                    : 'text-foreground hover:bg-muted/50'
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
            <Button 
              asChild 
              variant="outline"
              className="w-full rounded-2xl h-12 text-base font-medium border-2"
            >
              <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                Voir nos projets
              </Link>
            </Button>
            <Button 
              asChild 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-2xl h-12 text-base shadow-lg shadow-primary/25"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Demander un Devis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
