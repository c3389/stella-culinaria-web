import chefImage from "@/assets/chef-portrait.jpg";

const ChefSection = () => {
  return (
    <section id="chef" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
                Chef Marco Stellini
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-gold text-2xl">★</span>
                <span className="text-lg text-muted-foreground">Michelin Star Chef</span>
              </div>
            </div>
            
            <p className="text-lg text-foreground leading-relaxed">
              Con oltre 20 anni di esperienza nella cucina italiana di alta gamma, 
              Chef Marco Stellini ha dedicato la sua carriera alla ricerca della perfezione culinaria.
            </p>
            
            <p className="text-foreground leading-relaxed">
              La sua filosofia si basa sull'utilizzo di ingredienti locali di stagione, 
              trasformati attraverso tecniche innovative che rispettano e esaltano 
              i sapori autentici della tradizione italiana.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium">Michelin Star - 2019, 2020, 2021, 2022, 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium">James Beard Award Nominee</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium">Gambero Rosso - 3 Forchette</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={chefImage} 
                alt="Chef Marco Stellini" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;