import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CardProps {
  image: string;
  name: string;
  description: string;
  github?: string;
  linkedin?: string;
}

export const TeamCard = ({
  image,
  name,
  description,
  github,
  linkedin,
}: CardProps) => {
  return (
    <div className="relative h-[300px] w-full group">
      <div className="flex h-1/2 flex-col justify-center bg-black p-6">
        <h2 className="mb-2 text-xl font-semibold text-white">{name}</h2>
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>
      <div className="absolute inset-0 z-10 bg-slate-200 transition-all ease-in-out duration-300 group-hover:right-1/2 group-hover:top-1/2">
        <img className="object-cover w-full h-full" src={image} alt={name} />
      </div>
      <div className="absolute bottom-0 right-0 z-0 grid h-1/2 w-1/2 place-content-center bg-white text-black">
        <div className="p-6 grid grid-cols-2 gap-2">
          <Button size={"icon"}>
            <Instagram />
          </Button>
          <Button size={"icon"}>
            <Linkedin />
          </Button>
          <Button className="col-span-2">
            <Link href={github ? `https://github.com/${github}` : "#"}>
              <Github />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
