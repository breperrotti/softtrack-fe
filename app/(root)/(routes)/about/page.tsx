"use client";

import { TeamCard } from "@/components/card-team";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  return (
    <div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <Badge variant={"neutral"} className="font-bold">
          Sobre o Projeto
        </Badge>
        <h1 className="text-4xl font-bold py-4">Conheça o nosso time</h1>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <TeamCard
          color="#00CEBE"
          image="https://github.com/RafaelRMJesus.png"
          github="RafaelRMJesus"
          name="Rafael - RM98296"
          description="Head of Frontend"
        />
        <TeamCard
          color="#EF462F"
          image="https://github.com/bellujrb.png"
          name="Belluzzo - RM99282"
          description="Head of Global, Discovery, Pitch"
        />
        <TeamCard
          color="#FADF0B"
          image="https://github.com/Gplatini.png"
          name="Platini - RM551212"
          description="Frontend Developer"
        />
        <TeamCard
          color="#D9014B"
          image="https://github.com/GabrielMikas.png"
          name="Gabriel - RM97753"
          description="Head of Back-end Developer & Pitch"
        />
        <TeamCard
          color=" #5623E2"
          image="https://github.com/isabela.png"
          name="Breno - RM550434"
          description="Back-end Developer & Pitch"
        />
      </div>
    </div>
  );
};

export default AboutPage;
