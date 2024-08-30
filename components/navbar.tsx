// components/navbar.tsx
"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Lock, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

import { Navigation } from "./navigation";
import { TransitionLink } from "./transition-link";
import { NavigationMobile } from "./navigation-mobile"; // Importar o novo componente

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center p-4 w-full",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center flex-wrap gap-x-4">
        <Navigation className="hidden md:flex" /> {/* Mostrar apenas em telas maiores */}
        <NavigationMobile /> {/* Mostrar apenas em telas menores */}
        <TransitionLink href={"/admin/overview"}>
          <Button className="gap-x-2 items-center whitespace-nowrap">
            <Lock size={17} />
            Admin
          </Button>
        </TransitionLink>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-700 flex items-center justify-center text-white">
          <User />
        </div>
      </div>
    </div>
  );
};

