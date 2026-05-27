"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import blogData from "../blogData";

type Block = {
  type: string;
  text?: React.ReactNode;
  level?: number;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  path?: string;
  alt?: string;
  content?: { question: string; answer: string }[];
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogHero = ({ blog }: { blog: any }) => {
  return (
    <div className="relative w-full min-h-[60vh] md:min-h-screen flex flex-col justify-end pb-16 px-6 lg:px-12">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          fill
          priority
          src={blog.image}
          alt={blog.title}
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/5 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative pb-20 z-10 max-w-5xl mx-auto w-full text-center md:text-left flex flex-col items-center md:items-start animate-fade-in-up">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4 mb-6">
          <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
            {blog.category}
          </span>
          <span className="flex items-center gap-1.5 text-gray-200 text-xs md:text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            <Clock className="w-4 h-4" /> 5 min read
          </span>
          <span className="text-gray-200 text-xs md:text-sm font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {blog.date}
          </span>
        </div>

        <h1 className="text-4xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-xl">
          {blog.title}
        </h1>

        <p className="text-lg text-gray-300 font-light max-w-3xl leading-relaxed drop-shadow-md border-l-4 border-amber-500 pl-4 md:pl-6 text-left">
          {blog.summary}
        </p>
      </div>
    </div>
  );
};

const BlogTOC = ({ blocks }: { blocks: Block[] }) => {
  const headings = blocks
    .filter((b) => b.type === "heading" && b.text)
    .map((b) => String(b.text));
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -60% 0px" },
    );

    headings.forEach((h) => {
      const el = document.getElementById(slugify(h));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        In this article
      </h4>
      <ul className="space-y-4 border-l-2 border-gray-100 pl-4">
        {headings.map((heading, i) => {
          const slug = slugify(heading);
          const isActive = activeId === slug;
          return (
            <li key={i}>
              <a
                href={`#${slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(slug)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block text-sm transition-all duration-300 ${
                  isActive
                    ? "text-gray-900 font-bold translate-x-1"
                    : "text-gray-500 hover:text-gray-900 hover:translate-x-1"
                }`}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BlogFAQ = ({
  content,
}: {
  content: { question: string; answer: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="my-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {content.map((faq, i) => (
          <div
            key={i}
            className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? "bg-[#fdfbf7] shadow-md border-amber-200" : "bg-white hover:border-gray-300"}`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span
                className={`text-lg font-bold transition-colors ${openIndex === i ? "text-amber-700" : "text-gray-900 group-hover:text-amber-600"}`}
              >
                {faq.question}
              </span>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openIndex === i ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-500"}`}
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 text-gray-700 leading-relaxed text-lg font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogContent = ({ blocks }: { blocks: Block[] }) => {
  return (
    <div className="grow max-w-3xl w-full mx-auto lg:mx-0">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-lg md:text-[21px] text-gray-700 leading-[1.8] mb-8 font-light tracking-wide text-justify sm:text-left"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          const slug = block.text ? slugify(String(block.text)) : "";
          return (
            <h2
              key={i}
              id={slug}
              className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-16 mb-8 scroll-mt-32 relative inline-block"
            >
              {block.text}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-400 rounded-full"></span>
            </h2>
          );
        }
        if (block.type === "list") {
          // KEY TAKEAWAYS Check - Style first list as takeaways
          const isFirstList = blocks.findIndex((b) => b.type === "list") === i;
          if (isFirstList) {
            return (
              <div
                key={i}
                className="bg-amber-50/80 border border-amber-200 rounded-3xl p-8 md:p-10 my-12 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6 flex items-center gap-3 relative z-10">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white shadow-md text-sm">
                    ★
                  </span>
                  Key Takeaways
                </h3>
                <ul className="space-y-4 relative z-10">
                  {block.items?.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-4 text-lg md:text-[19px] text-amber-950/80 leading-relaxed font-medium"
                    >
                      <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-amber-400 shrink-0 shadow-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          return (
            <ul key={i} className="space-y-4 my-8 pl-2 md:pl-4">
              {block.items?.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-4 text-lg md:text-[21px] text-gray-700 leading-[1.8] font-light"
                >
                  <span className="w-2 h-2 mt-3.5 rounded-full bg-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-gray-200 my-12 shadow-sm bg-white"
            >
              <div className="overflow-x-auto w-full">
                <table className="min-w-full text-left border-collapse whitespace-nowrap">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {block.headers?.map((header, k) => (
                        <th
                          key={k}
                          className="p-6 text-sm font-bold uppercase tracking-widest text-gray-500 bg-gray-50/50"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {block.rows?.map((row, r) => (
                      <tr
                        key={r}
                        className="bg-white hover:bg-gray-50/50 transition-colors"
                      >
                        {row.map((column, c) => (
                          <td
                            key={c}
                            className="p-6 text-gray-700 font-medium text-lg"
                          >
                            {column}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={i} className="my-16 group">
              <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[2/1] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  fill
                  src={block.path || ""}
                  alt={block.alt || "Article visual"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none"></div>
              </div>
              {block.alt && (
                <figcaption className="text-center text-sm font-medium text-gray-400 mt-5 italic tracking-wide">
                  {block.alt}
                </figcaption>
              )}
            </figure>
          );
        }
        if (block.type === "faq") {
          return <BlogFAQ key={i} content={block.content || []} />;
        }
        return null;
      })}
    </div>
  );
};

const BlogRelated = ({ currentUrl }: { currentUrl: string }) => {
  const related = blogData.filter((b) => b.url !== currentUrl).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="bg-white py-24 px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 text-center md:text-left">
            Keep Reading
          </h2>
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors group px-6 py-3 bg-amber-50 rounded-full"
          >
            View all articles{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((post) => (
            <Link
              href={`/blogs/${post.url}`}
              key={post.id}
              className="group block h-full"
            >
              <div className="bg-[#fcfbf8] rounded-3xl overflow-hidden h-full border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <span className="text-sm text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {post.date}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-amber-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 text-base leading-relaxed mb-8 grow font-light">
                    {post.summary}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wide">
                    Read Story{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function BlogDetails() {
  const { blogIndividual } = useParams();
  const selectedBlog = blogData.find((blog) => blog.url === blogIndividual);

  if (!selectedBlog) {
    return (
      <div className="bg-[#fdfbf7] min-h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <Link
            href="/blogs"
            className="text-amber-600 font-semibold hover:underline"
          >
            &larr; Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  // Get these values from your blog post data
  // Replace the existing handler functions with these improved versions
  const postTitle = selectedBlog.title;
  const postUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://alanchips.com/blogs/${selectedBlog.url}`;

  const handleNativeShare = async () => {
    if (typeof window === "undefined") return;

    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: postTitle,
          text: `hey check this out - ${postTitle} `,
          url: postUrl,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.name !== "AbortError") {
          // Fallback: copy to clipboard
          await navigator.clipboard.writeText(shareUrl);
          alert("Link copied to clipboard!");
        }
      }
    } else {
      // Fallback for desktop browsers
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="bg-[#fcfbf8] selection:bg-amber-200 selection:text-amber-900 font-sans flex flex-col min-h-screen">
      {/* <ScrollProgress /> */}

      {/* NORMAL HERO SECTION - Scrolls naturally outside fixed layout */}
      <div className="w-full">
        <BlogHero blog={selectedBlog} />
      </div>

      {/* 3-COLUMN VIEWPORT ARCHITECTURE - Native Scrolling */}
      <div id="article-wrapper" className="w-full relative grow">
        <div className="flex flex-col lg:flex-row w-full max-w-400 mx-auto relative">
          {/* LEFT COLUMN - Fixed TOC */}
          {/* <aside className="hidden lg:block w-72 xl:w-80 shrink-0 relative border-r border-gray-100 bg-[#fcfbf8]">
            <div className="sticky top-[76px] h-[calc(100vh-76px)] overflow-y-auto scrollbar-hide p-6 lg:p-8 pb-32 flex-col">
              <BlogTOC blocks={selectedBlog.fullContent as Block[]} />
            </div>
          </aside> */}

          {/* CENTER COLUMN - Native Scrolling */}
          <main
            id="center-scroll-container"
            className="grow min-w-0 scroll-smooth relative bg-[#fcfbf8] flex flex-col"
          >
            {/* Article Content */}
            <div className="max-w-4xl mx-auto w-full px-6 lg:px-12 py-12 md:py-16">
              <div className="lg:hidden mb-12">
                <BlogTOC blocks={selectedBlog.fullContent as Block[]} />
              </div>
              <BlogContent blocks={selectedBlog.fullContent as Block[]} />

              <div className="lg:hidden mt-12 flex justify-center border-t border-gray-100 pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Share Article
                  </span>
                  <button className="p-3 bg-white rounded-full text-gray-400 hover:text-amber-500 hover:shadow-md transition-all border border-gray-100">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full text-gray-400 hover:text-blue-600 hover:shadow-md transition-all border border-gray-100">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full text-gray-400 hover:text-sky-500 hover:shadow-md transition-all border border-gray-100">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full text-gray-400 hover:text-blue-700 hover:shadow-md transition-all border border-gray-100">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <BlogRelated currentUrl={selectedBlog.url} />

            {/* Contact Section Restyled */}
            {/* <section className="bg-gray-900 text-white py-24 px-6 text-center relative overflow-hidden mt-auto">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
              </div>

              <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
                  Contact Fuji Solar <br />
                  <span className="text-amber-400">Zero your current Bill</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
                  Take the first step towards sustainable energy. Reach out to
                  our experts for a comprehensive analysis.
                </p>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 justify-center items-center">
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">
                      Call Us
                    </span>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+919842076979"
                        className="text-2xl font-bold text-white hover:text-amber-400 transition-colors"
                      >
                        +91 98420 76979
                      </a>
                      <a
                        href="tel:+919842105949"
                        className="text-2xl font-bold text-white hover:text-amber-400 transition-colors"
                      >
                        +91 98421 05949
                      </a>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-24 bg-white/20"></div>
                  <div className="md:hidden h-px w-full bg-white/20"></div>

                  <div className="flex flex-col items-center gap-4">
                    <span className="text-gray-400 uppercase tracking-widest text-sm font-bold">
                      Email
                    </span>
                    <a
                      href="mailto:info@fujisolar.in"
                      className="text-2xl font-bold text-white hover:text-amber-400 transition-colors break-all"
                    >
                      info@fujisolar.in
                    </a>
                    <a
                      href="mailto:info@fujisolar.in"
                      className="mt-4 bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </section> */}
          </main>

          {/* RIGHT COLUMN - Fixed Share */}
          <aside className="hidden xl:block w-24 shrink-0 relative border-l border-gray-100 bg-[#fcfbf8]">
            <div className="sticky top-19 h-[calc(100vh-76px)] overflow-y-auto scrollbar-hide flex-col items-center py-12 pb-32 flex">
              <div className="flex flex-col gap-6 items-center w-full">
                <span
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 rotate-180"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Share Article
                </span>
                <div className="h-16 w-px bg-gray-200" />

                {/* Native Share (Web Share API) */}
                <button
                  onClick={handleNativeShare}
                  className="p-3 bg-white rounded-full text-gray-400 hover:text-amber-500 hover:shadow-md transition-all border border-gray-100 group"
                  aria-label="Share article"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/alan_chips_"
                  target="_blank"
                  className="p-3 bg-white rounded-full text-gray-400 hover:text-blue-600 hover:shadow-md transition-all border border-gray-100 group"
                  aria-label="Share on Facebook"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>

                {/* whatsapp */}
                {/* <button
                  onClick={handleTwitterShare}
                  className="p-3 bg-white rounded-full text-gray-400 hover:text-sky-500 hover:shadow-md transition-all border border-gray-100 group"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button> */}

                {/* LinkedIn */}
                {/* <button
                  onClick={handleLinkedInShare}
                  className="p-3 bg-white rounded-full text-gray-400 hover:text-blue-700 hover:shadow-md transition-all border border-gray-100 group"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
