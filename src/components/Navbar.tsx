"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "More Chips",
    href: "/chips",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const burgerRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [IsVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background transformation threshold
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic with threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always show at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className="p-5 fixed top-0 flex justify-center w-full z-50">
        <div className="bg-gray-400/40 border-2 border-gray-300/30 backdrop-blur-xl h-14 w-full rounded-lg flex justify-between items-center p-3">
          <div className="uppercase">
            <Link href="/">
              <div className="relative h-12 w-10">
                <Image
                  src="/images/alan-chips-logo-3.png"
                  fill
                  className="object-cover"
                  alt="Alan chips since 1960"
                />
              </div>
            </Link>
          </div>

          <div>
            <button
              ref={burgerRef}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-999 flex items-center space-x-3 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {/* <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-black uppercase transition-all duration-300">
                {isOpen ? "Close" : "Menu"}
              </span> */}
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
    </>
  );
}
