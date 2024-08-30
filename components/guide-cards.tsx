import React from "react";
import { ChartLine, ClockArrowUp, SquareStack, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export const Guides = () => {
  return (
    <div id="Guides" className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="w-full flex justify-center ">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          <GuideCard
            title="Gestão de Capacidade em Tempo Real"
            href="#"
            icon={<ClockArrowUp size={40} />}
            className=""
            color="#5623E2"
          />
          <GuideCard
            title="Análise de Demandas"
            href="#"
            icon={<ChartLine size={40}/>}
            color="#EF462F"
          />
          <GuideCard
            title="Previsão de Tendências"
            href="#"
            icon={<SquareStack size={40}/>}
            className=""
            color= "#D9014B"
          />
          <GuideCard
            title="Experiência Inteligente e Personalizada"
            href="#"
            icon={<Users size={40}/>}
            className=""
            color= "#00CEBE"
          />
        </div>
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  color: string
}

const GuideCard = ({
  title,
  subtitle,
  icon,
  href,
  className,
  color
}: CardType) => {
  return (
    <a
      href={href}
      className={cn(
        "w-full h-full p-4 rounded relative overflow-hidden group bg-white border-2 border-black px-6 py-3 font-semibold translate-x-[-6px] translate-y-[-6px] shadow-[6px_6px_0px_black] sm:p-6 lg:p-8",
        className
      )}
    >
      <div className={cn("absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-400 text-white flex items-center justify-center", className)} style={{ backgroundColor: color }}>
      </div>
      <div className="mb-2 text-black group-hover:text-white transition-colors relative z-10 duration-300">
        {icon}
      </div>
      <h3 className="font-medium mt-4 text-2xl text-slate-950 group-hover:text-white relative z-10 duration-300 mb-6">
        {title}
      </h3>
      <p className="text-zinc-900 group-hover:text-white relative z-10 duration-300 w-4/5">
        {subtitle}
      </p>
    </a>
  );
};