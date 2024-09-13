import { AnimatedListWidget } from "../animated-list-widget";
import { TabsRealtime } from "@/app/(root)/_components/tabs-realtime";
import {
  BigExplosionSVG,
  Exclamation2SVG,
  ExplosionSVG,
  Lines2SVG,
  SketchSVG,
  Zap2SVG,
} from "@/svgs/svgs";
import { Heading } from "@/app/(root)/_components/heading";


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
            <AnimatedListWidget />
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "-60%", left: "2%"}}
      >
        <BigExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "-40%", left: "13%"}}
      >
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "-25%", left: "8%"}}
      >
        <ExplosionSVG />
      </div>
      <div
        className="absolute top-0 left-0 hidden 2xl:block"
        style={{ top: "50%", left: "50%" }}
      >
        <SketchSVG />
      </div>
      <div
        className="absolute top-0 left-0 transform -rotate-12 hidden xl:block"
        style={{ top: "0%", left: "89%" }}
      >
        <Zap2SVG />
      </div>
      <div
        className="absolute top-0 left-0 transform -rotate-12 hidden xl:block"
        style={{ top: "55%", left: "88%" }}
      >
        <Lines2SVG />
      </div>
      <div
        className="absolute top-0 left-0 transform rotate-12 hidden xl:block"
        style={{ top: "15%", left: "5%" }}
      >
        <Exclamation2SVG />
      </div>
    </section>
  );
};
