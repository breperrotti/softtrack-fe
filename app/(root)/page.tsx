import { Footer } from "@/components/footer";
import { Solutions } from "@/components/solutions-section";
import { Hero } from "@/components/hero-section";
import { Vision } from "@/components/vision-section";
import { Testimonials } from "@/components/testimonials";
import { AnimatedListDemo } from "@/components/animated-list-hero";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Vision />
      <Solutions />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
