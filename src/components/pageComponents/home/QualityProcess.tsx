"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Crown, CookingPot, ChefHat, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    icon: "01",
    title: "Ingredient Selection",
    svg: <ShoppingCart className="inline text-green" />,
    description:
      "Hand-sorting only the finest, farm-fresh potatoes to ensure consistent texture and purity.",
  },
  {
    icon: "02",
    title: "Natural Preparation",
    svg: <Crown className="inline text-green" />,
    description:
      "Sliced with artisanal precision to maintain the perfect thickness for a signature crunch.",
  },
  {
    icon: "03",
    title: "Traditional Frying",
    svg: <CookingPot className="inline text-green" />,
    description:
      "Kettle-cooked in small batches using time-honored methods preserved since 1960.",
  },
  {
    icon: "04",
    title: "Taste Testing",
    svg: <ChefHat className="inline text-green" />,
    description:
      "Every batch is rigorously sampled by our master cuisiners to ensure heritage flavor profiles.",
  },
  {
    icon: "05",
    title: "Quality Assurance",
    svg: <ShieldCheck className="inline text-green" />,
    description:
      "The final seal of perfection, guaranteeing excellence in every single pack we deliver.",
    // isQA: true,
  },
];

const QualityProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRootRef = useRef<HTMLDivElement>(null);
  const promiseRef = useRef<HTMLDivElement>(null);
  const sensoryRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Header Reveal
      gsap.from(".q-header-content", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      // 2. Process Steps Reveal
      gsap.from(".process-step-item", {
        scrollTrigger: {
          trigger: stepsRootRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      // 3. Editorial Images Parallax
      gsap.to(image1Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
        y: -120,
        ease: "none",
      });

      gsap.to(image2Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
        y: 80,
        ease: "none",
      });

      // 4. Quality Promise Reveal
      gsap.from(promiseRef.current, {
        scrollTrigger: {
          trigger: promiseRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scale: 0.98,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      // 5. Sensory Description Reveal
      gsap.from(".sensory-text", {
        scrollTrigger: {
          trigger: sensoryRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-30 md:py-36 bg-[#fafaf9] overflow-x-clip"
    >
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col gap-32 md:gap-48">
        {/* 1. Section Header */}
        <div ref={headerRef} className="max-w-3xl">
          <span className="q-header-content block text-orange font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8">
            The Craft of Excellence
          </span>
          <h2 className="q-header-content text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tighter mb-10">
            Precision in <br />
            <span className="text-amber-500">Every Batch.</span>
          </h2>
          <p className="q-header-content text-[#1a1a1a]/60 text-lg md:text-xl leading-relaxed font-light max-w-xl">
            Established in 1960, Alan Chips remains dedicated to the art of traditional
            snack-making. We believe that modern speed can never replace the soul of
            hand-crafted quality.
          </p>
        </div>

        {/* 2. Process Flow & Visuals (Mixed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Timeline side */}
          <div
            ref={stepsRootRef}
            className="lg:col-span-6 flex flex-col gap-12 md:gap-16"
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-step-item group flex gap-8 md:gap-12 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#ececeb] flex items-center justify-center text-[10px] md:text-xs font-bold text-[#1a1a1a] bg-white shadow-sm transition-colors duration-500 group-hover:border-gold">
                    {step.icon}
                  </div>
                  {index !== processSteps.length - 1 && (
                    <div className="w-px h-24 md:h-32 bg-linear-to-b from-[#ececeb] to-transparent mt-4" />
                  )}
                </div>
                <div className="pt-2 md:pt-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-tight mb-2">
                      {step.title} {step.svg}
                    </h3>
                    {/* {step.isQA && (
                      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green/10">
                        <svg
                          className="w-2.5 h-2.5 text-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )} */}
                  </div>
                  <p className="text-[#1a1a1a]/50 text-sm md:text-base leading-relaxed max-w-md font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Visual side */}
          <div className="lg:col-span-6 relative flex flex-col items-end lg:sticky lg:top-25">
            <div
              ref={image1Ref}
              className="relative w-full max-w-md aspect-3/4 overflow-hidden rounded-sm shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="/images/alan_chips_pieces.png"
                alt="Finest potato selection"
                fill
                className="object-cover"
              />
            </div>
            {/* <div
              ref={image2Ref}
              className="relative w-72 md:w-80 aspect-square overflow-hidden rounded-sm shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] mt-[-20%] mr-[20%] z-20 border-8 border-white"
            >
              <Image
                src="/images/alan_chips_pieces.png"
                alt="Precise preparation"
                fill
                className="object-cover"
              />
            </div> */}
          </div>
        </div>

        {/* 3. Quality Promise Block */}
        <div
          ref={promiseRef}
          className="relative w-full p-12 md:p-20 border border-[#ececeb] bg-gray-100 rounded-sm overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-orange via-gold to-orange" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-green/5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green" />
                </div>
                <span className="text-[10px] tracking-[0.3em] font-bold text-[#1a1a1a] uppercase">
                  Quality Assurance
                </span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-6">
                Our Promise of <br /> Uncompromised Integrity.
              </h4>
            </div>
            <div className="flex flex-col gap-6 border-l border-[#ececeb] pl-0 md:pl-12">
              <p className="text-[#1a1a1a]/60 text-base md:text-lg font-light leading-relaxed">
                At Alan Chips, quality is not a department; it is our foundation. Every
                pack that leaves our facility is a symbol of our 60-year commitment to
                transparency, health, and exceptional South Tamil Nadu flavor.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <span className="text-[9px] tracking-[0.4em] font-bold text-[#1a1a1a] uppercase">
                  Certified Legacy
                </span>
                <div className="w-12 h-px bg-gold" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Sensory Description */}
        {/* <div
          ref={sensoryRef}
          className="flex flex-col items-center text-center max-w-4xl mx-auto py-12"
        >
          <span className="sensory-text block text-orange/80 font-bold tracking-[0.5em] uppercase text-[10px] mb-12">
            The Sensory Experience
          </span>
          <p className="sensory-text text-[#1a1a1a] text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.3]">
            A heavy,{" "}
            <span className="font-bold text-amber-500 italic">satisfying crunch</span>{" "}
            that yields to the refined aroma of sun-ripened potatoes and{" "}
            <span className="text-amber-500">master-balanced</span> spices.
          </p>
          <div className="sensory-text mt-16 w-px h-24 bg-linear-to-b from-gold to-transparent" />
        </div> */}
      </div>

      {/* Background Micro Decorations */}
      {/* <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-orange/5 blur-[150px] rounded-full pointer-events-none" /> */}
    </section>
  );
};

export default QualityProcess;
