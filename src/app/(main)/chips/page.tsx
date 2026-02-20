import Cta from "@/components/Cta";
import Hero from "@/components/pageComponents/chips/Hero";
import ProductShowcase1 from "@/components/pageComponents/chips/ProductShowcase1";
import ProductShowcase2 from "@/components/pageComponents/chips/ProductShowcase2";
import ProductShowcase3 from "@/components/pageComponents/chips/ProductShowcase3";
import ProductGrid from "@/components/pageComponents/chips/ProductGrid";
import { Metadata } from "next";
import WhyChooseAlan from "@/components/pageComponents/chips/WhyChooseAlan";
import Testimonial from "@/components/pageComponents/chips/Testimonial";

export const metadata: Metadata = {
  title: "Best Chips in Tamilnadu | Alan Chips",
  description: "Chips",
};

export default function Chips() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <WhyChooseAlan />
      <Testimonial />
    </>
  );
}
