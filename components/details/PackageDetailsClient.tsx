"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Calendar, Users, Check, X, ArrowRight, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { TabButton } from '../ui/TabButton';


// This is the main interactive component.
// It receives all necessary data as props from its parent Server Component.
export default function PackageDetailsClient({ packageDetails, relatedPackages }: { packageDetails: any, relatedPackages: any[] }) {
    const [activeTab, setActiveTab] = useState('itinerary');

    return (
        <div className="bg-gray-50">
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
            <div className="container mx-auto px-6 mt-8">
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
                                    {/* ... Tab content JSX ... */}
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
                                    {relatedPackages.map(pkg => (
                                        <Link href={`/packages/${pkg.id}`} key={pkg.id} className="flex items-center gap-4 group">
                                            <img src={pkg.imageUrl} alt={pkg.title} className="w-24 h-24 object-cover rounded-lg" />
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