"use client";

import { AdminNavigation } from "@/components/admin-navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileNavigation } from "@/components/admin-mobile-navigation";
import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/transition-link";
import Avatar from 'react-nice-avatar'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {



  return (
    <>
      <div className="fixed inset-0 flex flex-col md:flex-row">
        <AdminNavigation className="fixed w-220 md:w-[280px]" />
        <div className="flex flex-1 flex-col overflow-hidden md:ml-[220px] lg:ml-[280px]">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 fixed w-full top-0 left-0 md:left-[220px] lg:left-[280px] z-10">
            <Sheet>
              <SheetTrigger>
                <div className="shrink-0 md:hidden">
                  <Menu className="h-5 w-5" />
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <MobileNavigation />
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <p>
                Pressione{" "}
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[12px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">Ctrl</span> + K
                </kbd>{" "}
                para pesquisar qualquer informação ná página.
              </p>
            </div>
            <div className="flex items-center gap-x-4 absolute justify-end xl:w-384 lg:w-96">
              <TransitionLink href="/">
                <Button size={"sm"}> Voltar à página principal</Button>
              </TransitionLink>
              <Avatar className="w-10 h-10" />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto lg:pt-[60px]">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
