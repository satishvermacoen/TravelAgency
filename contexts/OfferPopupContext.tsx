"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import OfferPopup from '@/components/layout/OfferPopup';

// Define the shape of the context data
interface OfferPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

// Create the context
const OfferPopupContext = createContext<OfferPopupContextType | undefined>(undefined);

/**
 * Custom hook to use the OfferPopup context.
 * This makes it easier to access the context's values.
 */
export const useOfferPopup = () => {
  const context = useContext(OfferPopupContext);
  if (!context) {
    throw new Error('useOfferPopup must be used within an OfferPopupProvider');
  }
  return context;
};

/**
 * Provider component that will wrap our application.
 * It holds the state and logic for the popup.
 */
export const OfferPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // This effect will still trigger the popup automatically on the first visit
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenOfferPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenOfferPopup', 'true');
      }, 5000); // Show popup after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <OfferPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
      {/* The actual OfferPopup component is rendered here */}
      <OfferPopup isOpen={isOpen} onClose={closePopup} />
    </OfferPopupContext.Provider>
  );
};
