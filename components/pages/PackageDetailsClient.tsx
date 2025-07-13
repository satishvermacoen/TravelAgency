"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Calendar, Users, Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Package } from '@/components/data/packagesIndia'; // Assuming the Package type is exported from your data file
import Image from 'next/image';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// --- Reusable Tab Button Component ---
const TabButton = ({ children, isActive, onClick }: { children: React.ReactNode, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
            isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
    >
        {children}
    </button>
);

// --- Main Client Component for Package Details ---
export default function PackageDetailsClient({ packageDetails, relatedPackages }: { packageDetails: Package, relatedPackages: Package[] }) {
    const [activeTab, setActiveTab] = useState('itinerary');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <div className="bg-gray-50 text-black">
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
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                        <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2">
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Hero Section --- */}
            <div className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: `url(${packageDetails.imageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {packageDetails.title}
                    </motion.h1>
                    <motion.div
                        className="flex items-center text-lg mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <MapPin size={20} className="mr-2" />
                        <span>{packageDetails.location}</span>
                    </motion.div>
                </div>
            </div>

            {/* --- Sticky Overview & Booking Bar --- */}
            <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-500" /> <strong>Duration:</strong> {packageDetails.duration} Days</div>
                        <div className="flex items-center gap-2"><Users size={16} className="text-blue-500" /> <strong>Type:</strong> {packageDetails.type}</div>
                        <div className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> <strong>Rating:</strong> {packageDetails.rating} / 5</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-gray-900">₹{packageDetails.price.toLocaleString('en-IN')}</span>
                        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Main Content Section --- */}
            <div className="container mx-auto px-6 mt-8 mb-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Side: Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">About this tour</h2>
                            <p className="text-gray-600 leading-relaxed">{packageDetails.description}</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex flex-wrap gap-4 mb-8">
                                <TabButton isActive={activeTab === 'itinerary'} onClick={() => setActiveTab('itinerary')}>Itinerary</TabButton>
                                <TabButton isActive={activeTab === 'inclusions'} onClick={() => setActiveTab('inclusions')}>Inclusions</TabButton>
                                <TabButton isActive={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')}>Gallery</TabButton>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab === 'itinerary' && (
                                        <div className="space-y-6">
                                            {packageDetails.itinerary.map((day) => (
                                                <div key={day.day} className="flex gap-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 font-bold">Day {day.day}</div>
                                                        {day.day < packageDetails.itinerary.length && <div className="w-px h-full bg-blue-200 mt-2"></div>}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-gray-800">{day.title}</h4>
                                                        <p className="text-gray-600">{day.details}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {activeTab === 'inclusions' && (
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><Check /> What's Included</h3>
                                                <ul className="space-y-2">
                                                    {packageDetails.inclusions.map((item, i) => <li key={i} className="flex items-start gap-2"><Check size={18} className="text-green-500 mt-1 flex-shrink-0" /> <span>{item}</span></li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><X /> What's Not Included</h3>
                                                <ul className="space-y-2">
                                                    {packageDetails.exclusions.map((item, i) => <li key={i} className="flex items-start gap-2"><X size={18} className="text-red-500 mt-1 flex-shrink-0" /> <span>{item}</span></li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'gallery' && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {packageDetails.gallery.map((img, i) => (
                                                <motion.div 
                                                    key={i} 
                                                    className="overflow-hidden rounded-lg cursor-pointer" 
                                                    whileHover={{ scale: 1.05 }} 
                                                    transition={{ duration: 0.3 }}
                                                    onClick={() => setLightboxImage(img)}
                                                    layoutId={img}
                                                >
                                                    <Image src={img} width={800} height={600} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Side: You Might Also Like */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
                                <div className="space-y-4">
                                    {relatedPackages.map((pkg) => (
                                        <Link href={`/packages/${pkg.slug}`} key={pkg.id} className="flex items-center gap-4 group">
                                            <Image src={pkg. imageUrl} width={800} height={600} alt={pkg.title} className="w-24 h-24 object-cover rounded-lg" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{pkg.title}</h4>
                                                <p className="text-sm text-blue-500 flex items-center gap-1">View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
