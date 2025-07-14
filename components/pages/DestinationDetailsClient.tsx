"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Calendar, Clock, Sun, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Destination, RelatedTour } from '../data/destinationDetails';

// --- Type Definitions ---
interface DestinationDetailsClientProps {
  destination: Destination;
  relatedTours: RelatedTour[];
}

// --- Sub-Components for a Cleaner Structure ---

// Hero Section Component
const HeroSection = ({ name, tagline, img }: { name: string, tagline?: string, img: string }) => (
    <div className="relative h-[70vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12">
            <motion.p 
                className="text-lg text-blue-300 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                {tagline || "An Unforgettable Destination"}
            </motion.p>
            <motion.h1
                className="text-5xl md:text-7xl font-extrabold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                {name}
            </motion.h1>
        </div>
    </div>
);

// "At a Glance" Info Card Component
const InfoCard = ({ icon: Icon, title, value }: { icon: React.ElementType, title: string, value: string }) => (
    <div className="bg-blue-50 p-4 rounded-lg text-center">
        <Icon className="mx-auto text-blue-600 mb-2" size={32} />
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{value}</p>
    </div>
);

// Main Details and Highlights Section
const DetailsSection = ({ destination }: { destination: Destination }) => (
    <div className="space-y-8">
        <br />
        <br />
        <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">At a Glance</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <InfoCard icon={Calendar} title="Best time to visit" value={destination.bestTimeToVisit || 'N/A'} />
                <InfoCard icon={Clock} title="Ideal Duration" value={destination.idealDuration || 'N/A'} />
                <InfoCard icon={Sun} title="Category" value={destination.category || 'N/A'} />
            </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover {destination.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{destination.description}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Highlights</h3>
            <ul className="space-y-3">
                {destination.highlights.map((highlight, i) => (
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
);

// Booking Call-to-Action Component
const BookingCTA = ({ destinationName }: { destinationName: string }) => (
    <div className="sticky top-28 bg-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Go?</h3>
        <p className="text-gray-600 mb-6">Find the perfect travel package to explore the wonders of {destinationName}.</p>
        <Link href="/packages">
            <motion.button 
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                View Packages
            </motion.button>
        </Link>
    </div>
);

// Gallery Section Component
const GallerySection = ({ gallery, destinationName, onImageClick }: { gallery: string[], destinationName: string, onImageClick: (img: string) => void }) => (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.map((img, i) => (
                    <motion.div 
                        key={i} 
                        className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        onClick={() => onImageClick(img)}
                        layoutId={img}
                    >
                        <Image src={img} width={800} height={600} alt={`Gallery image of ${destinationName} ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// Related Tours Section Component
const RelatedToursSection = ({ tours, destinationName }: { tours: RelatedTour[], destinationName: string }) => (
    <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Popular Tours in {destinationName}</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {tours.map((tour, i) => (
                    <Link href={`/packages/${tour.slug}`} key={i}>
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 group cursor-pointer hover:shadow-2xl hover:border-blue-500 border-2 border-transparent transition-all"
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
                                <ArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-transform" size={28}/>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

// --- Main Client Component ---
export default function DestinationDetailsClient({ destination, relatedTours }: DestinationDetailsClientProps) {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <div className="bg-white text-black">
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
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                        <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2">
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <HeroSection name={destination.name} tagline={destination.tagline} img={destination.img} />
            
            <div className="container mx-auto px-6 -mt-16 relative z-20 mb-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <DetailsSection destination={destination} />
                    </div>
                    <div className="lg:col-span-1">
                        <BookingCTA destinationName={destination.name} />
                    </div>
                </div>
            </div>

            <GallerySection gallery={destination.gallery} destinationName={destination.name} onImageClick={setLightboxImage} />
            
            <RelatedToursSection tours={relatedTours} destinationName={destination.name} />
        </div>
    );
}
