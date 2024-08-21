import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { User } from "lucide-react";
import { GraficoConsultoresSegmentoOverview } from "./charts/grafico-demandas-segmento-overview";
import { GraficoConsultoresDisponiveisOverview } from "./charts/grafico-consultores-disponiveis-overview";
import { GraficoDemandasSenioridade } from "./charts/grafico-demandas-senioridade-overview";

import Image from "next/image";
import { GraficoBalançoChamadosConsultoresSegmento } from "./charts/grafico-balanco-chamados-consultores";
import { GraficoCustoConsultoresChamados } from "./charts/grafico-custo-consultores-chamados";
import { GraficoChsmadosAbertosResolvidosSegmento } from "./charts/grafico-chamados-abertos-resolvidos";

export function OverviewDashboard() {
  return (
    <BentoGrid className="max-w-full mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 -full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 text-neutral-900">
  </div>
);

const items = [
  {
    header: <GraficoConsultoresSegmentoOverview />,
  },
  {
    header: (
      <GraficoConsultoresDisponiveisOverview
        disponiveis={"910"}
        ausentes={"60"}
      />
    ),
  },
  {
    header: <GraficoDemandasSenioridade />,
  },
  {
    title: "9 em cada 10 executivos não confiam nos dados analisados",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.",
    header: (
      <div className="relative flex w-full h-full min-h-[18rem] rounded-xl overflow-hidden">
        <Image
          src="/9de10ejecutivos-1.png"
          layout="fill"
          objectFit="cover"
          alt="executivos"
        />
      </div>
    ),
  },
  {
    header: <GraficoBalançoChamadosConsultoresSegmento />,
  },
  {
    header: <GraficoChsmadosAbertosResolvidosSegmento />,
  },
  {
    header: <GraficoCustoConsultoresChamados />,
  },
];
