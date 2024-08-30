"use client";

import { AdminHeader } from "@/components/admin-header";
import { AdminNavigation } from "@/components/admin-navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row">
      <AdminNavigation className="w-full md:w-auto" />
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
