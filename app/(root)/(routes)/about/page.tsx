"use client";

import { TeamCard } from "@/components/card-team";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  return (
    <div className="p-6">
      <div className="text-center -mt-12 mb-12">
        <Badge variant="neutral" className="font-bold">
          Sobre o Projeto
        </Badge>
        <h1 className="text-4xl font-bold py-4">
          Conheça o Nosso Time
        </h1>
        <p className="text-lg text-gray-600">
          Conheça as pessoas talentosas que estão por trás do nosso projeto. Cada um de nós traz uma experiência única e uma paixão pelo que fazemos.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
          color="#5623E2"
          image="https://github.com/isabela.png"
          name="Breno - RM550434"
          description="Back-end Developer & Pitch"
        />
      </div>
    </div>
  );
};

export default AboutPage;
