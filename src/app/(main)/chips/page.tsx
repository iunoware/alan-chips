import Hero from "@/components/pageComponents/chips/Hero";
// import ProductShowcase1 from "@/components/pageComponents/chips/ProductShowcase1";
// import ProductShowcase2 from "@/components/pageComponents/chips/ProductShowcase2";
// import ProductShowcase3 from "@/components/pageComponents/chips/ProductShowcase3";
import ProductGrid from "@/components/pageComponents/chips/ProductGrid";
import { Metadata } from "next";
import WhyChooseAlan from "@/components/pageComponents/chips/WhyChooseAlan";
import Testimonial from "@/components/pageComponents/chips/Testimonial";

export const metadata: Metadata = {
  title: "Alan Chips Products | Potato, Tapioca & Banana Chips",
  description:
    "Explore Alan Chips products including crispy potato chips, tapioca chips, raw banana chips, spicy flavors, and delicious traditional crunchy snacks.",
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
