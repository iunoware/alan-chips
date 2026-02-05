"use client";

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
// import { MoveRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
  const containerRef = useRef<HTMLElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.utils.toArray();
  //   },
  //   { scope: containerRef },
  // );

  return (
    <>
      <section
        ref={containerRef}
        className="flex relative overflow-x-clip flex-col justify-center items-center h-screen w-full bg-center bg-cover"
      >
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/alan-chips-video-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="uppercase text-center mb-3 opacity-90 bg-linear-to-r from-orange to-amber-400 bg-clip-text text-transparent tracking-widest text-6xl">
            Alan Chips
          </h1>

          {/* <span className="text-sm">since 1960</span> */}
          <h2 className="text-xl opacity-90 font-serif mb-1 text-orange">
            Crafted Taste, Preserved Since 1960
          </h2>

          <div className="left-0 w-50 mb-4 h-0.5 bg-linear-to-r from-orange via-gold to-orange" />

          <p className="max-w-lg opacity-90 font-sans text-center text-gray-800">
            From a trusted legacy in South Tamil Nadu to a premium experience for
            everyone.
          </p>

          <div className="mt-4">
            <Link href="/about" className="uppercase text-orange">
              Explore our story
            </Link>

            <div className="left-0 w-44 mb-4 h-0.5 bg-linear-to-r from-transparent via-orange to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
