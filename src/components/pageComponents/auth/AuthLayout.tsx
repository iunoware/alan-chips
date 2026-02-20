"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface AuthLayoutProps {
  children: React.ReactNode;
  visualImage?: string;
  title: string;
  subtitle: string;
}

export default function AuthLayout({
  children,
  visualImage = "/images/alan-chips-hero-2.webp",
  title,
  subtitle,
}: AuthLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(visualRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        formRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.8",
      )
      .fromTo(
        chipsRef.current?.children || [],
        { scale: 0, opacity: 0, rotate: -45 },
        { scale: 1, opacity: 1, rotate: 0, stagger: 0.2 },
        "-=0.5",
      );

    // Floating animation for chips
    if (chipsRef.current) {
      Array.from(chipsRef.current.children).forEach((chip, i) => {
        gsap.to(chip, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-15, 15)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-full overflow-x-clip! w-full flex items-center justify-center p-4 md:p-8  pt-24"
    >
      <div className="max-w-6xl w-full rounded-2xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl overflow-hidden min-h-175">
        {/* Left Side: Visual */}
        <div
          ref={visualRef}
          className="hidden lg:flex flex-col justify-center items-center bg-linear-to-br from-green-500 to-green-800 p-12 relative overflow-hidden"
        >
          {/* Decorative Chips */}
          {/* <div ref={chipsRef} className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/single-chip.png"
              alt="chip"
              width={100}
              height={100}
              className="absolute top-10 left-10 opacity-20 rotate-12"
            />
            <Image
              src="/images/single-chip.png"
              alt="chip"
              width={120}
              height={120}
              className="absolute bottom-20 right-10 opacity-30 -rotate-45"
            />
            <Image
              src="/images/single-chip.png"
              alt="chip"
              width={80}
              height={80}
              className="absolute top-1/2 left-20 opacity-25 rotate-90"
            />
          </div> */}

          <div className="relative z-10 text-center text-white">
            <div className="mb-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/logo-dark.png"
                alt="Alan Chips Logo"
                width={60}
                height={20}
                className="mb-4 h-auto w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel tracking-tight">
              {title}
            </h2>
            <p className="text-orange-50 text-lg max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Bottom curve decoration */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form Content */}
        <div
          ref={formRef}
          className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white"
        >
          <div className="w-full max-w-md mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
