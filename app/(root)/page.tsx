import { Footer } from "@/components/footer";
import { Solutions } from "@/components/landing-sections/solutions-section";
import { Hero } from "@/components/landing-sections/hero-section";
import { Vision } from "@/components/landing-sections/vision-section";
import { Testimonials } from "@/components/landing-sections/testimonials-section";
import { ReatltimeSection } from "@/components/landing-sections/realtime-section";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Vision />
      <Testimonials />
      <ReatltimeSection />
      <Solutions />
      <Footer />
    </div>
  );
};

export default LandingPage;
