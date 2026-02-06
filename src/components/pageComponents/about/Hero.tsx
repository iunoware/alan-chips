"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states
      gsap.set([labelRef.current, headlineRef.current, subtextRef.current], {
        y: 30,
        opacity: 0,
      });
      gsap.set(lineRef.current, { scaleX: 0 });
      gsap.set(visualRef.current, { opacity: 0, scale: 1.05 });

      tl.to(visualRef.current, {
        opacity: 0.15,
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      })
        .to(
          labelRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=1.5",
        )
        .to(
          headlineRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
          },
          "-=0.8",
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1.5,
            ease: "expo.inOut",
          },
          "-=1",
        )
        .to(
          subtextRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "-=1",
        );

      // Ultra-slow breathing effect for visual anchor
      gsap.to(visualRef.current, {
        scale: 1.03,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Visual Anchor - Subtle, Faded background element */}
      <div
        ref={visualRef}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="relative w-full max-w-4xl aspect-square opacity-30 blur-2xl lg:blur-3xl">
          <Image
            src="/images/alan_chips_pieces.png"
            alt=""
            fill
            className="object-contain grayscale"
            priority
          />
        </div>
      </div>

      {/* Narrative Section */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        {/* Heritage Label */}
        <div className="mb-10 flex flex-col items-center overflow-hidden">
          <span
            ref={labelRef}
            className="text-[11px] md:text-xs font-bold uppercase tracking-[0.4em] text-zinc-400"
          >
            Established 1960
          </span>
          <div ref={lineRef} className="w-12 h-[1.5px] bg-green mt-4 origin-center" />
        </div>

        {/* Primary Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-900 leading-[1.05] mb-8"
        >
          A Legacy Refined <br /> Through Time.
        </h1>

        {/* Subtext */}
        <div className="max-w-xl overflow-hidden mt-4">
          <p
            ref={subtextRef}
            className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            Three generations of mastery, one unwavering commitment to taste. Alan Chips
            is a testament to the art of craftsmanship.
          </p>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
            Scroll
          </span>
          <div className="w-px h-8 bg-zinc-200" />
        </div>
      </div>

      {/* Subtle Background Glow/Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-b from-gold/3 to-orange/3 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
