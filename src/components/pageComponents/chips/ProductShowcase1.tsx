"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const dishes1 = [
  {
    id: 1,
    name: "Alan Chips Classic",
    description:
      "Our signature original. Thinly sliced potatoes, lightly seasoned, and fried to golden perfection for a clean, timeless crunch that never goes out of style.",
    image: "/images/products/alan-chips.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Plantain Chips",
    description:
      "Simple, honest, and addictive. Perfectly crisp potato slices finished with just the right touch of salt to let the natural flavour shine.",
    image: "/images/products/plantain-chips.webp",
    featured: false,
  },
  {
    id: 3,
    name: "Plantain Masala Chips",
    description:
      "Naturally sweet, gently fried, and irresistibly crunchy. A comforting snack that balances tradition with pure, natural taste.",
    image: "/images/products/plantain-masala-chips.webp",
    featured: false,
  },
];

export default function ProductShowcase1() {
  const sectionRef = useRef(null);
  // const headingRef = useRef(null);
  const featuredImageRef = useRef(null);
  const listItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in and slide up for heading elements
      gsap.from(".animate-text", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Featured image reveal
      gsap.fromTo(
        featuredImageRef.current,
        { opacity: 0, scale: 1.1, y: 12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      // List items reveal
      listItemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3 + index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredDish = dishes1.find((d) => d.featured);
  const otherDishes = dishes1.filter((d) => !d.featured);

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative py-24 md:py-40 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Heading & Featured Image */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="max-w-xl mb-12">
              <span className="animate-text text-brand-red font-bold text-xs font-sans uppercase tracking-[0.3em]  mb-4 block">
                Best Loved Classics
              </span>
              <h2 className="animate-text gradient-text font-bold text-4xl md:text-5xl leading-tight mb-6">
                The flavours that made us a household name <br />
                <span className="italic">to Every Meal</span>
              </h2>
              <p className="animate-text text-black/60 text-lg font-sans leading-relaxed border-l border-brand-red/30 pl-6">
                These are the chips that started it all. Tried, trusted, and loved across
                generations, each bite delivers the unmistakable taste that defines Alan
                Chips.
              </p>
            </div>

            {/* Featured Dish Image */}
            <div className="relative group overflow-hidden bg-zinc-100 aspect-4/3 w-full">
              <div
                ref={featuredImageRef}
                className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              >
                <Image
                  src={featuredDish?.image || ""}
                  alt={featuredDish?.name || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm font-sans uppercase tracking-widest">
                  {featuredDish?.name}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dish List */}
          <div className="lg:col-span-5 flex flex-col justify-end pt-12 lg:pt-0">
            <div className="space-y-16">
              {otherDishes.map((dish, idx) => (
                <div
                  key={dish.id}
                  ref={(el) => {
                    listItemsRef.current[idx] = el;
                  }}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-video w-full overflow-hidden bg-zinc-50 mb-4 items-end flex">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div>
                      <h3 className="gradient-text font-bold text-2xl md:text-3xl mb-2 transition-opacity duration-300 group-hover:opacity-70">
                        {dish.name}
                      </h3>
                      <p className="text-black/50 text-sm md:text-base font-sans leading-relaxed max-w-sm">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
