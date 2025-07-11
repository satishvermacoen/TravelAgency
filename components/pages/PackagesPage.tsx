"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Search, ChevronDown, Heart } from 'lucide-react';

// --- Reusable Components ---

// Section Component
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// Package Card Component
const PackageCard = ({ pkg }: { pkg: any }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white rounded-xl shadow-lg overflow-hidden group border border-transparent hover:border-blue-500 transition-all duration-300"
    >
        <div className="relative">
            <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">{pkg.type}</div>
            <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-red-500 hover:scale-110 transition-all duration-300">
                <Heart size={20} />
            </button>
        </div>
        <div className="p-6">
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
            <p className="text-gray-600 text-sm mb-4">{pkg.duration} Days | Includes flights, hotels, and tours.</p>
            <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                View Details
            </button>
        </div>
    </motion.div>
);


// --- Main Packages Page Component ---

const PackagesPage = () => {
    const allPackages = [
        { id: 1, title: 'Parisian Dreams', location: 'Paris, France', price: 152000, duration: 7, rating: 5, type: 'Cultural', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=2070' },
        { id: 2, title: 'Alpine Adventure', location: 'Swiss Alps', price: 248000, duration: 10, rating: 5, type: 'Adventure', imageUrl: 'https://images.unsplash.com/photo-1540202404-1b4293T8pI?q=80&w=1974' },
        { id: 3, title: 'Tropical Paradise', location: 'Maldives', price: 336000, duration: 12, rating: 5, type: 'Beach', imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975' },
        { id: 4, title: 'Ancient Wonders', location: 'Rome, Italy', price: 176000, duration: 8, rating: 4, type: 'Cultural', imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588912961e?q=80&w=2070' },
        { id: 5, title: 'Kyoto Serenity', location: 'Kyoto, Japan', price: 224000, duration: 9, rating: 5, type: 'Cultural', imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070' },
        { id: 6, title: 'Santorini Sunset', location: 'Santorini, Greece', price: 280000, duration: 7, rating: 4, type: 'Beach', imageUrl: 'https://images.unsplash.com/photo-1570158242221-794342699a43?q=80&w=1974' },
    ];
    
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
    <div className="bg-gray-50">
      {/* --- Hero Section --- */}
      <div className="relative h-[50vh] bg-fixed bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Packages
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover curated journeys to the most amazing places on Earth.
          </motion.p>
        </div>
      </div>

      {/* --- Filters Section --- */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {/* Keyword Search */}
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search by name..." 
                        onChange={(e) => handleFilterChange('keyword', e.target.value)}
                        className="w-full bg-gray-100 border-2 border-transparent rounded-full py-3 pl-10 pr-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <Search size={20} />
                    </div>
                </div>
                {/* Filter by Type */}
                <div className="relative">
                    <select onChange={(e) => handleFilterChange('type', e.target.value)} className="w-full appearance-none bg-gray-100 border-2 border-transparent rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        <option value="All">All Types</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Beach">Beach</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={20} />
                    </div>
                </div>
                {/* Filter by Price */}
                <div className="relative">
                    <select onChange={(e) => handleFilterChange('price', e.target.value)} className="w-full appearance-none bg-gray-100 border-2 border-transparent rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        <option value="All">All Prices</option>
                        <option value="0-160000">₹0 - ₹1,60,000</option>
                        <option value="160001-240000">₹1,60,001 - ₹2,40,000</option>
                        <option value="240001-9999999">₹2,40,001+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={20} />
                    </div>
                </div>
                 {/* Filter by Duration */}
                <div className="relative">
                    <select onChange={(e) => handleFilterChange('duration', e.target.value)} className="w-full appearance-none bg-gray-100 border-2 border-transparent rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        <option value="All">All Durations</option>
                        <option value="1-7">1-7 Days</option>
                        <option value="8-14">8-14 Days</option>
                        <option value="15-99">15+ Days</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={20} />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Packages Grid Section --- */}
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

      {/* --- Special Offer Section --- */}
      <Section className="bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-2xl p-12 grid lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h2 className="text-4xl font-extrabold mb-4">Limited Time Offer!</h2>
                <p className="text-lg text-blue-100 mb-6">Book the "Alpine Adventure" package this month and get a free city tour and a complimentary dinner for two. Don't miss out on this exclusive deal!</p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
                    Learn More
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block relative z-10"
            >
                <img src="https://images.unsplash.com/photo-1540202404-1b4293T8pI?q=80&w=1974" alt="Alpine Adventure" className="rounded-lg shadow-lg" />
            </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default PackagesPage;
