"use client";

import React, { useRef } from "react";
// import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const flavorIdentities = [
  {
    title: "Perfect Crunch",
    description:
      "A signature snap that has resonated across South Tamil Nadu for generations.",
    highlight: true,
  },
  {
    title: "Balanced Spice",
    description:
      "Warm, hand-blended masalas that linger just long enough to evoke memory.",
    highlight: true,
  },
  {
    title: "Natural Sweetness",
    description: "The honest, earthy undertone of sun-ripened potatoes from local soil.",
    highlight: true,
  },
  {
    title: "Fresh Finish",
    description: "A clean, refined aftertaste that invites the next bite, and the next.",
    highlight: true,
  },
];

// const varietyTeasers = [
//   "/images/alan_chips_pieces.png",
//   "/images/alan_chips_pieces.png",
//   "/images/alan_chips_pieces.png",
// ];

const SignatureTaste = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const flavorGridRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const varietyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Intro Reveal
      gsap.from(".st-intro-item", {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
      });

      // 2. Hero Visual Parallax & Scale
      gsap.fromTo(
        ".st-hero-image",
        { scale: 1.1, y: 50 },
        {
          scrollTrigger: {
            trigger: heroVisualRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1,
          y: -50,
          ease: "none",
        },
      );

      // 3. Flavor Identity Blocks Sequential Reveal
      gsap.from(".st-flavor-block", {
        scrollTrigger: {
          trigger: flavorGridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
      });

      // 4. Signature Statement Reveal
      gsap.from(".st-statement-text", {
        scrollTrigger: {
          trigger: statementRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });

      // 5. Variety Tease Reveal
      gsap.from(".st-variety-item", {
        scrollTrigger: {
          trigger: varietyRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        x: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-40 bg-white overflow-hidden selection:bg-gold/20"
    >
      <div className="relative z-10 max-w-screen mx-auto px-6 md:px-16 flex flex-col items-center gap-28">
        {/* 1. Section Intro — Emotional Hook */}
        <div ref={introRef} className="text-center max-w-2xl">
          <h2 className="st-intro-item text-[#1a1a1a] text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            A Taste You <br />
            <span className="gradient-text">Don&apos;t Forget.</span>
          </h2>
          <p className="st-intro-item text-[#1a1a1a]/60 text-lg font-light leading-relaxed">
            More than just a snack, it&apos;s a sensory homecoming. A recipe carried
            through generations, capturing the warmth of family gatherings and the simple
            joy of a craving satisfied.
          </p>
        </div>

        {/* 2. Flavor Identity Blocks (Core Content) */}
        <div
          ref={flavorGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 w-full"
        >
          {flavorIdentities.map((flavor, index) => (
            <div key={index} className="st-flavor-block flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-[#1a1a1a] tracking-tight">
                  {flavor.title}
                </h3>
                {/* {flavor.highlight && (
                  <div className="w-1 h-4 bg-green rounded-full opacity-60" />
                )} */}
              </div>
              <p className="text-[#1a1a1a]/50 text-sm leading-relaxed font-light">
                {flavor.description}
              </p>
              {flavor.highlight && (
                <div className="w-30 rounded-full h-px bg-linear-to-r from-orange to-gold mt-2" />
              )}
            </div>
          ))}
        </div>

        {/* 3. Signature Statement (Brand Memory) */}
        <div
          ref={statementRef}
          className="text-center py-10 border-y border-[#ececeb] w-full max-w-4xl"
        >
          <p className="st-statement-text heading text-[#1a1a1a] text-2xl md:text-4xl font-bold">
            &ldquo;This is the{" "}
            <span className="font-bold text-amber-500 italic">taste</span> people{" "}
            <br className="hidden md:block" /> carry with them, and always come back
            for.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignatureTaste;
