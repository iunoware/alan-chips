"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const chips = [
  {
    id: 1,
    image: "/images/products/alan-chips.webp",
    alt: "Alan Chips Classic",
    title: "Alan Chips Classic",
    content:
      "Our signature crunch. The original Alan Chips recipe — perfectly sliced, lightly seasoned, and fried for a clean, timeless taste.",
  },
  {
    id: 2,
    image: "/images/products/plantain-chips.webp",
    alt: "Plantain Chips",
    title: "Plantain Chips",
    content:
      "Naturally crisp and traditionally made. Raw plantains sliced thin and fried to golden perfection for an authentic crunch.",
  },
  {
    id: 3,
    image: "/images/products/plantain-masala-chips.webp",
    alt: "Plantain Masala Chips",
    title: "Plantain Masala Chips",
    content:
      "Spice that speaks tradition. Classic plantain chips coated with a balanced masala blend that adds depth without overpowering.",
  },
  {
    id: 4,
    image: "/images/products/potato-puthina-masala-chips.webp",
    alt: "Potato Puthina Masala Chips",
    title: "Potato Puthina Masala Chips",
    content:
      "Fresh mint, bold flavour. Crispy potato chips infused with refreshing pudhina masala for a cool, flavour-packed bite.",
  },
  {
    id: 5,
    image: "/images/products/potato-salted-chips.webp",
    alt: "Potato Salted Chips",
    title: "Potato Salted Chips",
    content:
      "Simple, honest, and perfect. Fresh potatoes, lightly salted and fried just right — nothing added, nothing needed.",
  },
  {
    id: 6,
    image: "/images/products/stripe-sweet-plantain-chips.webp",
    alt: "Stripe Sweet Plantain Chips",
    title: "Stripe Sweet Plantain Chips",
    content:
      "Extra crunch with natural sweetness. Distinctively striped ripe plantain slices delivering a richer texture.",
  },
  {
    id: 7,
    image: "/images/products/sweet-plantain-chips.webp",
    alt: "Sweet Plantain Chips",
    title: "Sweet Plantain Chips",
    content:
      "Naturally sweet indulgence. Made from ripe plantains for a smooth crunch and authentic sweetness.",
  },
  {
    id: 8,
    image: "/images/products/tapioca-finger-chips.webp",
    alt: "Tapioca Finger Chips",
    title: "Tapioca Finger Chips",
    content:
      "Hearty and satisfying. Thick-cut tapioca fried slowly to create a bold crunch with a nostalgic taste.",
  },
  {
    id: 9,
    image: "/images/products/tapioca-round-chips.webp",
    alt: "Tapioca Round Chips",
    title: "Tapioca Round Chips",
    content:
      "Classic comfort in every bite. Crisp tapioca rounds lightly seasoned for a traditional snack experience.",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");

      const totalPanels = 10.7;

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
          end: () => "+=" + containerRef.current!.offsetWidth * 9,
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
        <div className="flex flex-row gap-5 h-full overflow-x-clip w-[950%] px-12 md:px-12 lg:px-24">
          {/* Header Section */}
          <div className="flex panel flex-col h-full w-screen md:flex-row justify-center items-start mb-24 md:mb-32 gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl reveal text-transparent bg-linear-to-r from-orange to-amber-400 bg-clip-text md:text-5xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight leading-[1.1]">
                The Alan Chips <br /> Collection
              </h2>
              <p className="paraReveal text-neutral-800 text-base md:text-lg font-light leading-relaxed max-w-md">
                A carefully crafted range of chips made the traditional way — using
                natural ingredients, time-honored techniques, and flavors that feel
                familiar from the very first bite.
              </p>
            </div>
          </div>

          {/* Rows */}
          {/* <div className="flex panel flex-col md:flex-row h-full w-screen items-center justify-start gap-8 md:gap-16 pl-0 md:pl-12"> */}
          {chips.map((chip) => (
            <div
              key={chip.id}
              className="flex panel flex-col md:flex-row h-full w-screen items-center justify-start gap-8 md:gap-16 pl-0 md:pl-12"
            >
              <div className="w-full md:w-6/12 ">
                <div className="image-container-fade rounded-md relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl aspect-video mx-auto">
                  <Image
                    src={chip.image}
                    alt={chip.alt}
                    fill
                    loading="lazy"
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="w-full md:w-5/12 flex flex-col items-start text-left md:pb-12">
                <div className="max-w-xs">
                  <h3 className="reveal block text-3xl font-bold tracking-widest gradient-text uppercase mb-4">
                    {chip.title}
                  </h3>
                  <p className="paraReveal text-md md:text-lg text-neutral-800 leading-snug">
                    {chip.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
