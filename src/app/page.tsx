import Cta from "@/components/Cta";
import Heritage from "@/components/pageComponents/home/Heritage";
import Hero from "@/components/pageComponents/home/Hero";
import Hero2 from "@/components/pageComponents/home/Hero2";
// import ProductGrid from "@/components/pageComponents/chips/ProductGrid";
import QualityProcess from "@/components/pageComponents/home/QualityProcess";
import SignatureTaste from "@/components/pageComponents/home/SignatureTaste";
import ShopByCategory from "@/components/pageComponents/home/ShopByCategory";

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
      {/* <ProductGrid /> */}
      <QualityProcess />
      <SignatureTaste />
      <Cta />
    </main>
  );
}
