import React from "react";
import Hero from "@/components/pageComponents/contact/Hero";
import ContactFormSection from "@/components/pageComponents/contact/ContactFormSection";
import Map from "@/components/pageComponents/contact/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Alan Chips - Premium Heritage Snacks",
    description: "Get in touch with Alan Chips. We welcome enquiries from customers, partners, and distributors interested in our heritage and quality.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2, 3, 4. Contact Form, Direct Info, Social Icons (Combined in one layout section for premium balance) */}
            <ContactFormSection />

            {/* 5. Google Map Section */}
            <Map />
        </main>
    );
}
