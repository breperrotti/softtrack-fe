import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "../animated-list-hero";
import { Syne } from "next/font/google";
import { Badge } from "../ui/badge";
import { TabsRealtime } from "@/components/tabs-realtime";
import { BigExplosionSVG, CloudSVG, ExplosionSVG, SketchSVG, ZigZagSVG } from "@/svgs/svgs";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const ReatltimeSection = () => {
  return (
    <section className="relative">
      <div className="mx-72 flex items-center h-144  border-black overflow-hidden">
        <div className="w-full h-144 grid grid-cols-2 p-6">
          <div className="flex p-6  mb-8">
            <div className="">
              <Badge className="mb-3">
                <p className="text-xs font-bold text-black tracking-wider uppercase">
                  Gestão de conteúdo em tempo real
                </p>
              </Badge>
              <h1
                className={cn(
                  "scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight transition-colors first:mt-0 ",
                  syne.className
                )}
              >
                Gestão de conteúdo em tempo real
              </h1>
              <div className="">
                <TabsRealtime />
              </div>
            </div>
          </div>
          <div className="-mt-6">
            <AnimatedListDemo />
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 transform rotate-12 "
        style={{ top: "3%", left: "2%" }}
      >
        <BigExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 "
        style={{ top: "25%", left: "13%" }}
      >
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 "
        style={{ top: "35%", left: "10%" }}
      >
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-45"
        style={{ top: "60%", left: "-5%" }}
      >
        <ZigZagSVG />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{ top: "50%", left: "50%" }}
      >
        <SketchSVG />
      </div>
    </section>
  );
};
