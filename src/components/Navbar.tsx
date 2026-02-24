"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Chips", href: "/chips" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { totalItems } = useCart();
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

    tl.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1 },
    ).fromTo(
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
        } fixed top-0 z-100 w-full h-16 md:h-18 bg-white shadow-lg transition-all duration-300`}
      >
        <div className="flex h-full mx-auto max-w-8xl items-center justify-around px-6 md:px-0">
          {/* Left: Brand Name */}
          <div
            ref={logoRef}
            className="shrink-0 flex items-center justify-center"
          >
            <Link href="/">
              <Image
                src="/images/alan-chips-logo-1.png"
                alt="Ambience and table setting at Chopstix"
                width={120}
                height={60}
                className="w-auto p-1.5 md:h-18 h-6"
              />
            </Link>
          </div>

          {/* Center/Right: Navigation Links (Desktop) */}
          <div
            ref={linksRef}
            className="hidden justify-center items-center space-x-12 md:flex"
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

          {/* Cart Button */}
          <div className="flex space-x-2">
            <Link
              href="/cart"
              className="relative p-2 text-black hover:text-green-700 transition-colors"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-green-700 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Account Button */}
            <Link
              href="/account"
              className="relative p-2 text-black hover:text-orange transition-colors"
              title="My Account"
            >
              <User size={22} strokeWidth={2} />
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="ml-2 px-6 py-2 bg-linear-to-r from-orange to-red-500 text-white text-[15px] font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Right: Cart + Toggle */}
          <div className="flex items-center justify-center space-x-4 md:hidden">
            <Link
              href="/cart"
              className="relative p-2 text-black active:scale-90 transition-transform"
            >
              <ShoppingCart size={20} strokeWidth={2} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-green-700 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="relative p-2 text-black active:scale-90 transition-transform"
            >
              <User size={20} strokeWidth={2} />
            </Link>

            <button
              ref={burgerRef}
              onClick={toggleMenu}
              className="relative z-999 flex items-center space-x-3 focus:outline-none"
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

          {/* Mobile Login Button */}
          <div
            className="pt-6"
            ref={(el) => {
              mobileLinksRef.current[navLinks.length] = el;
            }}
          >
            <Link
              href="/account"
              onClick={toggleMenu}
              className="px-10 py-4 bg-zinc-100 text-zinc-900 text-xl font-bold rounded-full active:scale-95 transition-all"
            >
              My Account
            </Link>

            <Link
              href="/login"
              onClick={toggleMenu}
              className="px-10 py-4 bg-linear-to-r from-orange to-red-500 text-white text-xl font-bold rounded-full shadow-xl shadow-orange-500/20 active:scale-95 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
