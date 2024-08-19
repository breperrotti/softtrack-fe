"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowUpRight, Bell, CircleHelp, Home, LineChart, Newspaper, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string
}

export const AdminNavigation = ({className}: NavigationProps) => {

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
      icon: <Newspaper className="h-6 w-6" />
    },
    {
      name: "Equipes",
      path: "/admin/equipes",
      icon: <Users className="h-6 w-6" />
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

  const currentPath = usePathname()

  return (
    <div className={`hidden border-r bg-muted/40 md:block ${className}`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-3xl">SoftTrack</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 lg:mt-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all mt-1 ${
                  currentPath === route.path ? "bg-roxoClaro text-white hover:bg-roxo" : "hover:text-black hover:bg-lilas"
                }`}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4">
          <Card className="mt-[125%]">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Sobre SoftTrack</CardTitle>
              <CardDescription>
                Otimizando a Gestão de Projetos com Tecnologia de Ponta.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Docs
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};