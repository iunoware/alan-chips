"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const bgElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle entrance animation for content
      gsap.from(".footer-content > div", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // Subtle slow drift for background elements
      const elements = bgElementsRef.current?.querySelectorAll(".bg-shape");
      if (elements) {
        elements.forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -20 : 20,
            x: i % 3 === 0 ? 15 : -15,
            duration: 10 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Heritage", href: "/about" },
    { name: "Product Range", href: "/chips" },
    // { name: "Global Presence", href: "/presence" },
    { name: "Contact Us", href: "/contact" },
  ];

  // const productCategories = [
  //   { name: "Tapioca Signature", href: "/products/tapioca" },
  //   { name: "Classic Potato", href: "/products/potato" },
  //   { name: "Specialty Banana", href: "/products/banana" },
  //   { name: "Regional Delights", href: "/products/regional" },
  // ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "", name: "Instagram" },
    { icon: <Facebook size={18} />, href: "", name: "Facebook" },
    { icon: <Twitter size={18} />, href: "", name: "Twitter" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-center bg-cover  pt-24 pb-12 border-t border-black/5"
    >
      {/* <div className="absolute inset-0 h-full w-full bg-[url('/images/alan-chips-about.webp')] backdrop-blur-2xl"></div> */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Story Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-600">
              Our Heritage
            </h3>
            <p className="text-md leading-relaxed text-black/70 max-w-sm">
              Since 1960, we have been dedicated to the craft of traditional snacking.
              Grounded in South Tamil Nadu&apos;s rich culture, every chip carries the
              legacy of six decades of excellence and meticulous attention to quality.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <span className="w-8 h-px bg-green/30"></span>
              <span className="text-xs tracking-widest uppercase text-green font-semibold">
                Legacy in every bite
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-600">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/60 hover:text-green transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-green group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-600">
                Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-sm text-black/60">
                  <MapPin size={16} className="text-green/50 mt-1 shrink-0" />
                  <span>
                    Main Road, Kovilpatti,
                    <br />
                    Tamil Nadu 628501, India
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-black/60">
                  <Phone size={16} className="text-green/50 shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-black/60">
                  <Mail size={16} className="text-green/50 shrink-0" />
                  <span>heritage@alanchips.com</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-black/40 hover:text-green hover:border-green/20 hover:bg-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <a
            href="https://iunoware.com"
            className="text-[10px] tracking-[0.2em] uppercase text-black/30"
          >
            © 2026 Iunoware Pvt Ltd. All rights reserved.
          </a>
          <div className="flex space-x-8">
            <Link
              href="/privacy"
              className="text-[10px] tracking-[0.2em] uppercase text-black/30 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] tracking-[0.2em] uppercase text-black/30 hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
