"use client";

import React from "react";
import { Edit2, Mail, Phone, User } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-green/10 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
              <User className="w-16 h-16 text-green" />
            </div>
            <button className="absolute bottom-1 right-1 p-2 bg-green text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          {/* User Details */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h1 className="text-3xl font-serif font-bold text-zinc-900">
                Alan Walker
              </h1>
              <p className="text-zinc-500">Snack Enthusiast since 2024</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Mail className="w-5 h-5 text-orange" />
                <div className="text-left">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-zinc-800 font-medium">alan@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <Phone className="w-5 h-5 text-orange" />
                <div className="text-left">
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                    Mobile Number
                  </p>
                  <p className="text-zinc-800 font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-orange text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-orange/30 active:scale-95 transition-all">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Stats or additional card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: "Total Orders",
            value: "12",
            color: "bg-blue-50 text-blue-600",
          },
          {
            label: "Pending Orders",
            value: "2",
            color: "bg-orange-50 text-orange-600",
          },
          {
            label: "Points Earned",
            value: "450",
            color: "bg-green-50 text-green-600",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 text-center"
          >
            <p className="text-zinc-500 text-sm font-medium mb-1">
              {stat.label}
            </p>
            <p className={`text-2xl font-bold ${stat.color.split(" ")[1]}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
