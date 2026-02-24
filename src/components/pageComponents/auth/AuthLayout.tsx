/* eslint-disable @typescript-eslint/no-unused-vars */
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
      .fromTo(formRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.8")
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
      className="min-h-full overflow-x-hidden w-full flex items-center justify-center"
    >
      <div className="w-full h-screen rounded-2xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl ">
        {/* Left Side: Visual */}
        <div
          ref={visualRef}
          className="hidden lg:flex flex-col justify-center items-center bg-linear-to-br from-green-500 to-green-800 p-12 relative overflow-hidden"
        >
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-cinzel tracking-tight">
              {title}
            </h2>
            <p className="text-orange-50 text-md max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Bottom curve decoration */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form Content */}
        <div ref={formRef} className="flex flex-col justify-center p-8 bg-white">
          <div className="w-full max-w-md mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
