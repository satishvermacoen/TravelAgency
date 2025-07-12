import WhyChooseUs from "@/components/main/WhyChooseTrips";
import HowItWorks from "@/components/main/HowItWorks";
import TrustBar from "@/components/main/TrustBar";
import HeroSection from "@/components/main/HeroSection";
import TopDestinations from "@/components/main/TopDestinations";
import FeaturedTrips from "@/components/main/FeaturedTrips";


export default function Home() {
  return (
    <div className="bg-white text-gray-700 font-sans">
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <TopDestinations />
      <FeaturedTrips />
      <WhyChooseUs /> 
    </div>  
  );
}
