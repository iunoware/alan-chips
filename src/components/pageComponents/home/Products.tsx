"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");

      const totalPanels = 4.2;

      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          // snap: {
          //   snapTo: 1 / (totalPanels - 1),
          //   duration: 0.5,
          //   ease: "power1.inOut",
          // },
          end: () => "+=" + containerRef.current!.offsetWidth * 3,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full py-24 md:py-40 overflow-x-clip"
      >
        <div className="flex flex-row gap-5 h-full overflow-x-clip w-[350%] px-12 md:px-12 lg:px-24">
          {/* Header Section */}
          <div className="flex panel flex-col h-full w-screen md:flex-row justify-center items-start mb-24 md:mb-32 gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl reveal text-transparent bg-linear-to-r from-orange to-amber-400 bg-clip-text md:text-5xl lg:text-7xl font-serif mb-8 md:mb-12 tracking-tight leading-[1.1]">
                The Alan Chips <br /> Collection
              </h2>
              <p className="paraReveal text-neutral-800 text-base md:text-lg font-light leading-relaxed max-w-md">
                This is not about variety; it’s about coherence at our multi-cuisine cafe
                in Madurai. Conveniently located for those seeking a cafe in Madurai
                bypass, we refine every preparation and trust the ingredient.
              </p>
            </div>
          </div>

          {/* Row 1 */}
          <div className="flex panel flex-col md:flex-row h-full w-screen items-center justify-start gap-8 md:gap-16 pl-0 md:pl-12">
            <div className="w-full md:w-6/12 ">
              <div className="image-container-fade rounded-md relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl aspect-video mx-auto">
                <Image
                  src="/images/italian.webp"
                  alt="Italian cuisine details at our multi-cuisine cafe in Madurai"
                  fill
                  loading="lazy"
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="w-full md:w-5/12 flex flex-col items-start text-left md:pb-12">
              <div className="max-w-xs">
                <h3 className="reveal block text-2xl font-bold tracking-widest text-black uppercase mb-4">
                  Italian Roots
                </h3>
                <p className="paraReveal text-md md:text-xl font-light text-neutral-800 leading-snug">
                  Simple ingredients, guided by intention and demanding complete honesty.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2*/}
          <div className="flex panel flex-col h-full w-screen md:flex-row items-center gap-8 md:gap-16 pl-0 md:pl-12">
            <div className="w-full md:w-6/12">
              <div className="image-container-fade rounded-md relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl aspect-video mx-auto">
                <Image
                  // src="/images/irish.jpg"
                  src="/images/DSC00126.JPG"
                  alt="Authentic Irish warmth and best ambience cafe in Madurai"
                  fill
                  loading="lazy"
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="w-full md:w-5/12 flex flex-col items-start justify-start text-left md:pb-12">
              <div className="max-w-xs ">
                <h3 className="reveal block text-2xl font-medium tracking-widest text-black uppercase mb-4">
                  Irish Heritage
                </h3>
                <p className="paraReveal text-md md:text-xl font-light text-neutral-800 leading-snug">
                  Authenticity isn&apos;t about rigid tradition. It represents the spirit
                  of a place.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3*/}
          <div className="flex panel flex-col md:flex-row h-full w-screen items-center gap-8 md:gap-16 pl-0 md:pl-12">
            <div className="w-full md:w-6/12">
              <div className="image-container-fade rounded-md relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl aspect-video mx-auto">
                <Image
                  src="/images/DSC00125.webp"
                  alt="American classics at our cafe in Madurai bypass"
                  fill
                  loading="lazy"
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="md:w-5/12 mx-auto">
              <h3 className="reveal block text-2xl font-medium tracking-widest text-black uppercase mb-3">
                American Classic
              </h3>
              <p className="paraReveal text-md md:text-xl font-light text-neutral-800">
                Comfort that feels earned, not engineered. A balance of bold flavors and
                careful restraint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
