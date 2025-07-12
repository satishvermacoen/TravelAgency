"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Search, ChevronDown, Heart } from 'lucide-react';
import { allPackages, Package } from '@/components/data/packagesIndia'; // Assuming data is in app/data/packages.ts
import Link from 'next/link';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// --- Package Card Component (Corrected with Link) ---
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


// --- Main Packages Page Component ---
const PackagesPage = () => {
    const [filteredPackages, setFilteredPackages] = useState(allPackages);
    const [filters, setFilters] = useState({ type: 'All', price: 'All', duration: 'All', keyword: '' });

    useEffect(() => {
        let tempPackages = [...allPackages];

        if (filters.keyword) {
            tempPackages = tempPackages.filter(p => p.title.toLowerCase().includes(filters.keyword.toLowerCase()));
        }
        if (filters.type !== 'All') {
            tempPackages = tempPackages.filter(p => p.type === filters.type);
        }
        if (filters.price !== 'All') {
            const [min, max] = filters.price.split('-').map(Number);
            tempPackages = tempPackages.filter(p => p.price >= min && (max ? p.price <= max : true));
        }
        if (filters.duration !== 'All') {
            const [min, max] = filters.duration.split('-').map(Number);
            tempPackages = tempPackages.filter(p => p.duration >= min && (max ? p.duration <= max : true));
        }
        setFilteredPackages(tempPackages);
    }, [filters]);

    const handleFilterChange = (filterType: string, value: string) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    };

  return (
    <div className="bg-gray-50 text-black">
      <div className="relative h-[50vh] bg-fixed bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 className="text-5xl md:text-7xl font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Our Packages
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Discover curated journeys to the most amazing places on Earth.
          </motion.p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div className="relative">
                    <input type="text" placeholder="Search by name..." onChange={(e) => handleFilterChange('keyword', e.target.value)} className="w-full bg-gray-100 border-2 border-transparent rounded-full py-3 pl-10 pr-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"><Search size={20} /></div>
                </div>
                <div className="relative">
                    <select onChange={(e) => handleFilterChange('type', e.target.value)} className="w-full appearance-none bg-gray-100 border-2 border-transparent rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        <option value="All">All Types</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Beach">Beach</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><ChevronDown size={20} /></div>
                </div>
                <div className="relative">
                    <select onChange={(e) => handleFilterChange('price', e.target.value)} className="w-full appearance-none bg-gray-100 border-2 border-transparent rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        <option value="All">All Prices</option>
                        <option value="0-160000">₹0 - ₹1,60,000</option>
                        <option value="160001-240000">₹1,60,001 - ₹2,40,000</option>
                        <option value="240001-9999999">₹2,40,001+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><ChevronDown size={20} /></div>
                </div>
                <div className="relative">
                    <select onChange={(e) => handleFilterChange('duration', e.target.value)} className="w-full appearance-none bg-gray-100 border-2 border-transparent rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        <option value="All">All Durations</option>
                        <option value="1-7">1-7 Days</option>
                        <option value="8-14">8-14 Days</option>
                        <option value="15-99">15+ Days</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"><ChevronDown size={20} /></div>
                </div>
            </div>
        </div>
      </div>

      <Section className="bg-gray-100">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredPackages.length > 0 ? (
                    filteredPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h3 className="text-2xl font-bold text-gray-800">No Packages Found</h3>
                        <p className="text-gray-600 mt-2">Try adjusting your filters to find your perfect trip!</p>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
      </Section>
    </div>
  );
};

export default PackagesPage;
