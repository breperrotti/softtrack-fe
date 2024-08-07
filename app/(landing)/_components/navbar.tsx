"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Navigation } from "./navigation";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isSignedIn } = useUser();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-4">
      <Navigation />
        {!isSignedIn && (
          <>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div>
                  <Button disabled className="gap-x-2 items-center">
                    <Lock size={17} />
                    Admin
                  </Button>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="border border-solid p-4 rounded-lg mt-2">
                <h4 className="text-sm font-semibold text-center">
                  Faça Login para acessar essa seção
                </h4>
              </HoverCardContent>
            </HoverCard>
            <SignInButton>
              <Button>Crie sua conta SoftTrack</Button>
            </SignInButton>
          </>
        )}
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-9 h-9",
            },
          }}
        />
      </div>
    </div>
  );
};
