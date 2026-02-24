import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel_Decorative, Poppins } from "next/font/google";
import "./globals.css";
// import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Cta from "@/components/Cta";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  weight: "400",
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Chips",
  description: "Alan Chips",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${poppins.variable} antialiased`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
