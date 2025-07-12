"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield } from 'lucide-react';
import { termsData } from '@/components/data/termsData';

// --- Mock Data for T&C Sections ---
// In a real app, this content might come from a CMS or a Markdown file.
const termsSections = termsData;

// --- Main Terms & Conditions Page Component ---
const TermsAndConditionsPage = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    // This effect can be used to track which section is currently in view
    // For simplicity, we'll just handle click-based active state.

    return (
        <div className="bg-gray-50 text-black">
            {/* --- Hero Section --- */}
            <div className="relative bg-gray-800 text-white py-20 md:py-28">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070')"}}></div>
                <div className="relative container mx-auto px-6 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Terms & Conditions
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Last updated: July 14, 2025. Please read our terms carefully before using our services.
                    </motion.p>
                </div>
            </div>

            {/* --- Main Content --- */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    
                    {/* --- Sidebar Navigation --- */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sections</h3>
                            <ul className="space-y-2">
                                {termsSections.map(section => (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            onClick={() => setActiveSection(section.id)}
                                            className={`block px-4 py-2 rounded-md transition-all duration-200 ${
                                                activeSection === section.id
                                                    ? 'bg-blue-600 text-white font-semibold'
                                                    : 'text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* --- Terms Content --- */}
                    <main className="lg:col-span-3">
                        <div className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-xl shadow-md">
                            {termsSections.map(section => (
                                <motion.div
                                    key={section.id}
                                    id={section.id}
                                    className="mb-10 scroll-mt-24"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="!text-3xl !font-bold !mb-4">{section.title}</h2>
                                    <p>{section.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
