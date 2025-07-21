"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { topDestinationsData } from '../data/topDestinationsData';
import Image from 'next/image';

// Assuming a reusable Section component exists. If not, you can define it here or import it.
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

const TopDestinations = () => {
    // Take the first 4 destinations for the slideshow
    const destinations = topDestinationsData;
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto-scroll logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [destinations.length]);

    return (
        <Section className="bg-blue-50/50">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-4xl font-bold text-center text-gray-900">Top Destinations for a Quick Getaway</h2>
                <p className="text-lg text-gray-600 text-center mt-2">Ideal for 3-5 days trip</p>
            </div>
            
            <div className="relative h-[60vh] md:h-[500px] w-full rounded-2xl shadow-2xl overflow-hidden">
                {/* Main Slideshow Image */}
                <AnimatePresence>
                    <motion.div
                        key={activeSlide}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <Image 
                            src={destinations[activeSlide].img} 
                            alt={destinations[activeSlide].name}
                            width={800} height={600} 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                    <AnimatePresence mode="wait">
                        <motion.h3
                            key={`${activeSlide}-title`}
                            className="text-4xl md:text-6xl font-extrabold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {destinations[activeSlide].name}
                        </motion.h3>
                    </AnimatePresence>
                </div>
                
                {/* Thumbnails */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.slug}
                            onClick={() => setActiveSlide(index)}
                            className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                                activeSlide === index ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                            whileHover={{ scale: activeSlide === index ? 1.1 : 1.05 }}
                        >
                            <Image src={dest.img} alt={dest.name} width={800} height={600} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}; 

export default TopDestinations;
