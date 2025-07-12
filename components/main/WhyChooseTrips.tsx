import { Map, Users, Sun, LifeBuoy } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="text-center">
    <div className="mx-auto bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Travel With Bron To Fly ?</h2>
          <p className="text-gray-600 mt-2">We are committed to providing the best travel experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Feature icon={<Map size={30} />} title="Expert-Curated Itineraries" description="Our trips are designed by travel experts to ensure you see the best of every destination." />
          <Feature icon={<Users size={30} />} title="Local Guides" description="Experience authentic culture with our friendly and knowledgeable local guides." />
          <Feature icon={<Sun size={30} />} title="Unforgettable Experiences" description="We go beyond the typical tourist spots to create truly unique and lasting memories." />
          <Feature icon={<LifeBuoy size={30} />} title="24/7 Support" description="Travel with peace of mind knowing our team is available to assist you anytime." />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;