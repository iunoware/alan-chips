/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // image animation
      gsap.fromTo(
        imageRef.current,
        {
          y: 200,
          rotation: -20,
        },
        {
          y: 800,
          rotation: 0,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top top",
            scrub: true,
          },
        },
      );

      // background
      gsap.fromTo(
        bgRef.current,
        { scale: 1, borderRadius: "50%" },
        {
          scale: 2.5,
          borderRadius: 0,
          // ease: "power2.out",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // pin: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        ref={containerRef}
        className="flex relative flex-col items-center justify-center overflow-x-clip"
      >
        <h1 className="text-center text-7xl translate-y-40 font-semibold z-40">
          Alan Chips
        </h1>

        <div className="relative z-40" ref={imageRef}>
          <img
            // className="translate-y-60"
            src="/images/alan-chips.png"
            alt="Best chips in Tamil Nadu"
          />
        </div>

        <div
          ref={bgRef}
          className="h-150 w-150 absolute translate-y-40 left-1/2 -translate-x-1/2 z-0 bg-[radial-gradient(circle,white_0%,#017432_70%)]"
        ></div>
      </section>
    </>
  );
}
