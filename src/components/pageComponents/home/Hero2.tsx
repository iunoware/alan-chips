"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
// import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
//
export default function Hero2() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".fade-in-text", {
        y: 30,
        ease: "power3.out",
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="relative">
      <section
        ref={containerRef}
        className="flex relative overflow-x-clip flex-col justify-center items-center h-screen w-full bg-center bg-cover"
      >
        <div>
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full absolute inset-0 object-cover object-center"
          >
            <source src="/videos/alan-chips-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="fade-in-text uppercase font-semibold text-center mb-3 opacity-90 bg-linear-to-r from-orange to-amber-400 bg-clip-text text-transparent tracking-widest text-6xl">
              Alan Chips
            </h1>

            {/* <span className="text-sm">since 1960</span> */}
            <h2 className="fade-in-text text-xl opacity-90 font-serif mb-1 text-orange">
              Crafted Taste, Preserved Since 1960
            </h2>

            <div className="left-0 w-50 mb-4 h-0.5 bg-linear-to-r from-orange via-gold to-orange" />

            <p className="fade-in-text max-w-lg opacity-90 font-sans text-center text-gray-800">
              From a trusted legacy in South Tamil Nadu to a premium experience for
              everyone.
            </p>

            <div className="fade-in-text mt-4">
              <Link href="/about" className="uppercase text-orange">
                Explore our story
              </Link>

              <div className="left-0 w-44 mb-4 h-0.5 bg-linear-to-r from-transparent via-orange to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
