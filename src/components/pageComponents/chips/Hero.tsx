"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownToLine } from "lucide-react";

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

  function scrollToSection(href: string) {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-x-clip bg-[url('/images/alan-chips-hero-2.webp')] bg-center bg-cover pt-40 pb-20 md:pt-56 md:pb-32 px-6 flex flex-col items-center text-center bg-[#FAF9F6]"
    >
      <div ref={textRef} className="max-w-4xl mx-auto">
        <h1 className="hero-heading gradient-text text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-[1.1] tracking-tight uppercase">
          Crafted Crunch, <br className="hidden md:block" /> Perfected Over Time
        </h1>
        <p className="hero-subtext text-lg md:text-xl text-black/60 font-sans max-w-2xl mx-auto leading-relaxed">
          From hand-selected ingredients to time-tested recipes, every Alan Chips variety
          is made with care, consistency, and an obsession for real flavour.
        </p>
      </div>

      <div className="mt-10">
        <button
          onClick={() => scrollToSection("product")}
          className="text-black/70 text-lg flex justify-center items-center gap-2 border border-gray-400 hover:border-black transition-all duration-300 rounded-full px-5 py-2 cursor-pointer"
        >
          Explore <ArrowDownToLine className="h-5 animate-bounce text-black/70" />
        </button>
      </div>

      {/* Subtle background accent */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C59B46]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-green/5 rounded-full blur-3xl" />
      </div> */}
    </section>
  );
};

export default Hero;
