"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Chips", href: "/chips" },
    { name: "Contact", href: "/contact" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Register GSAP plugins
    useEffect(() => {
        // GSAP is already imported
    }, []);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Entrance animation
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

        tl.from(containerRef.current, {
            x: -100,
            opacity: 0,
            duration: 2,
        })
            .from(".brand-area", {
                y: 20,
                opacity: 0,
            }, "-=1.5")
            .from(".nav-item", {
                x: -20,
                opacity: 0,
                stagger: 0.1,
            }, "-=1.2")
            .from(".secondary-content", {
                opacity: 0,
            }, "-=1")
            .from(".cta-area", {
                y: 20,
                opacity: 0,
            }, "-=0.8");

    }, { scope: containerRef });

    // Handle Hover Interaction Line
    const handleMouseEnter = (index: number) => {
        const target = linksRef.current[index];
        if (target && indicatorRef.current) {
            const rect = target.getBoundingClientRect();
            const sidebarRect = containerRef.current?.getBoundingClientRect();

            if (sidebarRect) {
                gsap.to(indicatorRef.current, {
                    y: rect.top - sidebarRect.top + (rect.height / 2) - 20, // Center it roughly
                    height: 40,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
        }
    };

    const handleMouseLeave = () => {
        // Keep it at active page or fade out
        // For now, let's keep it at active page or fade out if no active match
        const activeIndex = navLinks.findIndex(link => link.href === pathname);
        if (activeIndex !== -1) {
            handleMouseEnter(activeIndex);
        } else {
            gsap.to(indicatorRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            });
        }
    };

    useEffect(() => {
        // Set initial indicator position
        const activeIndex = navLinks.findIndex(link => link.href === pathname);
        if (activeIndex !== -1) {
            handleMouseEnter(activeIndex);
        }
    }, [pathname]);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-[100] lg:hidden flex flex-col items-end space-y-1.5 p-3 bg-[#fafaf9] backdrop-blur-md rounded-full shadow-xl border border-gray-200/50"
            >
                <span className={`h-px bg-[#333333] transition-all duration-500 ease-in-out ${isOpen ? "w-6 translate-y-2 rotate-45" : "w-6"}`} />
                <span className={`h-px bg-[#333333] transition-all duration-500 ease-in-out ${isOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-px bg-[#333333] transition-all duration-500 ease-in-out ${isOpen ? "w-6 -translate-y-2.5 -rotate-45" : "w-5"}`} />
            </button>

            {/* Sidebar Container */}
            <div
                ref={containerRef}
                className={`fixed inset-y-0 left-0 z-50 shadow-[20px_0_50px_-15px_rgba(0,0,0,0.03)] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]
          ${isOpen ? "translate-x-0 w-full md:w-80" : "-translate-x-full lg:translate-x-0 lg:w-24 xl:w-28"}
          bg-[#fafaf9]/98 backdrop-blur-xl border-r border-[#ececeb] flex flex-col justify-between py-16 px-6 lg:px-0 items-center
        `}
            >
                {/* Brand Area */}
                <div className="brand-area flex flex-col items-center gap-3">
                    <Link href="/" className="group flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-medium mb-1">
                                The Legacy
                            </span>
                            <h1 className="text-2xl font-bold tracking-tighter text-[#333333] uppercase transition-all duration-700 group-hover:scale-105">
                                Alan<span className="text-[#fee701]">.</span>Chips
                            </h1>
                        </div>
                        <div className="mt-2 h-[1px] w-8 bg-[#e7601e]/30 group-hover:w-12 transition-all duration-700" />
                        <p className="mt-3 text-[9px] tracking-[0.3em] text-gray-400 uppercase font-light">
                            Crafted Since 1960
                        </p>
                    </Link>
                </div>

                {/* Primary Navigation */}
                <nav className="relative flex flex-col items-center gap-14 lg:gap-20">
                    {/* Interaction Line (Signature Detail) */}
                    <div
                        ref={indicatorRef}
                        className="absolute -left-1 w-[2px] bg-gradient-to-b from-[#e7601e] via-[#fee701] to-[#e7601e] opacity-0 rounded-full hidden lg:block shadow-[0_0_8px_rgba(254,231,1,0.3)]"
                        style={{ pointerEvents: 'none' }}
                    />

                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            ref={el => { linksRef.current[index] = el }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`nav-item relative text-2xl lg:text-[13px] font-medium tracking-[0.25em] uppercase transition-all duration-700 
                                ${pathname === link.href ? "text-[#333333] font-bold" : "text-gray-400/80 hover:text-[#333333]"}
                                lg:[writing-mode:vertical-rl] lg:rotate-180 flex items-center group/nav
                            `}
                        >
                            <span className="relative z-10 block py-2 transition-transform duration-500 group-hover/nav:translate-x-1 lg:group-hover/nav:-translate-y-1">
                                {link.name}
                            </span>
                            {pathname === link.href && (
                                <>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#e7601e] to-[#fee701] rounded-full lg:hidden animate-pulse" />
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e7601e] to-[#fee701] lg:block hidden" />
                                </>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="flex flex-col items-center gap-12 w-full px-4">
                    <div className="secondary-content hidden lg:flex flex-col items-center text-center gap-1.5">
                        <p className="text-[8px] tracking-[0.3em] text-gray-400 uppercase">9 Signature Varieties</p>
                        <p className="text-[8px] tracking-[0.3em] text-gray-400 uppercase">Trusted since 1960</p>
                    </div>

                    <div className="cta-area flex flex-col items-center">
                        <Link
                            href="/chips"
                            className="group relative flex flex-col items-center py-2"
                        >
                            <span className="text-[11px] tracking-[0.3em] font-bold text-[#333333] uppercase transition-colors duration-500 group-hover:text-[#e7601e]">
                                Explore
                            </span>
                            <div className="mt-2 h-[1px] w-full bg-gray-200/50 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#e7601e] to-[#fee701] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]" />
                            </div>
                            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#fee701]/30 group-hover:w-full transition-all duration-1000 delay-100" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay Background */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-md z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
