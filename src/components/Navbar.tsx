// "use client";

// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { Menu, X } from "lucide-react";

// /**
//  * Navigation links as per strict requirements.
//  */
// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "chips", href: "/chips" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const pillRef = useRef<HTMLDivElement>(null);
//   const desktopContentRef = useRef<HTMLDivElement>(null);
//   const mobileContentRef = useRef<HTMLDivElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);

//   /**
//    * Entry Animation
//    */
//   useGSAP(() => {
//     gsap.fromTo(
//       containerRef.current,
//       { y: -30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
//     );
//   }, []);

//   /**
//    * Morphing Logic: Pill -> Panel
//    */
//   useGSAP(() => {
//     if (!pillRef.current) return;

//     if (isOpen) {
//       // Expanded State
//       gsap.to(overlayRef.current, {
//         opacity: 1,
//         visibility: "visible",
//         duration: 0.4,
//         ease: "power2.inOut",
//       });

//       gsap.to(pillRef.current, {
//         width: "min(380px, 94%)",
//         height: "600px",
//         borderRadius: "40px",
//         scale: 1,
//         duration: 0.6,
//         ease: "expo.inOut",
//       });

//       gsap.to(desktopContentRef.current, {
//         opacity: 0,
//         y: -10,
//         duration: 0.3,
//         ease: "power2.inOut",
//         onComplete: () => {
//           gsap.set(desktopContentRef.current, { display: "none" });
//         },
//       });

//       gsap.set(mobileContentRef.current, { display: "flex", opacity: 0, y: 40 });
//       gsap.to(mobileContentRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.7,
//         delay: 0.3,
//         ease: "expo.out",
//       });
//     } else {
//       // Collapsed State
//       gsap.to(overlayRef.current, {
//         opacity: 0,
//         visibility: "hidden",
//         duration: 0.3,
//         ease: "power1.inOut",
//       });

//       gsap.to(mobileContentRef.current, {
//         opacity: 0,
//         y: 20,
//         duration: 0.3,
//         ease: "power2.inOut",
//         onComplete: () => {
//           gsap.set(mobileContentRef.current, { display: "none" });
//         },
//       });

//       const isDesktop = window.innerWidth >= 768;
//       gsap.to(pillRef.current, {
//         width: isDesktop ? "540px" : "180px", // Fixed widths for smoother feel
//         height: "56px",
//         borderRadius: "99px",
//         scale: 1,
//         duration: 0.6,
//         ease: "expo.inOut",
//       });

//       gsap.set(desktopContentRef.current, { display: "flex", opacity: 0, y: -10 });
//       gsap.to(desktopContentRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         delay: 0.3,
//         ease: "expo.out",
//       });
//     }
//   }, [isOpen]);

//   // Adjust width on resize if not open
//   useEffect(() => {
//     const handleResize = () => {
//       if (!isOpen && pillRef.current) {
//         gsap.set(pillRef.current, {
//           width: window.innerWidth >= 768 ? "540px" : "180px",
//         });
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isOpen]);

//   return (
//     <>
//       {/* Dim Overlay */}
//       <div
//         ref={overlayRef}
//         className="fixed inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 invisible z-40 cursor-pointer"
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Navbar Root */}
//       <nav
//         ref={containerRef}
//         className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
//       >
//         <div
//           ref={pillRef}
//           className="pointer-events-auto relative bg-linear-to-b from-white/50 to-white/20 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-none"
//           style={{ width: "540px", height: "56px", borderRadius: "99px" }}
//         >
//           {/* DESKTOP / COLLAPSED VIEW */}
//           <div
//             ref={desktopContentRef}
//             className="h-14 flex items-center justify-between px-6 whitespace-nowrap"
//           >
//             <Link
//               href="/"
//               className="font-sans font-medium text-zinc-900 text-lg tracking-tight select-none pt-0.5"
//             >
//               Alan Chips
//             </Link>

//             {/* Desktop Links */}
//             <div className="hidden md:flex items-center gap-10">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-sm font-medium text-zinc-900/50 hover:text-zinc-900 transition-opacity duration-400"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setIsOpen(true)}
//               className="md:hidden p-1 text-zinc-900 active:scale-90 transition-transform"
//               aria-label="Open Navigation"
//             >
//               <Menu size={20} strokeWidth={1.5} />
//             </button>
//           </div>

