"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Check, Star, Calendar, Clock, Sun, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DestinationDetailsClient({ destination }: { destination: any }) {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    // Mock related tours data. In a real app, this would be passed as a prop.
    const relatedTours = [
        { slug: 'rajasthan-royal-tour', title: 'Royal Rajasthan', duration: '10 Days', price: 95000 },
        { slug: 'jaipur-express-getaway', title: 'Jaipur Express Getaway', duration: '4 Days', price: 35000 },
    ];

    return (
        <div className="bg-white text-black">
            {/* --- Lightbox Modal --- */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImage(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.img
                            layoutId={lightboxImage}
                            src={lightboxImage}
                            alt="Lightbox view"
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 text-white">
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Hero Section --- */}
            <div className="relative h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${destination.img})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12">
                    <motion.p 
                        className="text-lg text-blue-300 font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {destination.tagline || "An Unforgettable Destination"}
                    </motion.p>
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {destination.name}
                    </motion.h1>
                </div>
            </div>
                <br />
            {/* --- Main Content Section --- */}
            <div className="container mx-auto px-6 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Side: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* At a Glance Section */}
                        <div className="bg-white p-8 rounded-xl shadow-2xl">
                             <h2 className="text-3xl font-bold text-gray-900 mb-6">At a Glance</h2>
                             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <Calendar className="mx-auto text-blue-600 mb-2" size={32} />
                                    <p className="font-semibold">Best time to visit</p>
                                    <p className="text-sm text-gray-600">{destination.bestTimeToVisit || 'Sep - Mar'}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <Clock className="mx-auto text-blue-600 mb-2" size={32} />
                                    <p className="font-semibold">Ideal Duration</p>
                                    <p className="text-sm text-gray-600">{destination.idealDuration || '4-5 Days'}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <Sun className="mx-auto text-blue-600 mb-2" size={32} />
                                    <p className="font-semibold">Category</p>
                                    <p className="text-sm text-gray-600">{destination.category || 'Cultural'}</p>
                                </div>
                             </div>
                        </div>

                        {/* Description & Highlights */}
                        <div className="bg-white p-8 rounded-xl shadow-2xl">
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
                                        <Star className="text-yellow-500 flex-shrink-0" size={20} />
                                        <span>{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Booking CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Go?</h3>
                            <p className="text-gray-600 mb-6">Find the perfect travel package to explore the wonders of {destination.name}.</p>
                            <Link href="/packages">
                                <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                                    View Packages
                                </button>
                            </Link>
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
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                onClick={() => setLightboxImage(img)}
                                layoutId={img}
                            >
                                <Image src={img} width={800} height={600} alt={`Gallery image of ${destination.name} ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- Related Tours Section --- */}
            <section className="py-16 md:py-24 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Popular Tours in {destination.name}</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {relatedTours.map((tour, i) => (
                             <Link href={`/tours/${tour.slug}`} key={i}>
                                <motion.div
                                    className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 group cursor-pointer hover:shadow-2xl hover:border-blue-500 border-2 border-transparent transition-all duration-300"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">{tour.title}</h3>
                                        <p className="text-gray-500 mt-1">{tour.duration}</p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <p className="text-sm text-gray-500">Starts from</p>
                                        <p className="text-2xl font-bold text-blue-600">₹{tour.price.toLocaleString('en-IN')}</p>
                                    </div>
                                    <div className="ml-4">
                                        <ArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-transform duration-300" size={28}/>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
