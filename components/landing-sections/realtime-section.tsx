import { cn } from "@/lib/utils";
import { AnimatedListDemo } from "../animated-list-hero";
import { Syne } from "next/font/google";
import { Badge } from "../ui/badge";
import { TabsRealtime } from "@/components/tabs-realtime";
import {
  BigExplosionSVG,
  CloudSVG,
  ExplosionSVG,
  SketchSVG,
  ZigZagSVG,
} from "@/svgs/svgs";
import { Heading } from "../heading";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const ReatltimeSection = () => {
  return (
    <section className="relative">
      <div className="container mx-auto flex items-center h-auto md:h-144 border-black overflow-hidden mt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 md:p-6">
          <div className="flex p-4 md:p-6 mb-8">
            <div>
            <Heading
                title="Gestão dos Dados em Tempo Real"
                badge="Gestão dos Dados em Tempo Real"
                classNameBadge="flex justify-center"
                classNameTitle="text-center"
                id="realtime"
              />
              <div>
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
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "-50%", left: "2%" }}
      >
        <BigExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "-30%", left: "13%" }}
      >
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "-20%", left: "10%" }}
      >
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-45 hidden xl:block"
        style={{ top: "60%", left: "-5%" }}
      >
        <ZigZagSVG />
      </div>
      <div
        className="absolute top-0 left-0 hidden 2xl:block"
        style={{ top: "50%", left: "50%" }}
      >
        <SketchSVG />
      </div>
    </section>
  );
};
