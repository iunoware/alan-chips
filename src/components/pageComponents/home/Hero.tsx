/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // image animation
      gsap.fromTo(
        imageRef.current,
        {
          y: 40,
          rotation: -20,
        },
        {
          y: 800,
          rotation: 0,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top top",
            scrub: true,
          },
        },
      );

      // background
      gsap.fromTo(
        bgRef.current,
        { scale: 1, borderRadius: "50%" },
        {
          scale: 4,
          borderRadius: 0,
          // ease: "power2.out",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // pin: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        ref={containerRef}
        className="flex relative flex-col items-center justify-center overflow-x-clip"
      >
        {/* heading */}
        <div>
          <h2 className="text-4xl translate-y-25 text-center font-bold z-40">Taste</h2>
          <h1 className="text-center text-7xl lg:text-9xl translate-y-30 font-bold z-40">
            Alan Chips
          </h1>
        </div>

        {/* left text */}
        <div className="w-full flex justify-start translate-y-90 ml-20">
          <h2 className="max-w-100 text-xl font-bold">
            Rooted in tradition and refined for modern tastes, Alan chips delivers trusted
            quality and timeless flavor.
          </h2>
        </div>

        {/* premium badge */}
        <div className="w-full flex absolute justify-end">
          <div className="relative flex justify-center items-center h-60">
            <img
              src="/images/badge.png"
              alt="Premium quality chips in Tamil Nadu"
              className="h-full w-full rotating"
            />
            <h3 className="absolute text-xl pl-3 font-bold text-white ">
              Premium <br />
              Quality
            </h3>
          </div>
        </div>

        {/* product image */}
        <div className="relative z-40 h-150" ref={imageRef}>
          <img
            // className="translate-y-60"
            src="/images/plantain-chips.png"
            alt="Best chips in Tamil Nadu"
            className="drop-shadow-2xl h-full"
          />
        </div>

        {/* bg */}
        <div
          ref={bgRef}
          className="h-150 w-150 absolute outline outline-green/ outline-offset-24 translate-y-40 left-1/2 -translate-x-1/2 z-0 bg-[radial-gradient(circle,white_0%,#017432_70%)]"
        ></div>

        <div className="text-white">
          <h2>Rooted in Tradition Since 1960</h2>
          <p>
            Alan Food Company began its journey over 66 years ago, introducing plantain
            chips to the public in Kerala, India. Our family pioneered a new approach to
            preparing plantain chips for commercial production—setting a standard that
            would define generations.
          </p>

          <p>
            Established in June 1960 as SAN Chips, Courtallam, our shop became the
            exclusive destination for thin-sliced plantain, potato, tapioca, and jackfruit
            chips. What started as a humble venture soon grew into a name people trusted.
          </p>

          <p>
            Today, Alan Chips in Ilanji, Tenkasi District, Tamil Nadu, is a favorite
            destination for freshly prepared chips—served in a way many had never
            experienced before.
          </p>

          <p>
            When people hear Alan Chips, we want them to think of one thing: a delicious
            snack, made the right way.
          </p>
          <p>— Alan Food Company</p>
        </div>
      </section>
    </>
  );
}
