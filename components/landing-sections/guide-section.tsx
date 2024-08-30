import { Syne } from "next/font/google";
import { Badge } from "../ui/badge";
import { Solutions } from "./solutions-section";
import { cn } from "@/lib/utils";
import { SketchSVG } from "@/svgs/svgs";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function GuideSection() {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 py-20">
          <div className="relative mx-auto max-w-6xl grid space-y-5 sm:space-y-10">
            {/* Title */}
            <div className="text-center">
              <Badge className="mb-3">
                <p className="text-xs font-bold text-black tracking-wider uppercase">
                  Navegue pela solução
                </p>
              </Badge>
              <h1
                className={cn(
                  "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
                  syne.className
                )}
              >
                Conheça as funcionalidades que tornam nossa Dashboard
                Inteligente a escolha ideal para sua empresa
              </h1>
            </div>
            {/* End Title */}
            <div>
              <div className="mx-auto max-w-7xl sm:flex sm:space-x-3 p-3">
                <div className="gap-x-2 w-full p-1">
                  <Solutions />
                </div>
              </div>
            </div>

            <div
              className="hidden absolute start-0 transform md:block -translate-y-24 lg:-translate-x-96"
              aria-hidden="true"
            >
              <svg
                className="w-96 h-auto"
                width={717}
                height={653}
                viewBox="0 0 717 653"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            {/* End SVG Element */}
            {/* SVG Element */}
            <div
              className="hidden absolute top-3/4 end-0 transform -translate-y-3/4 translate-x-144 md:block"
              aria-hidden="true"
            >
              <svg
                className="w-144 h-auto"
                width={1115}
                height={636}
                viewBox="0 0 1115 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
