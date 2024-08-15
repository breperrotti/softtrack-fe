"use client"

import { Contrato } from "@/mocks/contracts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ChevronDown, ChevronUp, Ghost } from "lucide-react";

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
      className="w-full bg-roxoClaro h-80 rounded-2xl"
    >
      <CarouselContent className="h-80 p-4">
        <CarouselItem className="h-80">
          <div className="h-[240px] w-full flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-5xl font-bold text-center flex flex-col items-center">
              <ChevronUp size={72} />
              {params.contrato.name}
              <p className="text-lg mt-2">
                Arraste para cima para ter mais informações
              </p>
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem className="h-72 mt-12 pb-12">
          <div className="h-72 mt-4 bg-white w-full flex items-center justify-center rounded-2xl">
            <h1 className="text-4xl font-bold text-center flex flex-col items-center p-4">
              {`"${params.contrato.description}"`}
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem className="h-80 mt-12">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full bg-white rounded-2xl h-72 flex flex-col items-center justify-center">
              <h1 className="font-bold text-3xl mb-4">Consultores</h1><p className="text-7xl">{params.contrato.consultores}</p>
            </div>
            <div className="w-full text-white rounded-2xl h-72 flex flex-col items-center justify-center">
              <h1 className="font-bold text-3xl mb-4">Demandas</h1><p className="text-7xl">{params.contrato.demandas}</p>
            </div>
            <div className="w-full bg-white rounded-2xl h-72 flex flex-col items-center justify-center">
              <h1 className="font-bold text-3xl mb-4">Tipo</h1><p className="text-7xl">{params.contrato.tipo}</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
    </Carousel>
  );
};
