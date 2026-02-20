"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, ChevronRight } from "lucide-react";
import AuthLayout from "@/components/pageComponents/auth/AuthLayout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Grab a bag of chips and log in to explore your favorite snacks."
    >
      <div className="flex overflow-x-clip! flex-col items-center lg:items-start text-center lg:text-left mb-10">
        <Image
          src="/images/alan-chips-logo-1.png"
          alt="Alan Chips Logo"
          width={120}
          height={50}
          className="mb-6 h-auto w-auto"
        />
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Welcome Back</h1>
        <p className="text-zinc-500">Please enter your details to sign in</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 ml-1">
            Email Address
          </label>
          <div className="relative group">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"
              size={20}
            />
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 ml-1">
            Password
          </label>
          <div className="relative group">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors"
              size={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full pl-12 pr-12 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
              checked={formData.rememberMe}
              onChange={(e) =>
                setFormData({ ...formData, rememberMe: e.target.checked })
              }
            />
            <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
              Remember me
            </span>
          </label>
          <Link
            href="/forgot-password"
            // size="sm"
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
        >
          Sign In
          <ChevronRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200"></div>
          </div>
          <span className="relative px-4 bg-white text-sm text-zinc-400 font-medium">
            OR
          </span>
        </div>

        <button
          type="button"
          className="w-full py-3.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold rounded-2xl transition-all flex items-center justify-center gap-3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5 12.2c0-.8-.1-1.6-.2-2.4H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6l3.8 3c2.2-2.1 3.5-5.2 3.6-8.7z"
              fill="#4285F4"
            />
            <path
              d="M12 24c3.2 0 6-1.1 8-3l-3.8-3c-1.1.7-2.5 1.2-4.2 1.2-3.1 0-5.7-2.1-6.7-5H1.5v3.1C3.5 21.1 7.5 24 12 24z"
              fill="#34A853"
            />
            <path
              d="M5.3 14.2c-.2-.7-.4-1.4-.4-2.2s.2-1.5.4-2.2V6.7H1.5C.5 8.7 0 10.3 0 12s.5 3.3 1.5 5.3l3.8-3.1z"
              fill="#FBBC05"
            />
            <path
              d="M12 4.8c1.7 0 3.3.6 4.5 1.7l3.4-3.4C17.9 1.2 15.2 0 12 0 7.5 0 3.5 2.9 1.5 6.7l3.8 3.1c1-2.9 3.6-5 6.7-5z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-zinc-600 mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-orange-600 hover:text-orange-700 hover:underline underline-offset-4 transition-all"
          >
            Create account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
