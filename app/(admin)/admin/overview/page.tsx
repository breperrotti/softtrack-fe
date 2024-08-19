"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { contratos } from "@/mocks/contracts";
import { ContractCard } from "@/components/contract-card";

const OverviewPage = () => {
  return (
    <div>
      <div className="relative h-[400px] w-full shadow-2xl">
        <Image
          src={"/hero-admin.svg"}
          alt="hero admin"
          layout="fill"
          objectFit="cover"
          className="z-0 select-none"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-7xl font-bold select-none">
            SoftTrack
          </h1>
        </div>
      </div>
      <div className="p-6 w-full">
        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-2xl">Contratos</p>
          <Button>
            Mostrar todos <ChevronRight />
          </Button>
        </div>
        <div className="w-max-96 mt-4 px-16 justify-center">
          <Carousel className="w-full mt-8">
            <CarouselContent>
              {contratos.map((contrato, index) => (
                <CarouselItem key={index}>
                  <ContractCard contrato={contrato}/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"ghost"}/>
            <CarouselNext variant={"ghost"}/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
