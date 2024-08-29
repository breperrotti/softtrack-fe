import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import { Badge } from "../ui/badge";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function AnalisePrevisaoSection() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-12">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="">
          <Badge className="mb-3">
            <p className="text-xs font-bold text-black tracking-wider uppercase">
              Análise de demandas
            </p>
          </Badge>
          <h1
            className={cn(
              "scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight transition-colors first:mt-0 ",
              syne.className
            )}
          >
            Análise de demandas
          </h1>
          <p className="mb-4 mt-4">
            Com a Análise de Demandas, você obtém uma visão clara da
            complexidade e criticidade de cada solicitação, permitindo uma
            alocação de recursos precisa e eficiente.
          </p>
          <p className="mb-4">
            Nossa solução avalia automaticamente as demandas, classificando-as
            por complexidade e impacto, para que as tarefas mais críticas sejam
            priorizadas.
          </p>
          <p>
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
    </section>
  );
}
