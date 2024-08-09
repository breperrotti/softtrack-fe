import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="flex justify-center">
      <section className="pb-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <Badge className="bg-lilas rounded-none rounded-br-2xl rounded-tl-2xl">
              SoftTrack
            </Badge>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              Transformamos <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-roxo to-roxoClaro">
                dados
              </span>{" "}
              em soluções{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-roxoClaro">
                Inteligentes
              </span>
            </h2>
            <p>
              Utilizando a inteligência dos dados para alcançar novos patamares
              de sucesso. Com a SofTrack, cada decisão é guiada por insights
              precisos, ajudando sua empresa a explorar novas oportunidades e
              garantir um crescimento competitivo.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Button>Quero saber mais</Button>
              <Button variant={"outline"} className="gap-x-2 font-bold">
                Crie sua conta <ChevronRight size={22} />
              </Button>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl bg-roxoClaro h-[370px] w-128 flex items-center justify-center rounded-tl-[108px]">
              <p className="font-bold text-white">Imagem ou Animação</p>
          </div>
        </div>
      </section>
    </div>
  );
};
