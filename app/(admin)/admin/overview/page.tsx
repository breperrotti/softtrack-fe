"use client";

import React from "react";
import { OverviewDashboard } from "@/components/overview-dashboard";
import { AdminBanner } from "@/components/admin-banner";

const OverviewPage = () => {

  return (
    <div className="bg-gray-100">
      <AdminBanner title="Painel Administrador"/>
        <div className="p-6 w-full">
          <OverviewDashboard />
        </div>
    </div>
  );
};

export default OverviewPage;
