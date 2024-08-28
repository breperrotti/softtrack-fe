import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing-sections/hero-section";
import { VisionSection } from "@/components/landing-sections/vision-section";
import { Testimonials } from "@/components/landing-sections/testimonials-section";
import GuideSection from "@/components/landing-sections/guide-section";
import { ReatltimeSection } from "@/components/landing-sections/realtime-section";
import AnalisePrevisaoSection from "@/components/landing-sections/analise-previsao-section";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <VisionSection />
      <GuideSection />
      <ReatltimeSection />
      <AnalisePrevisaoSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
