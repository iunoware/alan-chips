"use client";

import { ChefHat, Leaf, Clock, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: "Authentic Recipes",
    desc: "Prepared using time-honored methods that preserve the original taste our customers have trusted for generations.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Quality Ingredients",
    desc: "Only carefully selected plantains, potatoes, and tapioca are used to ensure consistent flavour and crunch.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Freshly Prepared",
    desc: "Every batch is made with attention to detail, ensuring freshness you can taste in every bite.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "No Preservatives",
    desc: "Made with natural ingredients and free from artificial preservatives — just honest, clean snacking.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Generations of Trust",
    desc: "Loved by families for decades, Alan Chips continues to be a name people trust and recommend.",
  },
];

export default function WhyLove() {
  const cardRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      cardRef.current?.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
    );
  }, []);

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-none">
          {/* LEFT SIDE: IMAGE */}
          <div className="relative overflow-hidden min-h-100 lg:min-h-full">
            <Image
              src="/images/chips-image.png"
              alt="Professional Construction Centering Site"
              fill
              className="absolute rounded-md inset-0 w-full h-full object-cover"
            />
            {/* Subtle industrial overlay */}
            <div className="absolute inset-0 bg-blue/10 mix-blend-multiply"></div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-[#fcfcfc]">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 md:w-12 h-0.5 bg-orange"></div>
                <span className="text-orange font-bold uppercase tracking-widest text-xs md:text-sm heading">
                  Why Alan Chips
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text leading-tight mb-6 heading">
                What Makes Alan Chips <br />
                Truly Different
              </h2>
              <p className="text-[#4a5568] text-md md:text-lg leading-relaxed max-w-xl content">
                For decades, Alan Chips has been crafted with care, tradition, and an
                uncompromising focus on taste. Every batch reflects our belief that great
                snacks are made by respecting ingredients, process, and people.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 group">
                  <div className="w-14 h-14 bg-white border border-[#e2e8f0] flex items-center justify-center text-blue group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 rounded-none">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold gradient-text mb-2 heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#718096] leading-snug content">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue text-white px-3 py-2 md:px-8 md:py-4 font-bold flex items-center gap-3 hover:bg-orange transition-all duration-300 heading group rounded-none"
              >
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* <button className="border-2 border-blue text-blue px-8 py-4 font-bold hover:bg-blue hover:text-white transition-all duration-300 heading rounded-none">
                Download Catalog
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
