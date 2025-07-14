import { Card, CardContent } from "@/components/ui/card";
import signatureDish from "@/assets/signature-dish.jpg";

const MenuSection = () => {
  const menuCategories = [
    {
      name: "Antipasti",
      items: [
        {
          name: "Crudo di Ricciola",
          description: "Con agrumi di Sicilia e olio extravergine d'oliva DOP",
          price: "28€"
        },
        {
          name: "Vitello Tonnato Moderno", 
          description: "Reinterpretazione contemporanea del classico piemontese",
          price: "32€"
        }
      ]
    },
    {
      name: "Primi Piatti",
      items: [
        {
          name: "Risotto all'Amarone",
          description: "Con gorgonzola DOP e noci del Piemonte",
          price: "38€"
        },
        {
          name: "Tortellini in Brodo di Cappone",
          description: "Pasta fresca ripiena, tradizione emiliana",
          price: "42€"
        }
      ]
    },
    {
      name: "Secondi Piatti",
      items: [
        {
          name: "Agnello delle Madonie",
          description: "Cotto a bassa temperatura con erbe mediterranee",
          price: "55€"
        },
        {
          name: "Branzino in Crosta",
          description: "Con verdure di stagione e salsa al limoncello",
          price: "48€"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Menu Degustazione
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gold w-20"></div>
            <span className="text-gold text-2xl mx-4">★</span>
            <div className="h-px bg-gold w-20"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ogni piatto racconta una storia, ogni sapore è un'emozione. 
            Scopri il nostro menu che celebra l'eccellenza italiana.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Menu Items */}
            <div className="space-y-10">
              {menuCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal border-b border-gold/30 pb-2">
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-lg text-charcoal">
                              {item.name}
                            </h4>
                            <span className="font-serif text-lg font-semibold text-gold ml-4">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Dish Image */}
            <div className="lg:sticky lg:top-24">
              <Card className="overflow-hidden shadow-elegant border-gold/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={signatureDish} 
                      alt="Piatto signature del ristorante"
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-cream">
                      <h4 className="font-serif text-xl font-semibold mb-2">
                        Piatto Signature
                      </h4>
                      <p className="text-sm opacity-90">
                        La nostra creazione più celebrata
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-warm-white rounded-lg">
                <h4 className="font-serif text-xl font-semibold text-charcoal mb-4">
                  Menu Degustazione Completo
                </h4>
                <p className="text-muted-foreground mb-4">
                  Lasciati guidare dal nostro Chef in un viaggio culinario di 7 portate, 
                  accompagnato da vini selezionati.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-serif text-2xl font-bold text-gold">€120</span>
                  <span className="text-sm text-muted-foreground">per persona</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;