import Image from "next/image";

export const Mission = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 border-2 border-lilas rounded-3xl">
        <div className="h-128 bg-[#C5BBFF] rounded-2xl flex justify-center p-12">
          <span className="text-5xl font-bold text-white">
            Transformamos <span className="underline">Dados</span> em Decisões
            Inteligentes
          </span>
        </div>
        <div className="-mt-[24.5%] flex gap-x-8">
          <Image
            src={"/illustrations/illustration 19.svg"}
            alt="Illsutação 2"
            width={250}
            height={400}
          />
          <Image
            src={"/illustrations/illustration 20.svg"}
            alt="Illsutação 2"
            width={250}
            height={400}
          />
          <Image
            src={"/illustrations/illustration 13.svg"}
            alt="Illsutação 2"
            width={250}
            height={400}
          />
          <Image
            src={"/illustrations/illustration 10.svg"}
            alt="Illsutação 2"
            width={250}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
