// components/layout/OfferPopup.tsx

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, Gift } from 'lucide-react';

interface OfferPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferPopup = ({ isOpen, onClose }: OfferPopupProps) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', destination: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string, destination?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; phone?: string, destination?: string } = {};
        if (!formData.name) newErrors.name = 'Full name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required.';
        if (!formData.destination) newErrors.destination = 'Destination is required.';
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

        // Simulate sending email
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // This is where you would integrate an email sending service (e.g., EmailJS, SendGrid)
        // For now, we'll simulate a successful submission.
        console.log("Form data to be sent:", formData);

        setSubmitStatus('success');
        setIsSubmitting(false);
        // Hide the form after a successful submission and a short delay
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                            <X size={24} />
                        </button>
                        
                        <div className="text-center">
                            <Gift className="mx-auto text-blue-600 mb-2" size={48} />
                            <h2 className="text-3xl font-bold text-gray-900">Get a Special Offer!</h2>
                            <p className="text-gray-600 mt-2">Let us know your travel plans and we&apos;ll send you a personalized deal.</p>
                        </div>

                        {submitStatus === 'success' ? (
                            <div className="text-center py-10">
                                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                                    <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
                                    <p className="text-gray-700 mt-2">Your request has been received. We will email your personalized offer shortly.</p>
                                </motion.div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                <div className="relative">
                                    <input type="text" id="name" value={formData.name} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-transparent'}`} placeholder="Full Name" />
                                    <label htmlFor="name" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.name ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Full Name</label>
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div className="relative">
                                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-transparent'}`} placeholder="Email Address" />
                                    <label htmlFor="email" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.email ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Email Address</label>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div className="relative">
                                    <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-transparent'}`} placeholder="Phone Number" />
                                    <label htmlFor="phone" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.phone ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Phone Number</label>
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                <div className="relative">
                                    <input type="text" id="destination" value={formData.destination} onChange={handleInputChange} className={`peer block w-full px-4 py-3 bg-gray-100 border-2 rounded-md placeholder-transparent focus:ring-blue-500 focus:border-blue-500 ${errors.destination ? 'border-red-500' : 'border-transparent'}`} placeholder="Dream Destination" />
                                    <label htmlFor="destination" className={`absolute left-4 -top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${errors.destination ? 'text-red-600' : 'peer-focus:text-blue-600'}`}>Dream Destination</label>
                                    {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
                                </div>
                                <div className="pt-2">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting} 
                                        className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 disabled:bg-blue-400"
                                    >
                                        {isSubmitting ? <><Loader2 className="animate-spin" /> Sending...</> : <><Send size={18}/> Get My Offer</>}
                                    </button>
                                </div>
                                {submitStatus === 'error' && (
                                    <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again later.</p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OfferPopup;