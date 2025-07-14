import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contatti & Prenotazioni
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gold w-20"></div>
            <span className="text-gold text-2xl mx-4">★</span>
            <div className="h-px bg-gold w-20"></div>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Vi invitiamo a vivere un'esperienza culinaria indimenticabile. 
            Contattateci per prenotare il vostro tavolo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-warm-white/5 border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Indirizzo</h3>
                      <p className="opacity-90">
                        Via della Gastronomia, 15<br />
                        20121 Milano, Italia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-warm-white/5 border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Telefono</h3>
                      <p className="opacity-90">+39 02 1234 5678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-warm-white/5 border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="opacity-90">prenotazioni@stelladoro.it</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-warm-white/5 border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Orari</h3>
                      <div className="space-y-1 opacity-90">
                        <p>Martedì - Sabato: 19:30 - 23:00</p>
                        <p>Domenica: 12:30 - 15:00, 19:30 - 23:00</p>
                        <p>Lunedì: Chiuso</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Form */}
            <div className="bg-warm-white/5 border border-gold/20 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-center">
                Prenota Ora
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:border-gold focus:outline-none"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cognome</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:border-gold focus:outline-none"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:border-gold focus:outline-none"
                    placeholder="la-tua@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:border-gold focus:outline-none"
                    placeholder="+39 123 456 7890"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Data</label>
                    <input 
                      type="date" 
                      className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Persone</label>
                    <select className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream focus:border-gold focus:outline-none">
                      <option value="2">2 persone</option>
                      <option value="3">3 persone</option>
                      <option value="4">4 persone</option>
                      <option value="5">5 persone</option>
                      <option value="6">6 persone</option>
                      <option value="more">Più di 6</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Note speciali</label>
                  <textarea 
                    rows={3}
                    className="w-full p-3 bg-background/10 border border-gold/30 rounded-lg text-cream placeholder-cream/50 focus:border-gold focus:outline-none"
                    placeholder="Allergie, occasioni speciali, richieste particolari..."
                  />
                </div>

                <Button variant="gold" className="w-full py-3 text-lg">
                  Conferma Prenotazione
                </Button>
              </form>

              <p className="text-sm opacity-70 text-center mt-4">
                * Riceverai una conferma via email entro 24 ore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;