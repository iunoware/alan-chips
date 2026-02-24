"use client";

import React, { useState } from "react";
import { Lock, Bell, Trash2, ShieldCheck, Mail } from "lucide-react";

const SettingsSection = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [promoEmail, setPromoEmail] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-2xl font-serif font-bold text-zinc-900 px-1">
        Account Settings
      </h2>

      {/* Security */}
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 divide-y divide-zinc-50">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-orange" />
            </div>
            <div>
              <h3 className="font-bold text- font-serif text-zinc-900">
                Security & Sign-in
              </h3>
              <p className="text-sm text-zinc-500">
                Manage your password and security settings
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all active:scale-95">
              <Lock className="w-4 h-4" />
              Change Password
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-700 border border-zinc-200 font-bold rounded-2xl hover:bg-zinc-50 transition-all active:scale-95">
              Two-Factor Auth
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-orange" />
            </div>
            <div>
              <h3 className="font-bold font-serif text-zinc-900">
                Notifications
              </h3>
              <p className="text-sm text-zinc-500">
                Choose how you want to be notified
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-400" />
                <div>
                  <p className="text-sm font-bold text-zinc-800">
                    Order Updates
                  </p>
                  <p className="text-xs text-zinc-500">
                    Get emails about your order status
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEmailNotif(!emailNotif)}
                className={`w-12 h-6 rounded-full transition-colors relative ${emailNotif ? "bg-orange" : "bg-zinc-300"}`}
              >
                <div
                  className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${emailNotif ? "left-7" : "left-1"}`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-zinc-400" />
                <div>
                  <p className="text-sm font-bold text-zinc-800">
                    News & Promotions
                  </p>
                  <p className="text-xs text-zinc-500">
                    Get updates on new snacks and offers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPromoEmail(!promoEmail)}
                className={`w-12 h-6 rounded-full transition-colors relative ${promoEmail ? "bg-orange" : "bg-zinc-300"}`}
              >
                <div
                  className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${promoEmail ? "left-7" : "left-1"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        {/* <div className="p-6 bg-red-50/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-red-600">Danger Zone</h3>
              <p className="text-sm text-red-500/70">
                Irreversible account actions
              </p>
            </div>
          </div>

          <button className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-red-500/20">
            Delete My Account
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SettingsSection;
