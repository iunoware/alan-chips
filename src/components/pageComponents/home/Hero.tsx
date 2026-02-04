"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sinceRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const productWrapperRef = useRef<HTMLDivElement>(null);
  const bagRef = useRef<HTMLDivElement>(null);
  const piece1Ref = useRef<HTMLDivElement>(null);
  const piece2Ref = useRef<HTMLDivElement>(null);
  const lightGlowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --- INITIAL LOAD ANIMATION ---
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.5 },
      });

      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2 },
      )
        .fromTo(sinceRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.2")
        .fromTo(subtextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.1")
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1")
        .fromTo(
          [bagRef.current, piece1Ref.current, piece2Ref.current],
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 2,
            ease: "power3.out",
          },
          "-=1.5",
        );

      // --- FLOATING / ANTI-GRAVITY ANIMATIONS ---
      // Bag floating
      gsap.to(bagRef.current, {
        y: -25,
        rotate: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Piece 1 floating
      gsap.to(piece1Ref.current, {
        y: 20,
        x: 10,
        rotate: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });

      // Piece 2 floating
      gsap.to(piece2Ref.current, {
        y: -20,
        x: -15,
        rotate: -30,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // --- SCROLL PARALLAX ---
      gsap.to(productWrapperRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        y: 100,
        ease: "none",
      });

      gsap.to(headlineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
        y: -50,
        ease: "none",
      });

      // --- BACKGROUND AMBIENT SHIFT ---
      gsap.to(lightGlowRef.current, {
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-175 overflow-hidden bg-white flex items-center px-8 md:px-20 lg:px-32 selection:bg-green/10"
    >
      {/* BACKGROUND LAYER: Soft Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          ref={lightGlowRef}
          className="absolute -top-[10%] -right-[5%] w-[60%] h-[70%] blur-[160px] opacity-40 rounded-full"
          style={{
            background: "linear-gradient(135deg, #e7601e 0%, #fee701 50%, #e7601e 100%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] blur-[140px] opacity-20 rounded-full"
          style={{
            background: "linear-gradient(135deg, #fee701 0%, #e7601e 100%)",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 w-full max-w-360 mx-auto items-center">
        {/* TEXT CONTENT LAYER */}
        <div className="flex flex-col items-start text-left">
          <span
            ref={sinceRef}
            className="text-[#121212]/50 font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-6 lg:mb-8"
          >
            Since 1960
          </span>
          <h1
            ref={headlineRef}
            className="text-[#121212] text-6xl md:text-8xl lg:text-[100px] font-bold leading-none mb-8 tracking-tight"
          >
            The Gold <br />
            Standard of <br />
            <span className="text-green">Crunch.</span>
          </h1>
          <p
            ref={subtextRef}
            className="text-[#121212]/60 text-lg md:text-xl max-w-md leading-relaxed mb-10 lg:mb-12 font-light"
          >
            Crafted for the discerning palate. A premium legacy born in Tamil Nadu,
            celebrated for timeless quality and exceptional taste.
          </p>
          <button
            ref={ctaRef}
            className="group relative px-12 py-5 bg-green text-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(1,116,50,0.2)]"
          >
            <span className="relative z-10 font-bold tracking-widest text-xs uppercase">
              Discover the Legacy
            </span>
            <div className="absolute inset-0 bg-black/10 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </button>
        </div>

        {/* PRODUCT VISUAL LAYER */}
        <div
          ref={productWrapperRef}
          className="relative h-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-125 aspect-4/5">
            {/* Soft shadow depth */}
            <div className="absolute inset-0 bg-black/5 blur-[80px] rounded-full scale-75 translate-y-20 opacity-40" />

            {/* Main Product Bag */}
            <div ref={bagRef} className="relative z-20 w-full h-full">
              <Image
                src="/images/alan_chips_bag.png"
                alt="Alan Chips Premium Packaging"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>

            {/* Floating Piece 1 */}
            <div
              ref={piece1Ref}
              className="absolute -top-[5%] -left-[10%] z-30 w-24 md:w-40 aspect-square"
            >
              <Image
                src="/images/alan_chips_pieces.png"
                alt="Golden Chip Detail"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating Piece 2 */}
            <div
              ref={piece2Ref}
              className="absolute bottom-[10%] -right-[5%] lg:-right-[15%] z-10 w-28 md:w-44 aspect-square"
            >
              <Image
                src="/images/alan_chips_pieces.png"
                alt="Golden Chip Detail"
                fill
                className="object-contain -rotate-45 scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MINIMALIST ACCENT: Vertical Indicator */}
      <div className="absolute left-8 md:left-20 bottom-0 w-px h-32 bg-green/20 hidden lg:block" />
      <div className="absolute left-8 md:left-20 bottom-36 flex flex-col gap-8 text-[10px] tracking-[0.3em] font-medium text-green/40 uppercase vertical-text lg:flex">
        <span>PREMIUM</span>
        <span>AUTHORED</span>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;
