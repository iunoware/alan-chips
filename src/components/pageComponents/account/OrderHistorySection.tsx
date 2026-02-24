"use client";

import React from "react";
import { Package, ChevronRight, RefreshCw, Eye } from "lucide-react";

const orders = [
  {
    id: "#ALN-98234",
    date: "Feb 12, 2024",
    items: 4,
    total: "$42.50",
    status: "Delivered",
  },
  {
    id: "#ALN-98112",
    date: "Jan 15, 2024",
    items: 2,
    total: "$18.20",
    status: "Delivered",
  },
  {
    id: "#ALN-98001",
    date: "Dec 30, 2023",
    items: 6,
    total: "$65.00",
    status: "Processing",
  },
];

const OrderHistorySection = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-2xl font-serif font-bold text-zinc-900 px-1">
        Order History
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="group bg-white p-5 md:p-6 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-orange/5 transition-colors">
                  <Package className="w-6 h-6 text-zinc-400 group-hover:text-orange transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold font-serif text-zinc-900 text-md">
                    {order.id}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    {order.date}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 flex-1 md:justify-items-center">
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">
                    Items
                  </p>
                  <p className="text-zinc-800 font-bold">{order.items} Packs</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">
                    Total
                  </p>
                  <p className="text-zinc-800 font-bold">{order.total}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">
                    Status
                  </p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 text-white text-sm font-bold rounded-xl hover:bg-zinc-800 transition-all active:scale-95">
                  <Eye className="w-4 h-4" />
                  Details
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-orange/10 text-orange text-sm font-bold rounded-xl hover:bg-orange/20 transition-all active:scale-95">
                  <RefreshCw className="w-4 h-4" />
                  Reorder
                </button>
              </div>
            </div>

            {/* Mobile Status */}
            <div className="mt-4 pt-4 border-t border-zinc-50 md:hidden flex items-center justify-between">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {order.status}
              </span>
              <ChevronRight className="w-5 h-5 text-zinc-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistorySection;
