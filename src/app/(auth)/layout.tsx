// app/(auth)/layout.jsx

import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-linear-to-br from-yellow-100 to-orange-200">
      <div className="w-full  bg-white shadow-xl p-8">{children}</div>
    </div>
  );
}
