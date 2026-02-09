"use client";

import { useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function TimeLine() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 90%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   // Animate Timeline Line
  //   tl.fromTo(
  //     ".timeline-line",
  //     { scaleX: 0 },
  //     {
  //       scaleX: 1,
  //       duration: 1.5,
  //       ease: "power3.inOut",
  //       transformOrigin: "left",
  //     },
  //   );

  //   // Animate Timeline Nodes and Text
  //   tl.fromTo(
  //     ".timeline-node",
  //     { scale: 0, opacity: 0 },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 0.5,
  //       stagger: 0.2,
  //       ease: "back.out(1.7)",
  //     },
  //     "-=1",
  //   );

  //   tl.fromTo(
  //     ".timeline-content",
  //     { y: 20, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
  //     "-=0.8",
  //   );

  //   // Animate Side Content
  //   tl.fromTo(
  //     contentRef.current,
  //     { x: 50, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
  //     "-=1",
  //   );
  // }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Timeline Line
      tl.fromTo(
        ".timeline-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          transformOrigin: "left",
        },
      );

      // Animate Timeline Nodes and Text
      tl.fromTo(
        ".timeline-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=1",
      );

      tl.fromTo(
        ".timeline-content",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.8",
      );

      // Animate Side Content
      tl.fromTo(
        contentRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1",
      );
    },
    { scope: sectionRef },
  );

  const milestones = [
    {
      year: "1960",
      title: "The Beginning",
      description:
        "Alan Chips was introduced to the public in Kerala, redefining how plantain chips were made and enjoyed.",
    },
    {
      year: "Legacy",
      title: "A Family Craft",
      description:
        "Generations carried forward the tradition, perfecting thin-sliced plantain, potato, tapioca, and jackfruit chips.",
    },
    {
      year: "Today",
      title: "Tradition, Refined",
      description:
        "From Ilanji, Tamil Nadu, Alan Chips continues to deliver fresh, authentic flavors with uncompromised quality.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle architectural grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">
          {/* Timeline Section (Left/Top) */}
          <div ref={timelineRef} className="w-full lg:w-3/5 relative pt-10">
            {/* Main Horizontal Line */}
            <div className="absolute top-13 left-0 w-full h-0.5 bg-amber-500/20 timeline-line origin-left"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative group">
                  {/* Dot/Marker */}
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-blue/90 relative z-10 mb-6 timeline-node shadow-lg group-hover:scale-125 transition-transform duration-300 mx-auto md:mx-0">
                    <div className="absolute inset-0 rounded-full bg-orange opacity-0 group-hover:opacity-20 animate-ping"></div>
                  </div>

                  {/* Text */}
                  <div className="timeline-content text-center md:text-left">
                    <span className="block heading text-2xl font-bold text-orange mb-2 group-hover:gradient-text transition-colors duration-300">
                      {milestone.year}
                    </span>
                    <h4 className="heading text-lg font-bold text-[#1A1A1A] mb-2">
                      {milestone.title}
                    </h4>
                    <p className="content text-sm text-stone-700 leading-relaxed max-w-50 mx-auto md:mx-0">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intro Text Section (Right/Bottom) */}
          <div ref={contentRef} className="w-full lg:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-blue/50"></span>
              <span className="uppercase tracking-[0.2em] text-xs font-bold gradient-text/70 content">
                Our Story
              </span>
            </div>

            <h2 className="heading text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">
              Over Six Decades of <br />
              <span className="gradient-text italic">Authentic Taste</span>
            </h2>

            <p className="content text-md text-stone-600 mb-10 leading-relaxed">
              Alan Chips began as a small family effort rooted in tradition and care. What
              started in 1960 as a simple idea — making chips the right way — has grown
              into a trusted name known for freshness, authenticity, and uncompromising
              quality. Every batch reflects our belief that great taste comes from
              patience, intention, and respect for ingredients.
            </p>

            {/* <Link
              href="/aboutus"
              className="group flex items-center gap-4 text-[#1A1A1A] font-bold content tracking-wide hover:text-stone-600 transition-colors"
            >
              <span className="border-b-2 text-sm md:text-lg border-[#1A1A1A] pb-1 group-hover:border-stone-600 transition-colors">
                Learn More About Us
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
