import Destinations from "@/components/basic/Destinations";
import EmailSignup from "@/components/basic/EmailSignup";
import FeaturedTrips from "@/components/basic/FeaturedTrips";
import Hero from "@/components/basic/Hero";
import Services from "@/components/basic/Services";
import Testimonials from "@/components/basic/Testimonials";
import WhyChooseUs from "@/components/basic/WhyChooseTrips";
import ContactPage from "@/components/pages/ContactPage";


export default function Home() {
  return (
    <div className="bg-white text-gray-200 font-sans">
      <Hero />
      <Destinations />
      <FeaturedTrips />
      <Services />
      <WhyChooseUs />
    </div>  
  );
}
