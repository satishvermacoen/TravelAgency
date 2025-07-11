"use client";

import { motion } from 'framer-motion';
import { Mountain, Palmtree, Castle, Landmark } from 'lucide-react';
import Link from 'next/link';

// --- Mock Data for Indian Destinations ---
const destinations = [
    {
        name: 'Rajasthan',
        tagline: 'The Land of Kings',
        imageUrl: 'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
        description: 'Explore majestic forts, vibrant markets, and the vast Thar Desert in this princely state.',
        icon: Castle
    },
    {
        name: 'Kerala',
        tagline: 'God\'s Own Country',
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
        description: 'Cruise through serene backwaters, relax on pristine beaches, and wander through lush tea plantations.',
        icon: Palmtree
    },
    {
        name: 'Himachal Pradesh',
        tagline: 'The Himalayan Abode',
        imageUrl: 'https://images.unsplash.com/photo-1616388969582-37d883773f75?q=80&w=2070',
        description: 'Discover snow-capped peaks, picturesque valleys, and charming hill stations in the lap of the Himalayas.',
        icon: Mountain
    },
    {
        name: 'Goa',
        tagline: 'The Pearl of the Orient',
        imageUrl: 'https://images.unsplash.com/photo-1560179406-1f621e84b244?q=80&w=2070',
        description: 'Enjoy sun-kissed beaches, vibrant nightlife, Portuguese architecture, and delicious seafood.',
        icon: Palmtree
    },
    {
        name: 'Varanasi',
        tagline: 'The Spiritual Capital',
        imageUrl: 'https://images.unsplash.com/photo-1561361089-c45388e36b85?q=80&w=2071',
        description: 'Witness ancient rituals on the ghats of the Ganges in one of the world\'s oldest living cities.',
        icon: Landmark
    },
    {
        name: 'Leh-Ladakh',
        tagline: 'The Land of High Passes',
        imageUrl: 'https://images.unsplash.com/photo-1614769709322-27e1b52349e5?q=80&w=2070',
        description: 'Experience dramatic landscapes, crystal-clear lakes, and ancient monasteries in this high-altitude desert.',
        icon: Mountain
    },
];

// --- Destination Card Component ---
const DestinationCard = ({ destination }: { destination: any }) => {
    const Icon = destination.icon;
    return (
        <motion.div
            className="relative rounded-xl overflow-hidden group shadow-lg w-80 md:w-96 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
        >
            <img src={destination.imageUrl} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Icon size={24} />
                    <h3 className="text-3xl font-bold">{destination.name}</h3>
                </div>
                <p className="text-lg font-light italic mb-4">{destination.tagline}</p>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 text-sm">
                    {destination.description}
                </p>
            </div>
        </motion.div>
    );
};


// --- Redesigned Destinations Component with Auto-Scroll ---
const Destinations = () => {
    return (
        <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
            {/* Custom CSS for the marquee animation */}
            <style jsx>{`
                @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 60s linear infinite;
                }
            `}</style>
            
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Explore Incredible India</h2>
                    <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
                        From majestic mountains to serene backwaters, discover the destinations that make India unique.
                    </p>
                </div>
            </div>

            {/* Auto-scrolling Marquee Container */}
            <div className="group flex gap-8 overflow-hidden py-4">
                <div className="flex flex-shrink-0 gap-8 animate-marquee group-hover:[animation-play-state:paused]">
                    {/* Render cards once */}
                    {destinations.map(dest => (
                        <DestinationCard key={dest.name} destination={dest} />
                    ))}
                    {/* Render cards a second time for a seamless loop */}
                    {destinations.map(dest => (
                        <DestinationCard key={`${dest.name}-duplicate`} destination={dest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
