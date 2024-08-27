import { Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./hero-cards";
import { Bowlby_One } from "next/font/google";
import { cn } from "@/lib/utils";

const bowlby = Bowlby_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-24 -mt-12 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <Badge variant={"neutral"} >Lorem ipsum dolor, sit amet co</Badge>
        <main className={cn("text-5xl md:text-7xl font-bold", bowlby.className)}>
          <h1 className={"inline"}>
            <span className="inline text-verde">Shadcn</span> landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline font-bold">
            <span className="inline text-rosa font-bold">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <Github className="ml-2 w-5 h-5" />
          </a>
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