//           {/* MOBILE EXPANDED PANEL */}
//           <div
//             ref={mobileContentRef}
//             className="hidden absolute inset-0 flex-col p-8 opacity-0"
//           >
//             {/* Expanded Header */}
//             <div className="flex justify-between items-center mb-16">
//               <span className="font-sans font-medium text-zinc-900 text-lg tracking-tight">
//                 Alan Chips
//               </span>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-1 text-zinc-900 active:scale-95 transition-transform"
//                 aria-label="Close Navigation"
//               >
//                 <X size={24} strokeWidth={1.2} />
//               </button>
//             </div>

//             {/* Links Stack */}
//             <div className="flex flex-col gap-6 mb-auto">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-[2.75rem] leading-none font-bold tracking-tighter text-zinc-900 hover:text-zinc-400 transition-colors duration-400"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Footer Section in Panel */}
//             <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900/5">
//               <div className="flex flex-col gap-2">
//                 <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
//                   Visit
//                 </span>
//                 <p className="text-sm text-zinc-600 font-medium leading-relaxed">
//                   Studio 12, Main Street,
//                   <br />
//                   South Tamil Nadu.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
//                   Connect
//                 </span>
//                 <div className="flex flex-col gap-1.5">
//                   <a
//                     href="mailto:hello@alanchips.com"
//                     className="text-sm text-zinc-600 font-medium hover:text-zinc-900 transition-colors"
//                   >
//                     hello@alanchips.com
//                   </a>
//                   <Link
//                     href="/contact"
//                     className="text-sm text-zinc-900 font-semibold underline underline-offset-4 decoration-zinc-900/20"
//                   >
//                     Schedule call
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// new navbar

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Chips", href: "/chips" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const ternary =
        currentScrollY > lastScrollY && currentScrollY > 80
          ? setShowNavbar(false)
          : setShowNavbar(true);

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    tl.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1 }).fromTo(
      [logoRef.current, linksRef.current, ctaRef.current, burgerRef.current],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.1 },
      "-=0.8",
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(mobileMenuRef.current, { display: "flex", opacity: 0 });

      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.fromTo(
        mobileLinksRef.current,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
          duration: 0.8,
        },
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          showNavbar ? "translate-y-0" : "-translate-y-full!"
        } fixed top-0 z-50 w-full h-16 md:h-18 bg-white shadow-lg transition-all duration-300`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Left: Brand Name */}
          <div ref={logoRef} className="shrink-0">
            <Link href="/">
              <Image
                src="/images/alan-chips-logo-1.png"
                alt="Ambience and table setting at Chopstix"
                width={140}
                height={60}
                className="w-auto md:h-18 h-6"
              />
            </Link>
          </div>

          {/* Center/Right: Navigation Links (Desktop) */}
          <div ref={linksRef} className="hidden items-center space-x-12 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative font-sans text-[15px] font-medium tracking-wide text-black"
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-green transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Far Right: CTA (Desktop) */}
          {/* <div ref={ctaRef} className="hidden md:block">
            <a
              href="https://maps.app.goo.gl/jBX9HGtHyhLxGoj28"
              target="_blank"
              className="group relative font-sans text-[15px] font-medium tracking-wide text-black"
            >
              Visit Us &rarr;
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </div> */}

          {/* Mobile Menu Button - Hamburger + Label */}
          <button
            ref={burgerRef}
            onClick={toggleMenu}
            className="relative z-999 flex items-center space-x-3 focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-black uppercase transition-all duration-300">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col items-end space-y-1.5">
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  isOpen ? "w-6 translate-y-1.75 rotate-45" : "w-6"
                }`}
              />
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  isOpen ? "w-6 -translate-y-1.75 -rotate-45" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-55 mt-16 hidden h-screen w-screen flex-col items-center justify-center bg-white/30 backdrop-blur-lg"
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col -mt-20 items-center space-y-8 px-6 text-center">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  ref={(el) => {
                    mobileLinksRef.current[index] = el;
                  }}
                  className="group relative block font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-brand-red transition-all duration-500 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </div>
            );
          })}

          {/* <div
            className="pt-10"
            ref={(el) => {
              mobileLinksRef.current[navLinks.length] = el;
            }}
          >
            <a
              href="https://maps.app.goo.gl/jBX9HGtHyhLxGoj28"
              target="_blank"
              onClick={toggleMenu}
              className="group relative font-sans text-sm font-medium tracking-[0.2em] text-black uppercase"
            >
              Visit Us &rarr;
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
