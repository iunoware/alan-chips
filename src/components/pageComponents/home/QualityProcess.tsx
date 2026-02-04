"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QualityProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const lightGlowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.7",
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.9",
        );

      // Slow parallax for images
      gsap.to(image1Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -100,
        ease: "none",
      });

      gsap.to(image2Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -60,
        ease: "none",
      });

      // Ambient lighting glow expansion
      gsap.fromTo(
        lightGlowRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1.2,
          opacity: 0.15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-x-clip w-full py-32 md:py-48 lg:py-64 bg-white overflow-hidden selection:bg-green/10"
    >
      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          ref={lightGlowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[160px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #fee701 0%, #e7601e 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-8 md:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32 items-center">
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-start max-w-xl">
          <span
            ref={labelRef}
            className="text-green font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            Quality & Process
          </span>
          <h2
            ref={headlineRef}
            className="text-[#121212] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            Refined Through <br />
            Decades.
          </h2>
          <div className="w-12 h-px bg-green/30 mb-8" />
          <p
            ref={textRef}
            className="text-[#121212]/70 text-lg md:text-xl leading-relaxed font-light"
          >
            From carefully chosen ingredients to time-tested preparation, every step is
            handled with intention. Our process hasn&apos;t changed since 1960 because
            excellence doesn&apos;t need a Shortcut — it only needs discipline.
          </p>
        </div>

        {/* VISUALS: Staggered Editorial Layout */}
        <div className="relative w-full flex flex-col items-center">
          {/* Main Process Image (Potatoes) */}
          <div
            ref={image1Ref}
            className="relative w-full max-w-125 aspect-4/5 z-10 shadow-2xl shadow-black/5"
          >
            <Image
              src="/images/potatoes.png"
              alt="Hand-selected quality potatoes"
              fill
              className="object-contain"
            />
            {/* Subtle Label for Image */}
            <div className="absolute -bottom-10 right-0 lg:-right-10 flex items-center gap-4">
              <span className="text-[10px] tracking-widest font-bold text-green uppercase">
                01 / Selection
              </span>
              <div className="w-12 h-px bg-green/20" />
            </div>
          </div>

          {/* Secondary Process Image (Slices) */}
          <div
            ref={image2Ref}
            className="relative w-full max-w-[320px] aspect-square lg:-mt-20 lg:-ml-40 z-20 shadow-xl shadow-black/10"
          >
            <Image
              src="/images/slices.png"
              alt="Precise preparation slices"
              fill
              className="object-contain"
            />
            {/* Subtle Label for Image */}
            <div className="absolute top-1/2 -left-20 lg:-left-32 -rotate-90 flex items-center gap-4">
              <span className="text-[10px] tracking-widest font-bold text-[#121212]/40 uppercase whitespace-nowrap">
                02 / Preparation
              </span>
              <div className="w-8 h-px bg-[#121212]/10" />
            </div>
          </div>
        </div>
      </div>

      {/* MINIMALIST DECORATION */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-green/10" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-12 bg-green shadow-[0_0_10px_#017432]" />
        <span
          className="text-[10px] tracking-[0.4em] font-medium text-green uppercase rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          TRUSTED
        </span>
      </div>
    </section>
  );
};

export default QualityProcess;
