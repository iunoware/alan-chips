// /* eslint-disable @typescript-eslint/no-unused-vars */
// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Cinzel_Decorative, Poppins } from "next/font/google";
// import "./globals.css";
// // import Sidebar from "@/components/Sidebar";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Cta from "@/components/Cta";
// // import SmoothScrollProvider from "@/components/SmoothScrollProvider";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-poppins",
//   subsets: ["latin"],
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const cinzelDecorative = Cinzel_Decorative({
//   weight: "400",
//   variable: "--font-cinzel-decorative",
//   subsets: ["latin"],
// });

// // app/page.js

// export const metadata = {
//   title: "Alan Chips | Premium Crispy Potato Chips & Tasty Snacks",
//   description:
//     "Discover Alan Chips for crispy potato chips, delicious flavors, quality ingredients, and fresh snacks made for every craving. Taste the crunch everyone loves.",

//   // google verification
//   verification: {
//     google: "SyqnaXv6cRlofSH9oTaSs0kGzwtcsdIjHOYQ7q5_3JE",
//   },
//   // conical tag
//   metadataBase: new URL("https://alanchips.com/"),
// };

// import { CartProvider } from "@/context/CartContext";

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${poppins.variable} antialiased`}
// //       >
// //         <main className="">{children}</main>
// //       </body>
// //     </html>
// //   );
// // }

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${poppins.variable} antialiased`}
//       >
//         <CartProvider>
//           {/* <Navbar /> */}
//           {children}
//           {/* <Cta /> */}
//           {/* <Footer /> */}
//         </CartProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel_Decorative, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const cinzelDecorative = Cinzel_Decorative({
  weight: "400",
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alan Chips | Premium Crispy Potato Chips & Tasty Snacks",
  description:
    "Discover Alan Chips for crispy potato chips, delicious flavors, quality ingredients, and fresh snacks made for every craving. Taste the crunch everyone loves.",
  verification: { google: "SyqnaXv6cRlofSH9oTaSs0kGzwtcsdIjHOYQ7q5_3JE" },
  metadataBase: new URL("https://alanchips.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${poppins.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
