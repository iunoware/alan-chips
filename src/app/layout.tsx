import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
// import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

  // icons: {
  //   icon: [
  //     {
  //       media: "(prefers-color-scheme: light)",
  //       url: "/images/logo-light.png",
  //       href: "/images/logo-light.png",
  //     },
  //     {
  //       media: "(prefers-color-scheme: dark)",
  //       url: "/images/logo-dark.png",
  //       href: "/images/logo-dark.png",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
