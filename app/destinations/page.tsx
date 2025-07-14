"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getDestinations, Destination } from '@/components/data/destinationDetails';

// A reusable Section component for consistent padding and layout.
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// --- Dedicated Destination Card Component ---
// This component encapsulates the look and feel of a single destination card.
const DestinationCard = ({ destination, index }: { destination: Destination, index: number }) => {
  return (
    <Link href={`/destinations/${destination.slug}`} className="block group">
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-lg h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <Image 
          src={destination.img} 
          alt={destination.name} 
          width={800} 
          height={900} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {destination.name}
          </h3>
          <p className="mt-2 text-white/90">{destination.tagline}</p>
          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-semibold">Explore</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// --- Main Page Component ---
// Renamed from TopDestinations to DestinationsPage for clarity.
const DestinationsPage = () => {
    const destinations = getDestinations();

    return (
        <Section className="bg-gray-50">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Destinations</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Handpicked by our experts for an unforgettable journey.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((dest, index) => (
                    <DestinationCard key={dest.slug} destination={dest} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default DestinationsPage;
