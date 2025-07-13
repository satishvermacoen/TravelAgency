"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getDestinations } from '@/components/data/destinationDetails';
import Image from 'next/image';

// Assuming a reusable Section component exists. If not, you can define it here or import it.
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  description: string;
  icon: 'Castle' | 'Palmtree' | 'Mountain' | 'Landmark';
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  idealDuration: string;
  category: string;
}

const TopDestinations = () => {
    // Data is imported from a separate file.
    const destinations: Destination[] = getDestinations();

    return (
        <Section className="bg-white">
            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Top Destinations</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Handpicked by our experts for an unforgettable getaway.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[600px] gap-4 md:gap-6">
                {destinations.map((dest, index) => {
                    // Define dynamic grid classes based on index
                    let gridClass = '';
                    if (index === 1) gridClass = 'md:col-span-2 md:row-span-2';
                    else if (index === 0 || index === 2) gridClass = 'md:col-span-1';
                    else gridClass = 'md:col-span-1';

                    // Ensure we don't render more than needed for this layout
                    if (index > 5) return null;

                    return (
                        <Link href={`/destinations/${dest.slug}`} key={dest.name}>
                            <motion.div
                                className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-full ${gridClass}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >   
                               
                                <Image src={dest.img} alt={dest.name} width={800} height={600} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:from-black/80"></div>
                                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-3xl md:text-4xl font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                        {dest.name}
                                    </h3>
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                        <span className="font-semibold">Explore</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
};

export default TopDestinations;
