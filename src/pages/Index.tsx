import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChefSection from "@/components/ChefSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ChefSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
