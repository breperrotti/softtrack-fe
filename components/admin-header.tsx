"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TransitionLink } from "./transition-link";
import { Home } from "lucide-react";

export const AdminHeader = () => {
  return (
    <header className="bg-muted/40 h-[3.75rem] border-b w-full">
      <div className="w-full h-full flex justify-between items-center p-4 sm:p-6">
        <Input
          className="min-w-6 max-w-full sm:max-w-144"
          placeholder="Pesquise por alguma coisa..."
        />
        <TransitionLink href="/">
          <Button size="sm" className="ml-4">
            <span className="hidden sm:inline text-sm">
              Voltar para a página principal
            </span>
            <Home className="sm:hidden" />
          </Button>
        </TransitionLink>
      </div>
    </header>
  );
};
