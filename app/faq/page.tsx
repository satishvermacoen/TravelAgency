"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageSquare } from 'lucide-react';
import { faqData } from '@/components/data/faqData'; // Import the data

// --- Reusable FAQ Item Component ---
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium text-gray-800">{question}</h3>
                <div className="flex-shrink-0">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="text-gray-500" />
                    </motion.div>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-gray-600 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main FAQ Page Component ---
const FaqPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFaqData = Object.keys(faqData).reduce((acc, category) => {
        const filteredQuestions = faqData[category as keyof typeof faqData].filter(
            item =>
                item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredQuestions.length > 0) {
            acc[category] = filteredQuestions;
        }
        return acc;
    }, {} as Record<string, { question: string; answer: string }[]>);

    return (
        <div className="bg-gray-50">
            {/* --- Hero Section --- */}
            <div className="relative bg-blue-950 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1529655683826-143215295035?q=80&w=1932')"}}></div>
                <div className="relative container mx-auto px-6 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Have a question? We&aposre here to help. Find answers to common queries below.
                    </motion.p>
                </div>
            </div>
<br />
<br />

            {/* --- Main Content --- */}
            <div className="container mx-auto px-6 -mt-10 relative z-10">
                {/* Search Bar */}
                <div className="relative mb-12 text-black">
                    <input
                        type="text"
                        placeholder="Search for a question..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 text-lg border-2 border-transparent rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <Search className="text-gray-400" />
                    </div>
                </div>

                {/* FAQ Sections */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-12">
                        {Object.keys(filteredFaqData).map(category => (
                            <motion.div 
                                key={category}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{category}</h2>
                                <div className="bg-white p-8 rounded-xl shadow-md">
                                    {filteredFaqData[category].map((item, index) => (
                                        <FaqItem key={index} question={item.question} answer={item.answer} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                         {Object.keys(filteredFaqData).length === 0 && (
                            <div className="text-center py-12">
                                <h3 className="text-2xl font-bold text-gray-800">No questions found</h3>
                                <p className="text-gray-600 mt-2">Try a different search term or check out our contact section.</p>
                            </div>
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-200 text-center">
                            <MessageSquare className="mx-auto text-blue-600 mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                            <p className="text-gray-600 mb-6">
                                If you can&apost find the answer you&aposre looking for, please don&apost hesitate to reach out to our friendly support team.
                            </p>
                            <a href="/contact">
                                <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
