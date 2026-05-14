"use client";
import Link from "next/link";
import Image from "next/image";
import blogData from "./blogData";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BlogList() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      );
  });

  return (
    <div className="  text-gray-900">
      {/* Hero Section */}
      <main
        className="relative h-[70vh] pt-20 text-white flex justify-center items-center flex-col bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog-page.png')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-green via-green-800/80 to-green-700/90 pointer-events-none"></div>

        <section className="relative z-10 text-center bg-transparent backdrop-blur-[1px] px-6 pb-6 shrink-0">
          <h1
            ref={headingRef}
            className="text-3xl md:text-5xl text-white font-semibold leading-tight max-w-4xl mx-auto opacity-0"
          >
            Blogs
          </h1>

          <p
            ref={paragraphRef}
            className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg font-semibold opacity-0"
          >
            Welcome to the Alan Chips blogs. Your ultimate destination for all
            things related to sustainable energy, innovation, and the future of
            power
          </p>
          {/* <div ref={ctaRef} className="mt-6 opacity-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 mx-auto group w-fit bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              <span>Get a Free Consultation</span>
              <span className="bg-brand-red text-white -rotate-40 group-hover:rotate-0 transition-all duration-200 rounded-full w-6 h-6 p-1 flex items-center justify-center text-sm">
                <ArrowRight />
              </span>
            </Link>
          </div> */}
        </section>
      </main>

      {/* Blog Grid Section */}
      <section className="w-full pt-20 max-w-7xl mx-auto px-6 lg:px-8 pb-24 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-500 font-light">Discover the latest news, updates, and insights.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogData.map((post) => (
            <Link
              href={`/blogs/${post.url}`}
              key={post.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden h-full border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  fill
                  alt={post.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col grow p-8 bg-[#fcfbf8]">
                <span className="text-sm text-gray-500 font-medium mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.date}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-8 grow line-clamp-3 font-light">
                  {post.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wide">
                  Read Article 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Simple Footer / Pagination Placeholder (Optional Visual Only) */}
      <div className="w-full text-center pb-20">
        <span className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 px-6 py-2.5 rounded-full border border-gray-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Showing all {blogData.length} articles
        </span>
      </div>
    </div>
  );
}
