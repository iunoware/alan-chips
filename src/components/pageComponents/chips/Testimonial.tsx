"use client";

import React, { useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    rating: 5,
    text: "Super crispy and fresh. Reminds me of homemade chips!",
    name: "Priya",
    city: "Chennai",
  },
  {
    rating: 5,
    text: "Best quality chips ever. Fast delivery and safe packaging.",
    name: "Arjun",
    city: "Coimbatore",
  },
  {
    rating: 5,
    text: "Really tasty and hygienic. My go-to snack for every evening!",
    name: "Meena",
    city: "Madurai",
  },
];

const Testimonial = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const leftCol = containerRef.current?.querySelector(".brand-rating");
      const reviewItems = gsap.utils.toArray(".review-item");

      gsap.from(leftCol as Element, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(reviewItems, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-24 border-b border-neutral-100/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Rating Summary */}
          <div className="lg:col-span-5 space-y-8 brand-rating">
            <a
              href="https://share.google/jxIf0UwYmzjRfn0Ze"
              target="_blank"
              className="space-y-4 cursor-pointer"
            >
              <span className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-bold tracking-wide uppercase">
                Customer Reviews
              </span>
              <div className="flex items-baseline gap-4">
                <h2 className="text-6xl pb-8 md:text-7xl font-black text-neutral-900 tracking-tighter">
                  4.8
                  <span className="text-3xl text-neutral-300 font-medium ml-1">
                    /5
                  </span>
                </h2>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>
                  <p className="text-neutral-500 font-medium mt-1">
                    Overall Rating
                  </p>
                </div>
              </div>
            </a>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900 leading-tight">
                  Loved by thousands <br />
                  across Tamil Nadu.
                </h3>
                <p className="text-neutral-500 text-lg">
                  Authentic flavor. Traditional touch. <br />
                  Delivered straight from our kitchen to yours.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 overflow-hidden ring-1 ring-neutral-100"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                        alt="avatar"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-green-50 flex items-center justify-center text-[10px] font-bold text-green-700 ring-1 ring-neutral-100">
                    +1.2k
                  </div>
                </div>
                <p className="text-sm font-medium text-neutral-600">
                  Join 1,200+ happy snackers
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Review Snippets */}
          <div className="lg:col-span-7 space-y-5">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-item group transition-all duration-500"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed group-hover:text-green-800 transition-colors duration-300">
                    "{review.text}"
                  </blockquote>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-0.5 w-6 bg-green-700/30 group-hover:w-10 transition-all duration-500"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                      <span className="font-bold text-neutral-900">
                        {review.name}
                      </span>
                      <span className="hidden md:inline text-neutral-300">
                        •
                      </span>
                      <span className="text-neutral-500 text-sm font-medium">
                        {review.city}
                      </span>
                    </div>
                  </div>
                </div>

                {index !== reviews.length - 1 && (
                  <div className="mt-12 w-full h-px bg-neutral-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
