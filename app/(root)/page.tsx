import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing-sections/hero-section";
import { VisionSection } from "@/components/landing-sections/vision-section";
import { Testimonials } from "@/components/landing-sections/testimonials-section";
import GuideSection from "@/components/landing-sections/guide-section";
import { ReatltimeSection } from "@/components/landing-sections/realtime-section";
import AnalisePrevisaoSection from "@/components/landing-sections/analise-previsao-section";
import { UserUXSection } from "@/components/landing-sections/user-ux-section";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <VisionSection />
      <GuideSection />
      <ReatltimeSection />
      <AnalisePrevisaoSection />
      <UserUXSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
