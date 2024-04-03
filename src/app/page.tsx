import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Stocks from "@/components/Stocks";
import Wallet from "@/components/Wallet";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:5rem_4rem]">
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="mx-auto">
        <Stocks />
        <Wallet />
      </div>
      <div>
        <BannerSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
