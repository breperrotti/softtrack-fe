import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import { Badge } from "../ui/badge";
import { Curly2SVG } from "@/svgs/svgs";
import { Heading } from "../heading";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function AnalisePrevisaoSection() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-24 relative">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div>
          <Heading
            title="Análise de Demandas"
            badge="Análise de Demandas"
            classNameBadge="flex justify-center md:justify-start"
            classNameTitle="text-center md:text-start"
            id="analise"
          />
          <p className="mb-4 mt-4 text-center md:text-start text-base md:text-lg text-muted-foreground">
            Com a Análise de Demandas, você obtém uma visão clara da
            complexidade e criticidade de cada solicitação, permitindo uma
            alocação de recursos precisa e eficiente.
          </p>
          <p className="mb-4 text-center md:text-start text-base md:text-lg text-muted-foreground">
            Nossa solução avalia automaticamente as demandas, classificando-as
            por complexidade e impacto, para que as tarefas mais críticas sejam
            priorizadas.
          </p>
          <p className="text-center md:text-start text-base md:text-lg text-muted-foreground">
            Baseada em dados históricos, a ferramenta também sugere abordagens e
            prazos, garantindo que sua equipe atenda as necessidades mais
            urgentes de forma rápida e eficaz
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-roxo h-96 flex items-center justify-center text-white text-xl font-extrabold border-2 border-black bg-background transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none">
            teste
          </div>
          <div className="mt-4 w-full lg:mt-10 bg-verde h-96 flex items-center justify-center text-white text-xl font-extrabold border-2 border-black bg-background transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none">
            teste
          </div>
        </div>
      </div>

      <div
        className="absolute transform -rotate-90 z-10 hidden lg:block"
        style={{ top: "80%", left: "-4%" }}
      >
        <Curly2SVG />
      </div>
    </section>
  );
}
