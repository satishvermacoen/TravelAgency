"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { allPackages, Package } from '@/components/data/packagesIndia';


const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);
// --- Redesigned Trip Card Component ---
const TripCard = ({ trip }: { trip: any }) => (
    <Link href={`/tours/${trip.slug}`} passHref>
        <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden group border border-transparent hover:shadow-2xl hover:border-blue-500 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.6 }}
        >
            <div className="relative">
                <img src={trip.image} alt={trip.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{trip.type}</div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">{trip.title}</h3>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                    <span className="truncate">{trip.location}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-blue-600">₹{trip.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-800">{trip.duration}</p>
                    </div>
                </div>
                 <div className="mt-6">
                    <div className="w-full bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <span>View Details</span>
                        <ArrowRight size={18} />
                    </div>
                </div>
            </div>
        </motion.div>
    </Link>
);

const PackageCard = ({ pkg }: { pkg: Package }) => (
    // The entire card is wrapped in a Link component.
    // The href now correctly points to the dynamic route.
    <Link href={`/packages/${pkg.slug}`} className="h-full">
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group border border-transparent hover:border-blue-500 transition-all duration-300 h-full flex flex-col cursor-pointer"
        >
            <div className="relative">
                <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">{pkg.type}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">{pkg.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                    <span className="truncate">{pkg.location}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-semibold text-blue-600">₹{pkg.price.toLocaleString('en-IN')}</p>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className={`transition-colors ${i < pkg.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{pkg.duration} Days | Includes flights, hotels, and tours.</p>
                <div className="w-full mt-auto bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-center">
                    View Details
                </div>
            </div>
        </motion.div>
    </Link>
);
// --- Redesigned Tours Page ---
const ToursPage = () => {
  const [filteredPackages, setFilteredPackages] = useState(allPackages);
  

  return (
    <Section className="bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Signature Journeys</h2>
        <p className="text-lg mt-2 text-gray-600">Discover our most popular, expertly-crafted tours.</p>
      </div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredPackages.length > 0 ? (
                    filteredPackages.slice(0, 6).map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h3 className="text-2xl font-bold text-gray-800">No Packages Found</h3>
                        <p className="text-gray-600 mt-2">Try adjusting your filters to find your perfect trip!</p>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
      </Section>
  );
};

export default ToursPage;
