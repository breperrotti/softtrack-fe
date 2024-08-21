"use client"

import { Contrato, contratos } from "@/mocks/contracts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "./ui/carousel";
import { ChevronUp } from "lucide-react";
import { GraficoFuncionariosDisponiveisOverview } from "./charts/grafico-funcionarios-disponiveis-overview";
import { GraficoDemandaSegmentoOverview } from "./charts/grafico-demandas-segmento-overview";
import { Component } from "./charts/grafico-demandas-senioridade-overview";

interface ContractCardProps {
  contrato: Contrato;
}

export const ContractCard = (params: ContractCardProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full bg-roxoClaro h-128 rounded-2xl"
    >
      <CarouselContent className="h-128 p-4">
        <CarouselItem className="h-128">
          <div className="h-[420px] w-full flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-5xl font-bold text-center flex flex-col items-center">
              <ChevronUp size={72} />
              {params.contrato.name}
              <p className="text-lg mt-2">
                Arraste para cima para ter mais informações
              </p>
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem className="h-128 mt-12 pb-12">
          <div className="h-[480px] mt-4 bg-white w-full flex items-center justify-center rounded-2xl">
            <h1 className="text-4xl font-bold text-center flex flex-col items-center p-4">
              {`"${params.contrato.description}"`}
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem className="h-[480px] mt-12">

        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
    </Carousel>
  );
};
