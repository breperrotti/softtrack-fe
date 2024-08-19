"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import Avatar, { genConfig } from 'react-nice-avatar'

import { Navigation } from "./navigation";
import { TransitionLink } from "./transition-link";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center p-6 w-full",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-4">
        <Navigation />
        <TransitionLink href={"/admin/overview"}>
          <Button className="gap-x-2 items-center">
            <Lock size={17} />
            Admin
          </Button>
        </TransitionLink>
        <Avatar className="w-10 h-10" />
      </div>
    </div>
  );
};
