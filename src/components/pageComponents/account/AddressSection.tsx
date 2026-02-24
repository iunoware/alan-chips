"use client";

import React from "react";
import { Plus, MapPin, Trash2, Edit2 } from "lucide-react";

const addresses = [
  {
    id: 1,
    name: "Home",
    phone: "+91 98765 43210",
    address: "123, Snack Avenue, Foodie Colony, Chennai, Tamil Nadu - 600001",
    isDefault: true,
  },
  {
    id: 2,
    name: "Office",
    phone: "+91 98765 43210",
    address: "45, Corporate Tech Park, OMR, Chennai, Tamil Nadu - 600096",
    isDefault: false,
  },
];

const AddressSection = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold text-zinc-900">
          Saved Addresses
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-orange/30 active:scale-95 transition-all">
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="group bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 hover:border-orange/30 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            {addr.isDefault && (
              <div className="absolute top-0 right-0 bg-orange/10 text-orange text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Default
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-orange/5 group-hover:border-orange/10 transition-colors">
                <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-orange transition-colors" />
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold font-serif text-xl text-zinc-900">
                    {addr.name}
                  </h3>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                    {addr.address}
                  </p>
                  <p className="text-sm text-zinc-400">{addr.phone}</p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-zinc-600 text-xs font-semibold rounded-lg hover:bg-zinc-100 transition-colors border border-zinc-100">
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-red-500 text-xs font-semibold rounded-lg hover:bg-red-50 transition-colors border border-red-50">
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressSection;
