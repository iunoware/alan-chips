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
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const bagRef = useRef<HTMLDivElement>(null);
  const piece1Ref = useRef<HTMLDivElement>(null);
  const piece2Ref = useRef<HTMLDivElement>(null);
  const piece3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --- PAGE LOAD ANIMATIONS ---
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5 },
      )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          [bagRef.current, piece1Ref.current, piece2Ref.current, piece3Ref.current],
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=1.2",
        );

      // --- FLOATING ANIMATIONS ---
      // Gentle vertical movement for the main bag
      gsap.to(bagRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Different timings for pieces to feel organic
      gsap.to(piece1Ref.current, {
        y: 15,
        x: 5,
        rotate: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(piece2Ref.current, {
        y: -15,
        x: -5,
        rotate: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
      gsap.to(piece3Ref.current, {
        y: 10,
        x: 8,
        rotate: 5,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // --- SCROLL PARALLAX ---
      gsap.to(".parallax-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
        ease: "none",
      });

      gsap.to(".parallax-product", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -50,
        ease: "none",
      });

      // --- MOUSE MOVE PARALLAX ---
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(bagRef.current, {
          x: xPos * 20,
          y: yPos * 20,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to([piece1Ref.current, piece2Ref.current, piece3Ref.current], {
          x: (i) => xPos * (30 + i * 10),
          y: (i) => yPos * (30 + i * 10),
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FFFFFF] flex items-center px-8 md:px-20 lg:px-32 selection:bg-[#C5A059]/30"
    >
      {/* Layer 1: Background Texture/Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,245,242,1)_0%,rgba(255,255,255,1)_100%)] opacity-60" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
        {/* Layer 2: Main Content */}
        <div className="parallax-content flex flex-col justify-center items-start">
          <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            The South Tamil Nadu Legacy
          </span>
          <h1
            ref={headlineRef}
            className="text-[#121212] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
          >
            Crafted for Taste. <br />
            Known for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#C5A059] to-[#9A7B42]">
              Quality.
            </span>
          </h1>
          <p
            ref={subtextRef}
            className="text-[#444444] text-lg md:text-xl max-w-md leading-relaxed mb-10 font-light"
          >
            From the heart of South Tamil Nadu to every home. Experience the premium
            crunch that defines a generation of authentic snack culture.
          </p>
          <button
            ref={buttonRef}
            className="group relative px-10 py-4 bg-[#121212] text-white rounded-full overflow-hidden transition-all duration-500 hover:pr-14"
          >
            <span className="relative z-10 font-medium tracking-wide">
              Explore Our Range
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-[#C5A059] -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <svg
              className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 z-20"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L17 7M17 7L11 13M17 7H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Layer 3: Product Showcase */}
        <div
          ref={productRef}
          className="parallax-product relative h-100 lg:h-150 flex items-center justify-center lg:justify-end"
        >
          {/* Main Bag */}
          <div
            ref={bagRef}
            className="relative z-20 w-60 md:w-[320px] lg:w-95 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-300"
          >
            <Image
              src="/images/alan_chips_bag.png"
              alt="Alan Chips Premium Packaging"
              width={500}
              height={700}
              priority
              className="object-contain"
            />
          </div>

          {/* Floating Pieces */}
          <div
            ref={piece1Ref}
            className="absolute top-[10%] left-[5%] lg:left-[-10%] z-30 w-16 md:w-24 opacity-90 drop-shadow-lg"
          >
            <Image
              src="/images/alan_chips_pieces.png"
              alt="Floating Alan Chips Piece"
              width={200}
              height={200}
              className="object-contain rotate-15"
            />
          </div>
          <div
            ref={piece2Ref}
            className="absolute bottom-[20%] right-[-5%] lg:right-[-10%] z-10 w-20 md:w-28 opacity-80 drop-shadow-md"
          >
            <Image
              src="/images/alan_chips_pieces.png"
              alt="Floating Alan Chips Piece"
              width={200}
              height={200}
              className="object-contain -rotate-25 scale-x-[-1]"
            />
          </div>
          <div
            ref={piece3Ref}
            className="absolute top-[60%] left-[-2%] lg:left-[-20%] z-30 w-12 md:w-20 opacity-70 blur-[1px]"
          >
            <Image
              src="/images/alan_chips_pieces.png"
              alt="Floating Alan Chips Piece"
              width={200}
              height={200}
              className="object-contain rotate-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
