import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import StatsBar from "@/components/sections/StatsBar";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureHighlights />
        <StatsBar />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
