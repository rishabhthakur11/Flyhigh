import BannerSection from "@/components/BannerSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import Stocks from "@/components/Stocks";
import Wallet from "@/components/Wallet";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-[1000px] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <div className="">
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
