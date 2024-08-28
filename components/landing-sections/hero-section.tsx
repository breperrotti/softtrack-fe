import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroCards } from "@/components/hero-cards";
import { Bowlby_One, Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Fontes
const bowlby = Bowlby_One({ weight: ["400"], subsets: ["latin"] });
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// SVG Component
const CustomSVG = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 136 184"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M75.7477 171.209C76.4381 145.116 65.8169 119.095 42.5286 103.391C33.5106 97.3101 22.8276 95.096 12.3066 93.2559C55.0486 91.7897 69.8872 47.0546 75.8345 12.4238C73.7691 43.4833 90.0077 77.0321 123.193 80.1279C90.1579 99.5624 78.8199 135.225 75.7477 171.209Z"
      fill="#00CEBE"
      stroke="black"
      stroke-width="18.5735"
      stroke-miterlimit="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section className="py-24 -mt-12 gap-10 relative">
      {/* Texto Principal */}
      <div className="flex justify-center w-full ml-12">
        <div className="text-center lg:text-start space-y-6 max-w-3xl">
          <Badge variant={"neutral"}>Lorem ipsum dolor, sit amet co</Badge>
          <main
            className={cn("text-5xl md:text-7xl font-bold", syne.className)}
          >
            <h1 className={"inline"}>
              Transforme <br /> <span className="inline text-verde">Dados</span>{" "}
              em
            </h1>{" "}
            <h2 className="inline font-bold">
              <span className="inline text-roxo font-bold">Decisões</span>{" "}
              através da IA
            </h2>
          </main>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Antecipe tendências e mova-se à frente da concorrência. Acelere seu
            processo decisório com inteligência artificial.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Quero saber mais</Button>
            <Link href="https://github.com/leoMirandaa/shadcn-landing-page.git">
              <Button variant={"outline"}>
                Softtrack Docs
                <ArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Cards Section */}
        <div className="z-10">
          <HeroCards />
        </div>
      </div>
      {/* SVGs customizados */}
      <div className="absolute top-0 left-0 transform rotate-12" style={{ top: "3%", left: "7%" }}>
        <CustomSVG />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{ top: "18%", left: "43%" }}
      >
        <CustomSVG />
      </div>
      <div className="absolute top-0 left-0" style={{ top: "80%", left: "50%" }}>
        <CustomSVG />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{ top: "90%", left: "10%" }}
      >
        <CustomSVG />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{ top: "10%", left: "95%" }}
      >
        <CustomSVG />
      </div>

      {/* Shadow Effect */}
      <div className="shadow"></div>
    </section>
  );
};
