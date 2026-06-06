import AboutSection from "./components/AboutSection";
import AnimatedSection from "./components/AnimatedSection";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <div className="w-full flex flex-col bg-alice-blue">

      <Header />
      <HeroSection />
      
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <BenefitsSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialSection />
      </AnimatedSection>

      <FAQSection />

      <CTASection />

      <Footer />
      
    </div>
  );
}

export default App;
