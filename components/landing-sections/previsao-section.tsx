
import { Syne } from "next/font/google";
import { Heading } from "../heading";
import { EyeSVG, Sparkle2SVG, SparkleSVG } from "@/svgs/svgs";


export const PrevisaoSection = () => {
  return (
    <section className="container mt-12 relative">
      <div className="py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <Heading
                title="Previsão de Tendências"
                badge="Previsão de Tendências"
                classNameBadge="flex justify-center"
                classNameTitle="text-center"
                id="previsao"
              />
              <p className="mt-4 text-base md:text-lg text-muted-foreground text-center">
                Fique à frente da curva com nossas ferramentas avançadas de
                análise de tendências e previsão. Nosso produto aproveita IA de
                última geração para prever tendências de mercado, ajudando sua
                empresa a tomar decisões baseadas em dados com confiança.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="p-6 rounded-md w-full border-2 border-blac bg-white">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Nossas soluções de previsão de tendências são projetadas para fornecer insights detalhados e
                  precisos, permitindo que sua empresa se mantenha competitiva e inovadora. Utilizamos algoritmos
                  avançados que analisam dados históricos e em tempo real, identificando padrões emergentes e
                  prevendo o impacto de mudanças no mercado.
                </p>
              </div>

              <div className="p-6 rounded-md w-full border-2 border-blac bg-white">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Com nossa tecnologia, você pode antecipar movimentos estratégicos, otimizar campanhas de marketing,
                  ajustar linhas de produtos e melhorar a alocação de recursos. Nossa plataforma é equipada com uma
                  interface intuitiva que facilita a visualização de dados complexos e a criação de relatórios personalizados
                  para sua equipe.
                </p>
              </div>

              <div className="p-6 rounded-md w-full border-2 border-blac bg-white">
                <p className="text-lg md:text-xl text-muted-foreground">
                  A inteligência artificial de última geração que utilizamos é treinada em vastas quantidades de dados
                  setoriais, o que permite a identificação de oportunidades e ameaças antes mesmo que elas se
                  manifestem. Isso oferece uma vantagem competitiva significativa, dando a sua empresa o tempo necessário
                  para se adaptar e responder às mudanças com agilidade.
                </p>
              </div>

              <div className="p-6 rounded-md w-full border-2 border-blac bg-white">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Em um mundo onde a informação se move rapidamente, ser capaz de prever tendências de mercado com
                  precisão é fundamental para o sucesso. Com nossas ferramentas, você estará bem equipado para tomar
                  decisões informadas e garantir que sua empresa esteja sempre à frente, explorando novas oportunidades e
                  mitigando riscos com confiança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute transform z-10 hidden rotate-12 md:block"
        style={{ top: "-16%", left: "78%" }}
      >
        <EyeSVG />
      </div>
      <div
        className="absolute transform z-10 hidden -rotate-12 md:block"
        style={{ top: "-14%", left: "10%" }}
      >
        <SparkleSVG />
      </div>
      <div
        className="absolute transform z-10 hidden -rotate-12 md:block"
        style={{ top: "-14%", left: "13%" }}
      >
        <Sparkle2SVG />
      </div>
      <div
        className="absolute transform z-10 hidden -rotate-12 md:block"
        style={{ top: "-5%", left: "12%" }}
      >
        <Sparkle2SVG />
      </div>
    </section>
  );
};
