"use client";

import Link from "next/link";

const Cta = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-100"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      />

      {/* Subtle Overlay: dark-to-transparent gradient as requested to improve contrast */}
      {/* <div className="absolute inset-0 bg-black/35 pointer-events-none" /> */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20 pointer-events-none" /> */}

      {/* CTA Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Heading: Premium Editorial Style, Uppercase, Serif (Cinzel Decorative) */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[0.05em] mb-8 font-normal uppercase">
          <span className="block mb-1 md:mb-2 opacity-95">THIS IS WHAT</span>
          <span className="block text-[#D4AF37] mb-1 md:mb-2">QUALITY</span>
          <span className="block opacity-95">TASTES LIKE</span>
        </h2>

        {/* Subtext: Clean Sans-Serif, Muted Opacity, Center Aligned */}
        <p className="text-base md:text-lg lg:text-xl text-black/80 font-sans max-w-md md:max-w-2xl mb-14 leading-relaxed tracking-wide">
          Every batch is made with intention — because details matter.
        </p>

        {/* Buttons (Primary + Secondary): Stack on mobile, Horizontal on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-xs md:max-w-none md:w-auto">
          {/* Primary Button: Warm gold / caramel tone, Rounded, Elevated on hover */}
          <Link
            href="/chips"
            className="w-full shadow-xl md:w-auto px-10 md:px-14 py-5 bg-[#C59B46] hover:bg-[#B38A3A] text-white rounded-full font-sans font-semibold text-xs md:text-sm transition-all duration-500 hover:shadow-[#C59B46]/30 hover:-translate-y-1 active:scale-[0.98] uppercase tracking-[0.2em] group overflow-hidden relative"
          >
            <span className="relative z-10">Shop the Collection</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* Secondary Button: Outline button, Subtle hover fill */}
          <Link
            href="/contact"
            className="w-full shadow-xl md:w-auto px-10 md:px-14 py-5 border border-white/30 hover:bg-white/10 text-black rounded-full font-sans font-semibold text-xs md:text-sm transition-all duration-500 backdrop-blur-[2px] uppercase tracking-[0.2em] active:scale-[0.98] hover:border-white/60"
          >
            Talk to Alan Chips →
          </Link>
        </div>
      </div>

      {/* Visual cinematic anchor */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <div className="w-px h-16 bg-linear-to-b from-white to-transparent" />
      </div> */}
    </section>
  );
};

export default Cta;
