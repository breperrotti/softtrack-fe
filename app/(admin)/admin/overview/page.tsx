"use client";

import React from "react";
import { AdminBanner } from "@/components/admin-banner";
import { BentoGridDemo } from "@/components/demo";

const OverviewPage = () => {
  return (
    <div>
      <AdminBanner title="Visão Geral"/>
      <div className="p-6 w-full">
        <BentoGridDemo />
      </div>
    </div>
  );
};

export default OverviewPage;