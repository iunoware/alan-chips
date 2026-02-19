"use client";

import React, { useRef } from "react";
import { Timer, Leaf, Sparkles, Truck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustPoints = [
  {
    icon: <Timer size={32} strokeWidth={1} />,
    title: "Freshly Packed Daily",
    desc: "Prepared in small batches for maximum freshness.",
  },
  {
    icon: <Leaf size={32} strokeWidth={1} />,
    title: "No Artificial Preservatives",
    desc: "Pure ingredients with authentic traditional taste.",
  },
  {
    icon: <Sparkles size={32} strokeWidth={1} />,
    title: "Hygienic Preparation",
    desc: "Clean processing and safe packaging standards.",
  },
  {
    icon: <Truck size={32} strokeWidth={1} />,
    title: "Delivery Across Tamil Nadu",
    desc: "Fast and secure doorstep delivery.",
  },
];

const WhyChooseAlan = () => {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".trust-item");

      gsap.from(items, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FFFDF9] py-20 border-y border-neutral-100/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading Area */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Crafted With Care.{" "}
            <span className="text-green-800">Delivered With Trust.</span>
          </h2>
          <p className="text-neutral-500 font-medium text-lg">
            Fresh quality snacks across Tamil Nadu.
          </p>
        </div>

        {/* Trust Points Horizontal Strip */}
        <div
          ref={itemsRef}
          className="grid grid-cols-1 md:grid-cols-4 items-start gap-12 md:gap-0"
        >
          {trustPoints.map((item, index) => (
            <div
              key={index}
              className={`trust-item group flex flex-col items-center text-center px-8 relative
                ${index !== trustPoints.length - 1 ? "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-16 md:after:bg-neutral-200/60" : ""}
              `}
            >
              <div className="mb-6 text-neutral-400 group-hover:text-green-700 group-hover:scale-110 transition-all duration-500 ease-out">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 tracking-tight transition-colors duration-300 group-hover:text-green-800">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAlan;
