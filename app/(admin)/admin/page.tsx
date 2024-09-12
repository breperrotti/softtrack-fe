"use client";

import React, { useEffect, useState } from "react";
import { OverviewDashboard } from "@/components/overview-dashboard";
import { AdminBanner } from "@/components/admin-banner";

const AdminPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <AdminBanner title="Painel Administrador" />
            <div className="p-4 sm:p-6 w-full">
                <OverviewDashboard />
            </div>
        </div>
    );
};

export default AdminPage;