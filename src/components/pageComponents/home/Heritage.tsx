"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Heritage() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Fade in text on scroll
  //     gsap.fromTo(
  //       textRef.current,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.5,
  //         ease: "power4.out",
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top 80%",
  //         },
  //       },
  //     );

  //     // Subtle image reveal
  //     gsap.fromTo(
  //       imageRef.current,
  //       { scale: 1.2, opacity: 0 },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         duration: 2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top 70%",
  //         },
  //       },
  //     );
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      // Subtle image reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-40 lg:mt-200 bg-zinc-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="lg:col-span-7 order-2 lg:order-1">
            <span className="gradient-text text-xs md:text-sm font-sans uppercase tracking-[0.4em] font-bold mb-6 block">
              Our Heritage
            </span>
            <h2 className="gradient-text text-4xl md:text-6xl font-semibold leading-tight mb-8">
              A Legacy of <br />
              <span className="italic">Tradition & Taste</span>
            </h2>
            <div className="flex flex-col gap-6 text-black/70 text-lg leading-relaxed max-w-2xl font-sans">
              <p>
                Founded over <strong>six decades ago</strong>, Alan Chips represents a
                journey rooted in authentic taste and uncompromising quality. What began
                as a family-led effort to craft better plantain chips soon became a name
                people trusted for consistency, freshness, and flavor.
              </p>
              <p>
                Using time-honored methods and carefully selected ingredients, every chip
                is prepared with attention to detail. Each batch reflects the same values
                that have guided us <strong>since 1960</strong> — authenticity, care, and
                respect for taste.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="h-px w-24 bg-red/40"></div>
              <h4 className="gradient-text font-bold italic text-xl">
                The Alan Chips Way
              </h4>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-3/4 w-full overflow-hidden bg-zinc-200">
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src="/images/alan-chips-hero-2.webp"
                  alt="Crafting culinary excellence"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              {/* Decorative overlay border */}
              <div className="absolute inset-10 border border-white/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-150 h-150 bg-brand-red/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
