import { Footer } from "@/components/footer";
import { Solutions } from "@/components/solutions-section";
import { Hero } from "@/components/hero-section";
import { Vision } from "@/components/vision-section";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Vision />
      <Solutions />
      <Footer />
    </div>
  );
};

export default LandingPage;
