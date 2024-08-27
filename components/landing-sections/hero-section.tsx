import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroCards } from "@/components/hero-cards";
import { Bowlby_One, Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const bowlby = Bowlby_One({
  weight: ["400"],
  subsets: ["latin"],
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"]
})

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-24 -mt-12 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <Badge variant={"neutral"}>Lorem ipsum dolor, sit amet co</Badge>
        <main
          className={cn("text-5xl md:text-7xl font-bold", syne.className)}
        >
          <h1 className={"inline"}>
            Transforme<span className="inline text-verde">Dados</span> em
          </h1>{" "}
          <h2 className="inline font-bold">
            <span className="inline text-roxo font-bold">Decisões</span> através
            da IA
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Antecipe tendências e mova-se à frente da concorrência. Acelere seu processo decisório com inteligência artificial.


        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Quero saber mais</Button>

          <Link href="https://github.com/leoMirandaa/shadcn-landing-page.git">
            <Button variant={"outline"}>
              Softtrack Docs
              <ArrowUpRight size={20}/>
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
