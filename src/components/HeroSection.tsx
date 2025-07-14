import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Stella d'Oro
        </h1>
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <div className="h-px bg-gold flex-1 max-w-20"></div>
          <span className="text-gold text-2xl mx-4">★</span>
          <div className="h-px bg-gold flex-1 max-w-20"></div>
        </div>
        <p className="text-xl md:text-2xl mb-8 font-light animate-slide-up">
          Un'esperienza culinaria d'eccellenza
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90 animate-slide-up">
          Dove l'arte della cucina italiana incontra l'innovazione contemporanea 
          in un'atmosfera di raffinata eleganza
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button variant="gold" size="lg" className="text-lg px-8 py-4">
            Prenota il Tuo Tavolo
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
            Scopri il Menu
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;