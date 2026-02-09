"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".map-container", {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="map-container relative w-full h-112.5 md:h-150 overflow-hidden rounded-sm grayscale-[0.8] opacity-90 hover:grayscale-[0.3] transition-all duration-1000 border border-black/5">
          {/* de saturated Google Map Iframe Placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15754.774438318856!2d77.2662973!3d8.9545927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069d3e8e7c1e5d%3A0x7d6c5c3e8e7c1e5d!2sIlanji%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />

          {/* Premium Masking Overlay */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]" />
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
          <p className="text-xs uppercase tracking-widest font-sans">
            © 2026 Alan Chips Heritage
          </p>
          <div className="w-12 h-px bg-black/20 hidden md:block" />
          <p className="text-xs uppercase tracking-widest font-sans">
            Tenkasi District, Tamil Nadu
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
