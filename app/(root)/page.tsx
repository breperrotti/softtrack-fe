import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero-section";
import { Mission } from "@/components/mission-section";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Mission />
      <Footer />
    </div>
  );
};

export default LandingPage;
