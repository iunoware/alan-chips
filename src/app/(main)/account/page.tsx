"use client";

import React, { useState, useEffect } from "react";
import DashboardSidebar, { DashboardTab } from "@/components/pageComponents/account/DashboardSidebar";
import ProfileSection from "@/components/pageComponents/account/ProfileSection";
import AddressSection from "@/components/pageComponents/account/AddressSection";
import OrderHistorySection from "@/components/pageComponents/account/OrderHistorySection";
import SettingsSection from "@/components/pageComponents/account/SettingsSection";

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<DashboardTab>("profile");

    // Scroll to top when tab changes on mobile for better UX
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return <ProfileSection />;
            case "addresses":
                return <AddressSection />;
            case "orders":
                return <OrderHistorySection />;
            case "settings":
                return <SettingsSection />;
            default:
                return <ProfileSection />;
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-zinc-50/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 text-zinc-900">
                    {/* Sidebar */}
                    <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
