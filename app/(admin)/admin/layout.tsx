"use client";

import { AdminHeader } from "@/components/admin-header";
import { AdminNavigation } from "@/components/admin-navigation";
import { Toaster } from "@/components/ui/toaster";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row">
      <AdminNavigation />
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <AdminHeader />
        <main className="flex-1">{children}</main>
        <Toaster />
      </div>
    </div>
  );
};

export default AdminLayout;
