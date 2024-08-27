import React from "react";
import { ArrowUpRight, CircleHelp, Lightbulb, Newspaper, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const Solutions = () => {
  return (
    <div id="solutions">
      <div className="mt-24 flex flex-col items-center justify-center">
        <Badge variant={"neutral"} className="font-bold">
          Nossa Solução
        </Badge>
        <h1 className="text-4xl font-bold py-4">Como podemos ajudar nossos clientes?</h1>
      </div>
      <div className="p-4 mt-8 w-full flex justify-center ">
        <div className="h-144 grid gap-4 grid-cols-4 grid-rows-2 w-3/5">
          <HelpCard
            title="Nossa Solução"
            subtitle="Como usamos IA generativa para fazer uma inteligente análise dos recursos pra sua empresa?"
            href="#"
            icon={<Lightbulb size={60} />}
            className="col-span-2 row-span-2"
            color="#5623E2"
          />
          <HelpCard
            title="Contratos"
            subtitle="Veja com quais empresas a SoftTarck tem contratos"
            href="#"
            icon={<Newspaper />}
            color="#EF462F"
          />
          <HelpCard
            title="Quem somos nós?"
            subtitle="Conheça as personalidades que formam o time SoftTrack"
            href="#"
            icon={<CircleHelp size={40}/>}
            className="row-span-2"
            color= "#D9014B"
          />
          <HelpCard
            title="Equipes"
            subtitle="Quer conhecer as equipes que trabalham conosco?"
            href="#"
            icon={<Users />}
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
  subtitle: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  color: string
}

const HelpCard = ({
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
        "w-full h-full p-4 rounded relative overflow-hidden group bg-white border-2 border-black px-6 py-3 font-semibold translate-x-[-6px] translate-y-[-6px] shadow-[6px_6px_0px_black]",
        className
      )}
    >
      <div className={cn(`absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-400 text-white flex items-center justify-center`)} style={{ backgroundColor: color }}>
      </div>
      <div className="mb-2 text-black group-hover:text-white transition-colors relative z-10 duration-300">
        {icon}
      </div>
      <h3 className="font-medium text-3xl text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-zinc-900 group-hover:text-white relative z-10 duration-300 w-4/5">
        {subtitle}
      </p>
    </a>
  );
};
