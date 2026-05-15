import { Metadata } from "next";
import Heritage from "@/components/pageComponents/home/Heritage";
import Hero from "@/components/pageComponents/home/Hero";
import Hero2 from "@/components/pageComponents/home/Hero2";
import QualityProcess from "@/components/pageComponents/home/QualityProcess";
import SignatureTaste from "@/components/pageComponents/home/SignatureTaste";
import ShopByCategory from "@/components/pageComponents/home/ShopByCategory";

export const metadata: Metadata = {
  title: "Alan Chips | Premium Crispy Potato Chips & Tasty Snacks",
  description:
    "Discover Alan Chips for crispy potato chips, delicious flavors, quality ingredients, and fresh snacks made for every craving. Taste the crunch everyone loves.",
};

export default function Home() {
  return (
    <main className="bg-white selection:bg-gold/50">
      <div className="lg:block hidden">
        <Hero />
      </div>
      <div className="lg:hidden block">
        <Hero2 />
      </div>
      <Heritage />
      <ShopByCategory />
      <QualityProcess />
      <SignatureTaste />
      {/* <Cta /> */}
    </main>
  );
}
