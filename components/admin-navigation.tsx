"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ChevronsLeft,
  ChevronsRight,
  CircleHelp,
  Home,
  LineChart,
  Newspaper,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./transition-link";

interface NavigationProps {
  className?: string;
}

export const AdminNavigation = ({ className }: NavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const routes = [
    {
      name: "Visão Geral",
      path: "/admin/overview",
      icon: <Home className="h-6 w-6" />,
    },
    {
      name: "Análise",
      path: "/admin/analise",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      name: "Contratos",
      path: "/admin/contratos",
      icon: <Newspaper className="h-6 w-6" />,
    },
    {
      name: "Equipes",
      path: "/admin/equipes",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Configurações",
      path: "/admin/settings",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      name: "Ajuda",
      path: "/admin/help",
      icon: <CircleHelp className="h-6 w-6" />,
    },
  ];

  const currentPath = usePathname();

  return (
    <div
      className={`hidden border-r bg-muted/40 md:block ${className} ${
        isExpanded ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {isExpanded && <span className="text-3xl">SoftTrack</span>}
          </Link>
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronsLeft /> : <ChevronsRight />}
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 lg:mt-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all mt-1 ${
                  currentPath === route.path
                    ? "bg-roxoClaro text-white shadow-2xl hover:bg-roxo"
                    : "hover:text-black hover:bg-lilas"
                }`}
              >
                {route.icon}
                {isExpanded && route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4">
          <TransitionLink href="/">
            <Button size="sm" className="w-full">
              <span className="text-xs">
                {isExpanded ? (
                  `Voltar para a página principal`
                ) : (
                  <ArrowUpRight />
                )}
              </span>
            </Button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
};
