"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MakesUsDifferent() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Left Image Animation
  //     gsap.fromTo(
  //       leftImageRef.current,
  //       { x: -50, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: leftImageRef.current,
  //           start: "top 85%",
  //           toggleActions: "play none none reverse",
  //         },
  //       },
  //     );

  //     // Right Image Animation
  //     gsap.fromTo(
  //       rightImageRef.current,
  //       { x: 50, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: rightImageRef.current,
  //           start: "top 85%",
  //           toggleActions: "play none none reverse",
  //         },
  //       },
  //     );

  //     // Center Content Animation
  //     gsap.fromTo(
  //       textContentRef.current,
  //       { y: 30, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1.2,
  //         delay: 0.3,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: textContentRef.current,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       },
  //     );
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        leftImageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftImageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Right Image Animation
      gsap.fromTo(
        rightImageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightImageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Center Content Animation
      gsap.fromTo(
        textContentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 lg:py-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Image - Sited lower for asymmetry */}
          <div
            ref={leftImageRef}
            className="w-full lg:w-1/4 h-100 lg:h-150 relative order-2 lg:order-1 lg:mt-24 shadow-2xl overflow-hidden group"
          >
            <Image
              src="/images/chips-image.png"
              alt="Chopstix Minimalist Interior"
              fill
              className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>

          {/* Center Text Block */}
          <div
            ref={textContentRef}
            className="w-full lg:w-2/5 text-center order-1 lg:order-2 z-10 px-4"
          >
            <span className="block text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-red mb-8">
              What Makes Us Different
            </span>

            <div className="w-12 h-px bg-brand-red mx-auto mb-8"></div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text font-bold leading-tight mb-10">
              Where Tradition <br />
              <span className="italic">Meet Intention</span>
            </h2>

            <p className="font-sans text-black/60 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-12">
              Every batch of Alan Chips is crafted with purpose — rooted in decades-old
              methods, made using carefully selected ingredients, and prepared fresh the
              way it always has been. No shortcuts. No preservatives. Just honest flavors
              that turn a simple crunch into a lasting memory.
            </p>

            {/* <div className="relative group inline-block">
              <button className="font-sans text-[13px] font-semibold tracking-widest uppercase text-black group-hover:text-brand-red transition-colors duration-300">
                Book a Table
              </button>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-red group-hover:bg-brand-red scale-x-100 group-hover:scale-x-110 transition-all duration-300"></div>
            </div> */}
          </div>

          {/* Right Image - Sited higher for asymmetry */}
          <div
            ref={rightImageRef}
            className="w-full lg:w-1/4 h-100 lg:h-150 relative order-3 lg:mb-24 shadow-2xl overflow-hidden group"
          >
            <Image
              src="/images/alan-chips-hero-2.webp"
              alt="Elegant Table Setting"
              fill
              className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </div>

      {/* Decorative vertical line accent */}
      <div className="absolute hidden lg:block left-1/2 bottom-0 -translate-x-1/2 h-24 w-px bg-brand-red/20"></div>
    </section>
  );
}
