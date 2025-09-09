import Hero from "../components/Hero";
import Features from "../components/Features";
import InteractiveDemo from "../components/InteractiveDemo";
import Reviews from "../components/Reviews";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import StickyBuyButton from "../components/StickyBuyButton";

function Index() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Features />
      <InteractiveDemo />
      <Reviews />
      <Pricing />
      <FAQ />
      <StickyBuyButton />
    </div>
  );
}

export default Index;