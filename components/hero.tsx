import { cn } from "@/lib/utils";
import * as React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "flex justify-center items-center lg:space-x-10 xl:space-x-10",
      className
    )}
    ref={ref}
  >
    <div>
      <div className="flex mt-[-15%] flex-col">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl xl:text-3xl ">
          <span className="text-transparent bg-clip-text bg-black dark:bg-white sm:text-4xl md:text-5xl lg:text-8xl">
            SoftTrack
          </span>
          <br />
          Transformando Dados em <br />
          Decisões Inteligentes
        </h1>
      </div>
      <p className="text-sm font-normal text-gray-500 xl:text-lg dark:text-gray-400">
        Utilizando a inteligência dos dados para <br />alcançar novos patamares de
        sucesso
      </p>
      <Button className="mt-4 gap-x-3">
        Quero conhecer mais <ArrowRight size={20}/>
      </Button>
    </div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[600px]">
        <Image
          src="/documents.png"
          fill
          className="object-contain dark:hidden"
          alt="Documents"
        />
        <Image
          src="/documents-dark.png"
          fill
          className="object-contain hidden dark:block"
          alt="Documents"
        />
      </div>
    </div>
  </div>
));

Hero.displayName = "Hero";

export default Hero;
