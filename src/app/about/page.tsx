import Cta from "@/components/Cta";
import Hero from "@/components/pageComponents/about/Hero";
import OriginStory from "@/components/pageComponents/about/OriginStory";
import TimeLine from "@/components/pageComponents/about/TimeLine";
import Products from "@/components/pageComponents/about/Products";

export default function About() {
  return (
    <main>
      <Hero />
      <TimeLine />
      <OriginStory />
      <Products />
      <Cta />
    </main>
  );
}
