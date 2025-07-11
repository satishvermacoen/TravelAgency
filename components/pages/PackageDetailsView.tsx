"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Calendar, Users, Check, X, ArrowRight, Sun, Moon } from 'lucide-react';

// --- Mock Data (for a single package) ---
// In a real app, you would fetch this data based on the page's ID/slug.
const packageDetails = {
    id: 2,
    title: 'Alpine Adventure',
    location: 'Swiss Alps, Switzerland',
    price: 248000,
    duration: 10,
    rating: 5,
    type: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1540202404-1b4293T8pI?q=80&w=1974',
    description: "Embark on a breathtaking 10-day journey through the heart of the Swiss Alps. From majestic peaks and serene lakes to charming alpine villages, this adventure offers an unforgettable blend of natural beauty, thrilling activities, and authentic Swiss culture.",
    itinerary: [
        { day: 1, title: 'Arrival in Zurich & Transfer to Interlaken', details: 'Arrive at Zurich Airport (ZRH) and take a scenic train ride to Interlaken. Check into your hotel and enjoy a welcome dinner.', icon: Sun },
        { day: 2, title: 'Jungfrau - Top of Europe', details: 'Ascend to the highest railway station in Europe. Witness panoramic views of the Aletsch Glacier and surrounding peaks.', icon: Sun },
        { day: 3, title: 'Grindelwald First & Adventure', details: 'Experience the thrill of the First Flyer zip line and explore the stunning Bachalpsee lake.', icon: Sun },
        { day: 4, title: 'Lake Brienz Cruise', details: 'Enjoy a relaxing cruise on the turquoise waters of Lake Brienz, surrounded by picturesque landscapes.', icon: Sun },
        { day: 5, title: 'Travel to Zermatt', details: 'Take a scenic train to the car-free village of Zermatt, home of the iconic Matterhorn.', icon: Sun },
        { day: 6, title: 'Gornergrat & Matterhorn Views', details: 'Ride the Gornergrat railway for unparalleled views of the Matterhorn and 28 other four-thousand-meter peaks.', icon: Sun },
        { day: 7, title: 'Hiking in Zermatt', details: 'Choose from numerous hiking trails to explore the pristine nature around Zermatt.', icon: Sun },
        { day: 8, title: 'Glacier Express to St. Moritz', details: 'Board the legendary Glacier Express for a spectacular journey through the Alps to the glamorous resort of St. Moritz.', icon: Sun },
        { day: 9, title: 'Exploring St. Moritz', details: 'Discover the chic town of St. Moritz, its beautiful lake, and surrounding mountains.', icon: Sun },
        { day: 10, title: 'Departure', details: 'Enjoy a final Swiss breakfast before your departure from Zurich.', icon: Moon },
    ],
    inclusions: ['9 nights accommodation in 4-star hotels', 'Daily breakfast and welcome dinner', 'All train travel and mountain excursions as per itinerary', 'Professional English-speaking guide', 'Airport transfers'],
    exclusions: ['International airfare', 'Lunches and most dinners', 'Travel insurance', 'Personal expenses'],
    gallery: [
        'https://images.unsplash.com/photo-1537484994269-e3d24933d3b6?q=80&w=1965',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
        'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
    ]
};

const relatedPackages = [
    { id: 1, title: 'Parisian Dreams', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=2070' },
    { id: 3, title: 'Tropical Paradise', imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975' },
    { id: 4, title: 'Ancient Wonders', imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588912961e?q=80&w=2070' },
];

// --- Reusable Components ---

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

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


// --- Main Package Details Page ---

const PackageDetailsPage = () => {
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
                        {/* About this tour */}
                        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">About this tour</h2>
                            <p className="text-gray-600 leading-relaxed">{packageDetails.description}</p>
                        </div>

                        {/* Tabs */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex flex-wrap gap-4 mb-8">
                                <TabButton isActive={activeTab === 'itinerary'} onClick={() => setActiveTab('itinerary')}>Itinerary</TabButton>
                                <TabButton isActive={activeTab === 'inclusions'} onClick={() => setActiveTab('inclusions')}>Inclusions</TabButton>
                                <TabButton isActive={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')}>Gallery</TabButton>
                            </div>

                            {/* Tab Content */}
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
                                            {packageDetails.itinerary.map(day => (
                                                <div key={day.day} className="flex gap-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                                                            <day.icon size={24} />
                                                        </div>
                                                        {day.day < packageDetails.itinerary.length && <div className="w-px h-full bg-blue-200 mt-2"></div>}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-gray-800">Day {day.day}: {day.title}</h4>
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
                                                <motion.div key={i} className="overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                                    <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
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
                                    {relatedPackages.map(pkg => (
                                        <a href="#" key={pkg.id} className="flex items-center gap-4 group">
                                            <img src={pkg.imageUrl} alt={pkg.title} className="w-24 h-24 object-cover rounded-lg" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{pkg.title}</h4>
                                                <p className="text-sm text-blue-500 flex items-center gap-1">View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PackageDetailsPage;
