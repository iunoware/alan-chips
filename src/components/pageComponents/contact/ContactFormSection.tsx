"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircleMore,
} from "lucide-react";

const ContactFormSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(
    () => {
      gsap.from(".reveal-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Contact Form - 7 Cols on Desktop */}
        <div className="lg:col-span-12 xl:col-span-7 reveal-item">
          <div className="bg-[#FAF9F6] p-8 md:p-12 lg:p-16 rounded-md border border-black/5 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-normal gradient-text mb-10 uppercase tracking-wide">
              Send a Message
            </h3>

            <form ref={formRef} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest text-black/50 font-medium ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full rounded-md shadow-md bg-white focus:border-amber-400 border border-black/10 px-6 py-4 outline-hidden transition-colors placeholder:text-black/20 text-black font-sans"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest text-black/50 font-medium ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md shadow-md bg-white focus:border-amber-400 border border-black/10 px-6 py-4 outline-hidden transition-colors placeholder:text-black/20 text-black font-sans"
                  />
                </div>
              </div>

              {/* <div className="flex flex-col gap-2">
                <label
                  htmlFor="enquiry"
                  className="text-xs uppercase tracking-widest text-black/50 font-medium ml-1"
                >
                  Enquiry Type
                </label>
                <select
                  id="enquiry"
                  name="enquiry"
                  className="w-full bg-white border border-black/10 px-6 py-4 outline-hidden focus:border-[#C59B46]/50 transition-colors text-black/60 font-sans appearance-none"
                >
                  <option value="customer">Customer Enquiry</option>
                  <option value="business">Business / Partnership</option>
                  <option value="distributor">Distributor / Wholesale</option>
                </select>
              </div> */}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-black/50 font-medium ml-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full rounded-md shadow-md bg-white focus:border-amber-400 border border-black/10 px-6 py-4 outline-hidden transition-colors placeholder:text-black/20 text-black font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="group rounded-md relative w-full md:w-auto px-12 py-5 bg-black text-white hover:bg-[#C59B46] transition-all duration-500 uppercase tracking-[0.2em] text-xs font-semibold overflow-hidden"
              >
                <span className="relative z-10">Send Enquiry</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info & Socials - 5 Cols on Desktop */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center space-y-16">
          {/* Direct Contact Info */}
          <div className="reveal-item space-y-10">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#C59B46] font-bold mb-6">
                Direct Contact
              </h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center shrink-0 group-hover:border-[#C59B46]/30 transition-colors duration-500">
                    <MapPin
                      size={20}
                      strokeWidth={1.5}
                      className="text-black/40 group-hover:text-[#C59B46] transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-black/40 mb-1 font-medium italic">
                      Visit Us
                    </p>
                    <p className="text-base text-black font-medium font-sans leading-relaxed">
                      Ilanji, Tenkasi District,
                      <br />
                      Tamil Nadu - 627805
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center shrink-0 group-hover:border-[#C59B46]/30 transition-colors duration-500">
                    <Phone
                      size={20}
                      strokeWidth={1.5}
                      className="text-black/40 group-hover:text-[#C59B46] transition-colors duration-500"
                    />
                  </div>
                  <a href="tel:+919876543210" className="cursor-pointer">
                    <p className="text-xs uppercase tracking-widest text-black/40 mb-1 font-medium italic">
                      Call Us
                    </p>
                    <p className="text-lg text-black font-sans font-medium">
                      +91 98765 43210
                    </p>
                  </a>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center shrink-0 group-hover:border-[#C59B46]/30 transition-colors duration-500">
                    <Mail
                      size={20}
                      strokeWidth={1.5}
                      className="text-black/40 group-hover:text-[#C59B46] transition-colors duration-500"
                    />
                  </div>
                  <a href="mailto:hello@alanchips.com" className="cursor-pointer">
                    <p className="text-xs uppercase tracking-widest text-black/40 mb-1 font-medium italic">
                      Email Us
                    </p>
                    <p className="text-lg text-black font-sans font-medium">
                      hello@alanchips.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="reveal-item">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C59B46] font-bold mb-6">
              Connect Online
            </h4>
            <div className="flex items-center gap-6">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                {
                  icon: MessageCircleMore,
                  label: "whatsapp",
                  href: "https://wa.me/919876543210",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 group"
                >
                  <social.icon
                    size={22}
                    strokeWidth={1.2}
                    className="text-black/60 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
