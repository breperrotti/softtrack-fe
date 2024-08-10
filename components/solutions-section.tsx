import React from "react";
import { ArrowUpRight, CircleHelp, Lightbulb, Newspaper, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export const Solutions = () => {
  return (
    <>
      <div className="mt-24 flex flex-col items-center justify-center">
        <Badge variant={"outline"}>
          Nossas Soluções
        </Badge>
        <h1 className="text-4xl font-bold py-4">Como podemos ajudar nossos clientes?</h1>
      </div>
      <div className="p-4 mt-8 w-full flex justify-center">
        <div className="h-144 grid gap-4 grid-cols-4 grid-rows-2 w-3/5">
          <HelpCard
            title="Nossa Solução"
            subtitle="Como usamos IA generativa para fazer uma inteligente análise dos recursos pra sua empresa?"
            href="#"
            proportion={80}
            icon={<Lightbulb size={60} />}
            className="col-span-2 row-span-2 rounded-bl-[108px]"
          />
          <HelpCard
            title="Contratos"
            subtitle="Veja com quais empresas a SoftTarck tem contratos"
            href="#"
            icon={<Newspaper />}
            className="rounded-tr-[108px]"
            proportion={40}
          />
          <HelpCard
            title="Quem somos nós?"
            subtitle="Conheça as personalidades que formam o time SoftTrack"
            proportion={60}
            href="#"
            icon={<CircleHelp size={40}/>}
            className="row-span-2 rounded-tr-[108px]"
          />
          <HelpCard
            title="Equipes"
            subtitle="Quer conhecer as equipes que trabalham conosco?"
            proportion={40}
            href="#"
            icon={<Users />}
            className="rounded-bl-[108px]"
          />
        </div>
      </div>
    </>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  proportion: number;
  href: string;
  className?: string;
}

const HelpCard = ({
  title,
  subtitle,
  icon,
  href,
  className,
  proportion,
}: CardType) => {
  return (
    <a
      href={href}
      className={cn(
        "w-full h-full p-4 rounded relative overflow-hidden group bg-white border-2 border-black px-6 py-3 font-semibold translate-x-[-8px] translate-y-[-8px] shadow-[8px_8px_0px_black]",
        className
      )}
    >
      <div className="absolute inset-0 bg-roxo translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-400 text-white flex items-center justify-center">
        <ArrowUpRight size={proportion} />
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
