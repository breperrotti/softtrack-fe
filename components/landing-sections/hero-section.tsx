import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroCards } from "@/components/hero-cards";
import { Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sparkle2SVG, SparkleSVG, CurlySVG, ExplosionSVG, ZigZagSVG, ZigZag2SVG, ThreeLinesSVG, CircleArrowSVG, ZapSVG } from "@/svgs/svgs";

// Fontesconst bowlby = Bowlby_One({ weight: ["400"], subsets: ["latin"] });
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section className="py-24 -mt-12 gap-10 relative">
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
        <div className="z-10">
          <HeroCards />
        </div>
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12"
        style={{ top: "3%", left: "7%" }}
      >
        <Sparkle2SVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12"
        style={{ top: "8%", left: "9%", fill: "#5623E2" }}
      >
        <SparkleSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12"
        style={{ top: "110%", left: "90%", fill: "#5623E2" }}
      >
        <CurlySVG />
      </div>
      <div className="absolute top-0 left-0" style={{ top: "0%", left: "75%" }}>
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{ top: "80%", left: "60%" }}
      >
        <ZigZagSVG />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{ top: "87%", left: "62%" }}
      >
        <ZigZag2SVG/>
      </div>
      <div
        className="absolute top-0 left-0 transform -rotate-90"
        style={{ top: "0%", left: "50%" }}
      >
        <ThreeLinesSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-45"
        style={{ top: "70%", left: "-2%" }}
      >
        <CircleArrowSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12"
        style={{ top: "10%", left: "94%" }}
      >
        <ZapSVG />
      </div>

      {/* Shadow Effect */}
      <div className="shadow"></div>
    </section>
  );
};
