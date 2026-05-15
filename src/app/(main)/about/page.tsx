import { Metadata } from "next";
import Hero from "@/components/pageComponents/about/Hero";
import OriginStory from "@/components/pageComponents/about/OriginStory";
import TimeLine from "@/components/pageComponents/about/TimeLine";
import Products from "@/components/pageComponents/about/Products";
import MakesUsDifferent from "@/components/pageComponents/about/MakesUsDifferent";
import WhyLove from "@/components/pageComponents/about/WhyLove";

// app/about/page.js

export const metadata: Metadata = {
  title: "About Alan Chips | Traditional Chips & Snack Brand",
  description:
    "Learn about Alan Chips, a trusted snack brand offering potato chips, tapioca chips, banana chips, and crunchy traditional snacks made with premium ingredients.",
};

export default function About() {
  return (
    <main>
      <Hero />
      <TimeLine />
      <OriginStory />
      <MakesUsDifferent />
      <Products />
      <WhyLove />
      {/* <Cta /> */}
    </main>
  );
}
