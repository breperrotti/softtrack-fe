"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Lock, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

import { Navigation } from "./navigation";
import { TransitionLink } from "./transition-link";
import { NavigationMobile } from "./navigation-mobile";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center justify-between p-4 w-full",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center justify-between w-full md:w-auto">
        <Navigation className="hidden md:flex mr-2" />
        <div className="flex items-center justify-around gap-x-2 md:gap-x-4 w-full">
          <NavigationMobile />
          <TransitionLink href={"/admin"}>
            <Button className="gap-x-1 md:gap-x-2 items-center whitespace-nowrap text-sm md:text-base">
              <Lock size={16} />
              Admin
            </Button>
          </TransitionLink>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-700 flex items-center justify-center text-white">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};


