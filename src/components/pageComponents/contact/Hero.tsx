"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.5 },
      });

      tl.fromTo(
        ".hero-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2 },
      ).fromTo(".hero-subtext", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.2");
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-x-clip bg-[url('/images/hero-bg.webp')] pt-40 pb-20 md:pt-56 md:pb-32 px-6 flex flex-col items-center text-center bg-[#FAF9F6]"
    >
      <div ref={textRef} className="max-w-4xl mx-auto">
        <h1 className="hero-heading gradient-text text-4xl md:text-6xl lg:text-7xl font-normal text-black mb-8 leading-[1.1] tracking-tight uppercase">
          Let’s Start a <br className="hidden md:block" /> Conversation
        </h1>
        <p className="hero-subtext text-lg md:text-xl text-black/60 font-sans max-w-2xl mx-auto leading-relaxed">
          Whether you’re a long-time customer, a potential partner, or a distributor
          looking to join our legacy, we welcome your enquiry. Our team is here to listen
          and assist.
        </p>
      </div>

      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C59B46]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-green/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
