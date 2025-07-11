"use client";

import { motion } from 'framer-motion';
import { MapPin, Check, Castle, Palmtree, Mountain, Landmark } from 'lucide-react';

// Icon map to render components from string names
const iconMap = {
    Castle: Castle,
    Palmtree: Palmtree,
    Mountain: Mountain,
    Landmark: Landmark
};

export default function DestinationDetailsClient({ destination }: { destination: any }) {
    const Icon = iconMap[destination.icon as keyof typeof iconMap] || Mountain;

    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <div className="relative h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${destination.imageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12">
                    <motion.div
                        className="flex items-center gap-4 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                            <Icon size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold">{destination.name}</h1>
                            <p className="text-xl text-gray-200 italic">{destination.tagline}</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- Main Content Section --- */}
            <div className="container mx-auto px-6 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Side: Description & Highlights */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover {destination.name}</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">{destination.description}</p>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Highlights</h3>
                        <ul className="space-y-3">
                            {destination.highlights.map((highlight: string, i: number) => (
                                <motion.li 
                                    key={i} 
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <Check className="text-green-500 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Booking CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Go?</h3>
                            <p className="text-gray-600 mb-6">Find the perfect travel package to explore the wonders of {destination.name}.</p>
                            <a href="/packages">
                                <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                                    View Packages
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Gallery Section --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {destination.gallery.map((img: string, i: number) => (
                            <motion.div 
                                key={i} 
                                className="overflow-hidden rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <img src={img} alt={`Gallery image of ${destination.name} ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
