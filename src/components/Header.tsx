import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-serif text-2xl font-bold text-charcoal">
          Stella d'Oro
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-gold transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('chef')}
            className="text-foreground hover:text-gold transition-colors font-medium"
          >
            Chef
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-foreground hover:text-gold transition-colors font-medium"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-gold transition-colors font-medium"
          >
            Contatti
          </button>
          <Button variant="gold" className="ml-4">
            Prenota Ora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-gold/20 md:hidden">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-gold transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('chef')}
                className="text-foreground hover:text-gold transition-colors font-medium"
              >
                Chef
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-gold transition-colors font-medium"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-gold transition-colors font-medium"
              >
                Contatti
              </button>
              <Button variant="gold" className="mt-2">
                Prenota Ora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;