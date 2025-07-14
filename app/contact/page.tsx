"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown, Send, Loader2 } from 'lucide-react';
import axios from 'axios'; // Import axios

// --- Reusable Components ---

// Section Component for consistent styling
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// FAQ Item with improved accordion animation
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="border-b border-gray-200 py-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
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
                        <p className="pt-4 text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Main Contact Page Component ---

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error for the field being edited
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
        if (!formData.name) {
            newErrors.name = 'Full name is required.';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!formData.message) {
            newErrors.message = 'Message is required.';
        }
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrors({});
        
        try {
            // Use axios to send the form data to the new API endpoint
            await axios.post('/api/contact', formData);
            setSubmitStatus('success');
            // Clear the form on successful submission
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Contact form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const faqData = [
        { question: "What is the best time to travel?", answer: "The best time to travel depends on the destination. We provide detailed guides for each location, but generally, shoulder seasons (spring and fall) offer a great balance of good weather and fewer crowds." },
        { question: "Can I customize my trip?", answer: "Absolutely! We specialize in creating personalized itineraries. Contact us with your interests, and our travel experts will design a custom trip just for you." },
        { question: "What is your cancellation policy?", answer: "Our cancellation policy varies depending on the tour and booking date. Please refer to the terms and conditions on your booking confirmation or contact our support team for details." },
    ];
    
    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
    };

  return (
    <div className="bg-gray-50">
      {/* --- Hero Section --- */}
      <div className="relative h-[50vh] bg-cover bg-center text-white overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070')" }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We&apos;re here to help you plan your next unforgettable adventure.
          </motion.p>
        </div>
      </div>

      {/* --- Contact Form & Details Section --- */}
      <Section className="bg-gradient-to-b from-white to-gray-100/50">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-2xl"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <motion.form variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <motion.div variants={formVariants} className="relative">
                        <input type="text" id="name" value={formData.name} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-transparent'}`} placeholder="Full Name" />
                        <label htmlFor="name" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.name ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Full Name</label>
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </motion.div>
                    {/* Email Input */}
                    <motion.div variants={formVariants} className="relative">
                        <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-transparent'}`} placeholder="Email Address" />
                        <label htmlFor="email" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.email ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Email Address</label>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </motion.div>
                    {/* Subject Input */}
                    <motion.div variants={formVariants} className="relative">
                        <input type="text" id="subject" value={formData.subject} onChange={handleInputChange} className="peer block w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder-transparent" placeholder="Subject" />
                        <label htmlFor="subject" className="absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">Subject</label>
                    </motion.div>
                    {/* Message Textarea */}
                    <motion.div variants={formVariants} className="relative">
                        <textarea id="message" rows={5} value={formData.message} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-transparent'}`} placeholder="Your Message"></textarea>
                         <label htmlFor="message" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.message ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Your Message</label>
                         {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </motion.div>
                    {/* Submit Button */}
                    <motion.div variants={formVariants} className="pt-2">
                        <motion.button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 disabled:bg-blue-400"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? <><Loader2 className="animate-spin" /> Submitting...</> : <><Send size={18}/> Send Message</>}
                        </motion.button>
                    </motion.div>
                    <AnimatePresence>
                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`mt-4 text-center p-3 rounded-md ${submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                            >
                                {submitStatus === 'success' ? 'Message sent successfully! We will get back to you soon.' : 'Something went wrong. Please try again.'}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
            >
                <div className="space-y-8">
                    <motion.div variants={formVariants} className="flex items-start space-x-4 group">
                        <motion.div whileHover={{ y: -5, scale: 1.1 }} className="bg-blue-100 p-4 rounded-full text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><MapPin size={24}/></motion.div>
                        <div>
                            <h3 className="text-xl font-semibold">Our Office</h3>
                            <p className="text-gray-600">123 Travel Lane, Adventure City, 12345</p>
                        </div>
                    </motion.div>
                    <motion.div variants={formVariants} className="flex items-start space-x-4 group">
                        <motion.div whileHover={{ y: -5, scale: 1.1 }} className="bg-blue-100 p-4 rounded-full text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><Mail size={24}/></motion.div>
                        <div>
                            <h3 className="text-xl font-semibold">Email Us</h3>
                            <p className="text-gray-600">contact@btf-travel.com</p>
                        </div>
                    </motion.div>
                    <motion.div variants={formVariants} className="flex items-start space-x-4 group">
                        <motion.div whileHover={{ y: -5, scale: 1.1 }} className="bg-blue-100 p-4 rounded-full text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><Phone size={24}/></motion.div>
                        <div>
                            <h3 className="text-xl font-semibold">Call Us</h3>
                            <p className="text-gray-600">+123 456 7890</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={formVariants} className="mt-10 group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507885!3d-6.194741395514652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1621868344445!5m2!1sen!2sid"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="rounded-lg shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </motion.div>
            </motion.div>
        </div>
      </Section>

      {/* --- FAQ Section --- */}
      <Section className="bg-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg mt-2 text-gray-600">Have questions? We&apos;ve got answers. Here are some of the most common questions we receive.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
            {faqData.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
