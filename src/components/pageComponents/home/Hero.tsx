/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
// import Link from "next/link";
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
          y: 850,
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
        {
          scale: 1,
          // borderRadius: "50%",
        },
        {
          scale: 4,
          // borderRadius: 0,
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

      gsap.from(".fade-in-text", {
        // y: 20,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade.in-text",
          start: "top 95%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        ref={containerRef}
        // className="flex relative bg-[url('/images/hero-bg.webp')] bg-cover bg-center h-auto flex-col items-center justify-center overflow-x-clip"
        className="flex relative flex-col items-center justify-center overflow-x-clip"
      >
        {/* heading */}
        <div>
          <h2 className="text-4xl fade-in-text text-transparent bg-clip-text bg-linear-to-r from-orange to-amber-400 translate-y-25 text-center font-bold z-40">
            Taste
          </h2>
          <h1 className="text-center flex flex-col text-transparent bg-clip-text bg-linear-to-r from-orange to-amber-400 fade-in-text text-7xl lg:text-9xl translate-y-30 font-bold z-40">
            Alan Chips
            <span className="fade-in-text text-xl opacity-90 mb-1 text-orange">
              Crafted Taste, Preserved Since 1960
            </span>
          </h1>
        </div>

        {/* left text */}
        <div className="w-full fade-in-text flex justify-start translate-y-60 ml-20">
          <h2 className="max-w-100 text-xl font-bold">
            Rooted in tradition and refined for modern tastes, Alan chips delivers trusted
            quality and timeless flavor.
          </h2>
        </div>

        {/* premium badge */}
        <div className="w-full -translate-y-40 flex absolute fade-in-text justify-end">
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
          {/* <div className="absolute inset-0 opacity-20 z-30 bg-[radial-gradient(circle,white_0%,#017432_70%)] rounded-full"></div> */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_25%,rgba(255,255,255,0.2)_45%,transparent_65%)] blur-2xl rounded-full pointer-events-none" />
          <img
            // className="translate-y-60"
            src="/images/plantain-chips.png"
            alt="Best chips in Tamil Nadu"
            className="drop-shadow-2xl h-full z-40"
          />
        </div>

        {/* bg */}
        <div
          ref={bgRef}
          // className="h-150 w-150 absolute outline outline-green/ outline-offset-24 translate-y-40 left-1/2 -translate-x-1/2 z-0 bg-[radial-gradient(circle,white_0%,#017432_70%)]"
          className="h-150 rounded-full w-150 absolute outline outline-green outline-offset-24 translate-y-40 left-1/2 -translate-x-1/2 z-0 bg-green"
        ></div>

        <div className="flex w-full mr-10 justify-between items-start">
          {/* left main content */}
          <div className="text-white ml-15 flex justify-start w-full z-40 fade-in-text translate-y-80">
            <div className="w-120 space-y-5">
              <h2 className="text-3xl">Rooted in Tradition Since 1960</h2>
              <ul className="list-disc ml-5 space-y-4">
                <li>
                  Began over 66 years ago in Kerala, pioneering plantain chips for
                  commercial production.
                </li>
                <li>
                  Introduced a new standard in thin-sliced plantain, potato, tapioca, and
                  jackfruit chips.
                </li>
                <li>
                  Established in June 1960 as SAN Chips, Courtallam, earning deep customer
                  trust.
                </li>
                <li>
                  Today, Alan Chips in Ilanji, Tenkasi District, is known for freshly
                  prepared, authentic chips.
                </li>
                <li>
                  The name Alan Chips stands for one promise: a delicious snack, made the
                  right way.
                </li>
              </ul>
              <p>— Alan Food Company</p>
            </div>
          </div>

          {/* right main content */}
          <div className="text-white flex justify-end w-full z-40 fade-in-text translate-y-80">
            <div className="w-120 space-y-5">
              <h2 className="text-3xl">About Alan Chips</h2>
              <ul className="list-disc ml-5 space-y-4">
                <li>Stands for quality, tradition, and irresistible taste since 1960.</li>
                <li>
                  Crafted with carefully selected ingredients and decades of expertise.
                </li>
                <li>Every bite delivers authentic flavor with consistent excellence.</li>
                <li>
                  Rooted in tradition yet refined for modern tastes, blending heritage
                  with innovation.
                </li>
                <li>
                  From the House of Joy Foods, a trusted symbol of freshness, reliability,
                  and uncompromised quality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
