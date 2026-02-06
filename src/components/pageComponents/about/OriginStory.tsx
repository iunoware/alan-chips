"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OriginStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const yearLineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      );

      tl.fromTo(
        yearLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "expo.inOut" },
        "-=1",
      );

      tl.fromTo(
        visualRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 0.4, scale: 1, duration: 2, ease: "power2.out" },
        "-=1.5",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Narrative Content */}
        <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">
              Our Beginnings
            </span>
            <div ref={yearLineRef} className="w-12 h-px bg-green origin-left" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.15] mb-12 max-w-2xl">
            It Started With a Simple Idea: <br />
            Make Chips the Right Way.
          </h2>

          {/* Body Content */}
          <div className="flex flex-col gap-8 max-w-xl">
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
              In 1960, the goal wasn&apos;t to build a legacy. It was simply to refine the
              process of making a chip that felt honest, consistent, and clean.
            </p>
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
              Beginning in a small space with modest tools, our early efforts focused on
              the discipline of technique rather than the speed of growth.
            </p>
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
              This restrained approach allowed the taste to speak for itself, earning
              trust slowly, through generations of quiet excellence.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Anchor */}
        <div
          ref={visualRef}
          className="lg:col-span-5 relative w-full aspect-4/5 lg:aspect-auto h-full min-h-100 flex items-center justify-center"
        >
          {/* Abstract Visual Form */}
          <div className="absolute inset-0 bg-linear-to-b from-gold/5 to-orange/5 rounded-[40px] blur-3xl" />

          <div className="relative w-full h-full max-w-md group">
            <Image
              src="/images/alan-chips-bowl.png"
              alt="Contextual heritage visual"
              fill
              className="object-contain grayscale opacity-20 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-40"
            />

            {/* Year Marker Typography */}
            <div className="absolute -bottom-4 -left-4 md:-left-8">
              <span className="text-8xl md:text-[12rem] font-bold text-zinc-100 select-none">
                1960
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Year Marker/Accent */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <span className="text-[20vw] font-bold leading-none text-zinc-900">ALAN</span>
      </div>
    </section>
  );
}
