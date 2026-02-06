"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

/**
 * Navigation links as per strict requirements.
 */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "chips", href: "/chips" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /**
   * Entry Animation
   */
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );
  }, []);

  /**
   * Morphing Logic: Pill -> Panel
   */
  useGSAP(() => {
    if (!pillRef.current) return;

    if (isOpen) {
      // Expanded State
      gsap.to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(pillRef.current, {
        width: "min(380px, 94%)",
        height: "600px",
        borderRadius: "40px",
        scale: 1,
        duration: 0.6,
        ease: "expo.inOut",
      });

      gsap.to(desktopContentRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(desktopContentRef.current, { display: "none" });
        },
      });

      gsap.set(mobileContentRef.current, { display: "flex", opacity: 0, y: 40 });
      gsap.to(mobileContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "expo.out",
      });
    } else {
      // Collapsed State
      gsap.to(overlayRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
        ease: "power1.inOut",
      });

      gsap.to(mobileContentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(mobileContentRef.current, { display: "none" });
        },
      });

      const isDesktop = window.innerWidth >= 768;
      gsap.to(pillRef.current, {
        width: isDesktop ? "540px" : "180px", // Fixed widths for smoother feel
        height: "56px",
        borderRadius: "99px",
        scale: 1,
        duration: 0.6,
        ease: "expo.inOut",
      });

      gsap.set(desktopContentRef.current, { display: "flex", opacity: 0, y: -10 });
      gsap.to(desktopContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "expo.out",
      });
    }
  }, [isOpen]);

  // Adjust width on resize if not open
  useEffect(() => {
    const handleResize = () => {
      if (!isOpen && pillRef.current) {
        gsap.set(pillRef.current, {
          width: window.innerWidth >= 768 ? "540px" : "180px",
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      {/* Dim Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 invisible z-40 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />

      {/* Navbar Root */}
      <nav
        ref={containerRef}
        className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
      >
        <div
          ref={pillRef}
          className="pointer-events-auto relative bg-linear-to-b from-white/50 to-white/20 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-none"
          style={{ width: "540px", height: "56px", borderRadius: "99px" }}
        >
          {/* DESKTOP / COLLAPSED VIEW */}
          <div
            ref={desktopContentRef}
            className="h-14 flex items-center justify-between px-6 whitespace-nowrap"
          >
            <Link
              href="/"
              className="font-sans font-medium text-zinc-900 text-lg tracking-tight select-none pt-0.5"
            >
              Alan Chips
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-900/50 hover:text-zinc-900 transition-opacity duration-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-1 text-zinc-900 active:scale-90 transition-transform"
              aria-label="Open Navigation"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* MOBILE EXPANDED PANEL */}
          <div
            ref={mobileContentRef}
            className="hidden absolute inset-0 flex-col p-8 opacity-0"
          >
            {/* Expanded Header */}
            <div className="flex justify-between items-center mb-16">
              <span className="font-sans font-medium text-zinc-900 text-lg tracking-tight">
                Alan Chips
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-zinc-900 active:scale-95 transition-transform"
                aria-label="Close Navigation"
              >
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>

            {/* Links Stack */}
            <div className="flex flex-col gap-6 mb-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[2.75rem] leading-none font-bold tracking-tighter text-zinc-900 hover:text-zinc-400 transition-colors duration-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer Section in Panel */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900/5">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
                  Visit
                </span>
                <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                  Studio 12, Main Street,
                  <br />
                  South Tamil Nadu.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
                  Connect
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="mailto:hello@alanchips.com"
                    className="text-sm text-zinc-600 font-medium hover:text-zinc-900 transition-colors"
                  >
                    hello@alanchips.com
                  </a>
                  <Link
                    href="/contact"
                    className="text-sm text-zinc-900 font-semibold underline underline-offset-4 decoration-zinc-900/20"
                  >
                    Schedule call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
