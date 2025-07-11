"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Palmtree, House } from 'lucide-react';

// --- Mock Data for Indian Destinations ---
const destinations = [
    {
        name: 'Rajasthan',
        tagline: 'The Land of Kings',
        imageUrl: 'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
        description: 'Explore majestic Houses, vibrant markets, and the vast Thar Desert in this princely state.',
        icon: House
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
        icon: House // Using House as a placeholder for a temple/spiritual icon
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
            className="relative rounded-xl overflow-hidden group shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
        >
            <img src={destination.imageUrl} alt={destination.name} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Icon size={24} />
                    <h3 className="text-3xl font-bold">{destination.name}</h3>
                </div>
                <p className="text-lg font-light italic mb-4">{destination.tagline}</p>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40">
                    {destination.description}
                </p>
            </div>
        </motion.div>
    );
};


// --- Main Destinations Page Component ---
const DestinationsPage = () => {
    return (
        <div className="bg-gray-100">
            {/* --- Hero Section --- */}
            <div className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Destinations
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        From majestic mountains to serene backwaters, discover the incredible diversity of India.
                    </motion.p>
                </div>
            </div>

            {/* --- Destinations Grid --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map(dest => (
                            <DestinationCard key={dest.name} destination={dest} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">Find Your Perfect Trip</h2>
                    <p className="text-lg mt-2 text-gray-600 max-w-2xl mx-auto">
                        Ready to explore? Browse our curated packages or contact us to create a custom journey to one of these incredible destinations.
                    </p>
                    <motion.button
                        className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Explore Packages</span>
                        <ArrowRight size={20} />
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default DestinationsPage;
