"use client"

import {motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
            title: 'Timeless Serenity',
            subtitle: 'Discover the tranquil backwaters of Kerala.'
        },
        {
            url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776',
            title: 'Majestic Heritage',
            subtitle: 'Explore the iconic beauty of the Taj Mahal.'
        },
        {
            url: 'https://wallpapers.com/images/hd/elegant-city-palace-interior-in-jaipur-n2ll1w1pow94bp43.jpg',
            title: 'Royal Grandeur',
            subtitle: 'Experience the vibrant culture of Rajasthan.'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-screen text-white overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    className="absolute inset-0 h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <motion.h1
                    key={`${currentSlide}-title`}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                    key={`${currentSlide}-subtitle`}
                    className="mt-6 text-lg md:text-xl max-w-2xl text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-8"
                >
                    <a href="/destinations">
                        <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
                            Explore Tours
                        </button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;