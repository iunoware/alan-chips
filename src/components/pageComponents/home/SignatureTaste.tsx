"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SignatureTaste = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const secondaryImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
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

      // Subtle parallax for the sensory images
      gsap.to(mainImageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
        y: -40,
        ease: "none",
      });

      gsap.to(secondaryImageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
        y: 40,
        ease: "none",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 md:py-48 lg:py-64 bg-white overflow-hidden selection:bg-green/10"
    >
      {/* SOFT AMBIENT LIGHTING */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 right-[-10%] w-[50%] h-[60%] blur-[180px] opacity-10 rounded-full"
          style={{
            background: "linear-gradient(135deg, #fee701 0%, #e7601e 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-8 md:px-20 lg:px-32 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20 lg:gap-32 items-center">
        {/* VISUALS: LEFT SIDE DISCOVERY */}
        <div
          ref={visualRef}
          className="relative w-full flex items-center justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative w-full max-w-150 aspect-square lg:aspect-4/5">
            {/* Main Sensory Image: Higher angle bowl or scattering */}
            <div
              ref={mainImageRef}
              className="relative w-full h-full z-10 overflow-hidden rounded-sm shadow-2xl shadow-black/5"
            >
              <Image
                src="/images/chips-image.png"
                alt="Signature crunch detail"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Secondary Sensory Image: Fragment/Detail hover */}
            {/* <div
              ref={secondaryImageRef}
              className="absolute -bottom-12 -right-12 lg:-right-20 w-48 md:w-64 aspect-square z-20 overflow-hidden shadow-2xl shadow-black/10"
            >
              <Image
                src="/images/alan_chips_pieces.png"
                alt="Golden texture detail"
                fill
                className="object-cover scale-125"
              />
            </div> */}
          </div>
        </div>

        {/* TEXT CONTENT: RIGHT SIDE */}
        <div
          ref={contentRef}
          className="flex flex-col items-start lg:items-end lg:text-right order-1 lg:order-2"
        >
          <span
            ref={labelRef}
            className="text-green font-bold tracking-[0.3em] uppercase text-xs mb-6 lg:ml-auto"
          >
            Signature Taste
          </span>
          <h2
            ref={headlineRef}
            className="text-[#121212] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            A Taste You <br />
            Recognize <br />
            <span className="text-green">Instantly.</span>
          </h2>
          <div className="w-12 h-px bg-green/30 mb-8 lg:ml-auto" />
          <p
            ref={textRef}
            className="text-[#121212]/70 text-lg md:text-xl leading-relaxed font-light max-w-md lg:ml-auto"
          >
            Carefully balanced flavors, a perfect crunch, and a taste refined over decades
            — familiar, yet unforgettable. It’s the flavor that stayed when everything
            else changed.
          </p>
        </div>
      </div>

      {/* MINIMALIST ACCENT: Horizontal Rule */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-green/10" />

      {/* Scroll Hint / Brand Mark */}
      <div className="absolute right-8 md:right-20 bottom-20 flex flex-col items-center gap-6 opacity-20">
        <span className="text-[10px] tracking-[0.4em] font-medium text-green uppercase vertical-rl">
          EST. 1960
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-green to-transparent" />
      </div>

      <style jsx>{`
        .vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default SignatureTaste;
