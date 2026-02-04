// import Hero from "@/components/pageComponents/home/Hero";
import Hero2 from "@/components/pageComponents/home/Hero2";
import QualityProcess from "@/components/pageComponents/home/QualityProcess";
import SignatureTaste from "@/components/pageComponents/home/SignatureTaste";

export default function Home() {
  return (
    <main className="bg-white">
      {/* <Hero /> */}
      <Hero2 />
      <QualityProcess />
      <SignatureTaste />
    </main>
  );
}
