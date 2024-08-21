"use client";

import { AdminNavigation } from "@/components/admin-navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 flex flex-col md:flex-row">
      <AdminNavigation />
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
