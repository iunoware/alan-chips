"use client";

import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
  const containerRef = useRef<HTMLElement>(null);

  // useGSAP(() => {
  //   gsap.from()
  // }, { scope: containerRef });

  return (
    <>
      <section
        ref={containerRef}
        className="flex relative overflow-x-clip flex-col justify-center items-center md:bg-[url('/images/alan-chips-hero.webp')] bg-[url('/images/alan-chips-hero-2.png')] h-screen w-full bg-center bg-cover"
      >
        <h1 className="uppercase mb-3 bg-linear-to-r from-green to-green-400 bg-clip-text text-transparent tracking-widest text-6xl">
          Alan Chips
        </h1>
        {/* <span className="text-sm">since 1960</span> */}
        <h2 className="text-xl mb-1 bg-linear-to-l from-green to-green-400 bg-clip-text text-transparent">
          Crafted Taste Since 1960
        </h2>
        <p className="max-w-lg text-center text-gray-800">
          From a trusted legacy in South Tamil Nadu to a premium experience for everyone.
        </p>
      </section>
    </>
  );
}
