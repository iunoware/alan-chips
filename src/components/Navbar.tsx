"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Chips", href: "/chips" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [showNavbar, setShowNavbar] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    tl.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, clearProps: "all" },
    ).fromTo(
      [logoRef.current, linksRef.current, ctaRef.current],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.1 },
      "-=0.8",
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 z-100 w-full h-16 md:h-18 bg-white shadow-lg transition-transform duration-300`}
      >
        <div className="flex h-full mx-auto max-w-360 items-center justify-between px-6 md:px-8">
          {/* Left: Brand Name */}
          <div
            ref={logoRef}
            className="shrink-0 flex items-center justify-center"
          >
            <Link href="/">
              <Image
                src="/images/alan-chips-logo-1.png"
                alt="Alan Chips Logo"
                width={120}
                height={60}
                className="w-auto p-1.5 h-10 md:h-16"
              />
            </Link>
          </div>

          {/* Center/Right: Navigation Links (Desktop) */}
          <div
            ref={linksRef}
            className="hidden justify-center items-center space-x-12 lg:flex"
          >
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

          {/* Desktop Right CTA */}
          <div ref={ctaRef} className="hidden lg:flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-black hover:text-[#d4af37] transition-colors"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37] text-[10px] font-bold text-white shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="relative p-2 text-black hover:text-[#d4af37] transition-colors"
              title="My Account"
            >
              <User size={22} strokeWidth={2} />
            </Link>

            <Link
              href="/login"
              className="ml-2 px-6 py-2.5 bg-black text-white text-[15px] font-bold rounded-full hover:bg-[#d4af37] hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Right: Cart + Toggle */}
          <div className="flex lg:hidden items-center justify-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-black active:scale-90 transition-transform"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37] text-[10px] font-bold text-white shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMenu}
              className="relative z-1050 flex items-center p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col items-end space-y-1.25">
                <span className="h-0.5 bg-black transition-all duration-300 w-6" />
                <span className="h-0.5 bg-black transition-all duration-300 w-4" />
                <span className="h-0.5 bg-black transition-all duration-300 w-6" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-1040 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-1050 h-full w-[85vw] max-w-100 bg-[#fdfbf7] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] border-l border-[#d4af37]/20 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#d4af37]/15">
          <span className="font-serif text-xl text-black tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-black hover:text-[#d4af37] transition-colors focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col p-8 grow overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative inline-block font-serif text-3xl font-medium tracking-tight text-black transition-colors hover:text-[#d4af37]"
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-500 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-10 flex flex-col space-y-4">
            <Link
              href="/account"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-8 py-4 bg-transparent border border-black text-black text-lg font-bold rounded-full transition-all hover:bg-[#f3f0e8] active:scale-95"
            >
              My Account
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-8 py-4 bg-black text-white text-lg font-bold rounded-full shadow-lg transition-all hover:bg-[#d4af37] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d4af37]/40 active:scale-95"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
