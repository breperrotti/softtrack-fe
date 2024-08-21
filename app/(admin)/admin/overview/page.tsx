"use client";

import React from "react";
import { AdminBanner } from "@/components/admin-banner";
import { OverviewDashboard } from "@/components/overview-dashboard";

const OverviewPage = () => {

  return (
    <div>
      <AdminBanner title="Visão Geral" />
        <div className="p-6 w-full">
          <OverviewDashboard />
        </div>
    </div>
  );
};

export default OverviewPage;
