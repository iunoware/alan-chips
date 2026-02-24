"use client";

import React from "react";
import {
    User,
    MapPin,
    History,
    Settings,
    LogOut
} from "lucide-react";

export type DashboardTab = "profile" | "addresses" | "orders" | "settings";

interface SidebarProps {
    activeTab: DashboardTab;
    setActiveTab: (tab: DashboardTab) => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: "profile", label: "Profile Info", icon: User },
        { id: "addresses", label: "My Addresses", icon: MapPin },
        { id: "orders", label: "Order History", icon: History },
        { id: "settings", label: "Account Settings", icon: Settings },
    ] as const;

    return (
        <aside className="w-full md:w-[280px] flex flex-col gap-2">
            <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 p-4 md:p-6 sticky top-24">
                {/* Desktop Title */}
                <h2 className="hidden md:block text-xl font-bold text-zinc-800 mb-6 px-2">Account Dashboard</h2>

                {/* Menu Items */}
                <nav className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 whitespace-nowrap group ${activeTab === item.id
                                    ? "bg-orange/10 text-orange font-semibold"
                                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800"
                                }`}
                        >
                            <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${activeTab === item.id ? "text-orange" : "text-zinc-400 group-hover:text-zinc-600"
                                }`} />
                            <span>{item.label}</span>
                        </button>
                    ))}

                    <div className="h-px bg-zinc-100 my-2 mx-2 hidden md:block" />

                    <button
                        onClick={() => console.log("Logout")} // Replace with actual logout logic
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-300 whitespace-nowrap group"
                    >
                        <LogOut className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        <span>Logout</span>
                    </button>
                </nav>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
