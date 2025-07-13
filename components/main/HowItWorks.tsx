import { MapPin, MessageSquare, ShieldCheck } from "lucide-react";

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

const HowItWorks = () => (
    <Section>
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Your Journey Starts Here</h2>
            <p className="text-lg mt-2 text-gray-600">In 3 simple steps, we&aposll turn your travel dreams into reality.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
                <div className="mx-auto bg-blue-100 text-blue-600 rounded-full h-20 w-20 flex items-center justify-center">
                    <MessageSquare size={40} />
                </div>
                <h3 className="text-xl font-semibold">1. Tell Us Your Dream</h3>
                <p className="text-gray-600">Share your travel style, interests, and desired destinations with our experts.</p>
            </div>
            <div className="space-y-4">
                <div className="mx-auto bg-blue-100 text-blue-600 rounded-full h-20 w-20 flex items-center justify-center">
                    <MapPin size={40} />
                </div>
                <h3 className="text-xl font-semibold">2. Get a Custom Itinerary</h3>
                <p className="text-gray-600">We&aposll craft a personalized, day-by-day plan complete with unique experiences.</p>
            </div>
            <div className="space-y-4">
                <div className="mx-auto bg-blue-100 text-blue-600 rounded-full h-20 w-20 flex items-center justify-center">
                    <ShieldCheck size={40} />
                </div>
                <h3 className="text-xl font-semibold">3. Book & Travel Securely</h3>
                <p className="text-gray-600">Confirm your trip with confidence and get ready for an unforgettable adventure.</p>
            </div>
        </div>
    </Section>
);

export default HowItWorks;
