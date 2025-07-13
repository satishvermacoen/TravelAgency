"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { allPackages, Package } from '@/components/data/packagesIndia'; // Assuming data is here
import Image from 'next/image';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// --- Corrected and Consolidated Package Card Component ---
const PackageCard = ({ pkg }: { pkg: Package }) => (
    // The entire card is wrapped in a Link component for navigation.
    // The href uses the unique `slug` for dynamic routing.
    <Link href={`/packages/${pkg.slug}`} className="h-full">
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group border border-transparent hover:shadow-2xl hover:border-blue-500 transition-all duration-300 h-full flex flex-col cursor-pointer"
        >
            <div className="relative w-full h-64">
                <Image 
                    src={pkg.imageUrl} 
                    alt={pkg.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{pkg.type}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">{pkg.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                    <span className="truncate">{pkg.location}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-blue-600">₹{pkg.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className={`transition-colors ${i < pkg.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{pkg.duration} Days</p>
                <div className="w-full mt-auto bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2">
                    <span>View Details</span>
                    <ArrowRight size={18} />
                </div>
            </div>
        </motion.div>
    </Link>
);

// --- Cleaned up Tours Page ---
const ToursPage = () => {
  // Directly use the imported data. Filtering logic can be added back when the UI is ready.
  const packages = allPackages;

  return (
    <Section className="bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Signature Journeys</h2>
        <p className="text-lg mt-2 text-gray-600">Discover our most popular, expertly-crafted tours.</p>
      </div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {packages.length > 0 ? (
                    // The key is now the unique 'slug' property, which fixes the error.
                    packages.slice(0, 6).map(pkg => <PackageCard key={pkg.slug} pkg={pkg} />)
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h3 className="text-2xl font-bold text-gray-800">No Packages Found</h3>
                        <p className="text-gray-600 mt-2">Please check back later for our amazing tour packages!</p>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
      </Section>
  );
};

export default ToursPage;
