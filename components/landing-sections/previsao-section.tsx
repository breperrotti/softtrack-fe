import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Syne } from "next/font/google";
import { Heading } from "../heading";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const PrevisaoSection = () => {
  return (
    <section className="container mt-12">
      <div className="py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <Heading
                title="Previsão de Tendências"
                badge="Previsão de Tendências"
                classNameBadge="flex justify-center "
                classNameTitle="text-center"
                id="previsao"
              />
              <p className=" mt-4 text-base md:text-lg text-muted-foreground text-center">
                Fique à frente da curva com nossas ferramentas avançadas de
                análise de tendências e previsão. Nosso produto aproveita IA de
                última geração para prever tendências de mercado, ajudando sua
                empresa a tomar decisões baseadas em dados com confiança.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="h-60 rounded-md w-full border-2 border-blac flex justify-center items-center">
                teste
              </div>
              <div className="h-60 rounded-md w-full border-2 border-blac flex justify-center items-center">
                teste
              </div>
              <div className="h-60 rounded-md w-full border-2 border-blac flex justify-center items-center">
                teste
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
