// app/(auth)/layout.jsx

import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-100 to-orange-200">
      <div className="w-full bg-white shadow-xl">{children}</div>
    </div>
  );
}
