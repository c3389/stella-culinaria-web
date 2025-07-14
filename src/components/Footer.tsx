import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gold">
              Stella d'Oro
            </h3>
            <p className="opacity-90 leading-relaxed">
              Un'esperienza culinaria d'eccellenza nel cuore di Milano, 
              dove tradizione e innovazione si incontrano per creare momenti indimenticabili.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Link Utili</h4>
            <div className="space-y-2">
              <a href="#menu" className="block opacity-90 hover:text-gold transition-colors">
                Menu
              </a>
              <a href="#chef" className="block opacity-90 hover:text-gold transition-colors">
                Chef
              </a>
              <a href="#contact" className="block opacity-90 hover:text-gold transition-colors">
                Prenotazioni
              </a>
              <a href="#" className="block opacity-90 hover:text-gold transition-colors">
                Eventi Privati
              </a>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Riconoscimenti</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gold">★</span>
                <span className="opacity-90">Michelin Star 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gold">🍴</span>
                <span className="opacity-90">Gambero Rosso - 3 Forchette</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gold">🏆</span>
                <span className="opacity-90">James Beard Nominee</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm">
            © 2023 Stella d'Oro. Tutti i diritti riservati.
          </p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0 text-sm opacity-70">
            <span>Creato con</span>
            <Heart className="w-4 h-4 text-gold fill-current" />
            <span>per l'eccellenza culinaria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;