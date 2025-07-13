"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass } from 'lucide-react';

const FancyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  // --- Effect to handle scroll detection ---
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  // --- Animation Variants ---
  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.07, // This will stagger the animation of children
        delayChildren: 0.2 
      }
    },
  };

  const mobileLinkVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
          opacity: 1,
          y: 0,
          transition: { ease: 'easeOut' }
      }
  };

  return (
    <>
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
            {/* <img src="/logo.png" alt="Bron To Fly Logo" className="h-8 w-8" /> */}
            <span className={`text-2xl font-bold transition-colors ${hasScrolled ? 'text-gray-900' : 'text-white'}`}>
                Safar
              </span>
            </Link>

            {/* --- Desktop Navigation --- */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-medium transition-colors duration-300 ${hasScrolled ? (isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600') : (isActive ? 'text-white' : 'text-white/80 hover:text-white')}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 ${hasScrolled ? 'bg-blue-600' : 'bg-white'}`}
                        layoutId="underline"
                        initial={false}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            
            {/* --- Mobile Menu Button --- */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Toggle menu">
                <Menu className={`h-7 w-7 transition-colors ${hasScrolled ? 'text-gray-800' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Panel (Fullscreen Overlay) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-50 flex flex-col p-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <Compass className="h-8 w-8 text-white" />
                    <span className="text-2xl font-bold text-white">Brontofly</span>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <X className="h-8 w-8 text-white" />
                </button>
            </div>
            <motion.nav className="flex flex-col items-center justify-center flex-grow space-y-6">
              {navLinks.map((link, i) => (
                // By removing the explicit initial/animate props here, the child
                // will correctly inherit the animation sequence from its parent.
                <motion.div key={link.href} variants={mobileLinkVariants}>
                  <Link
                    href={link.href}
                    className={`text-3xl font-semibold transition-colors ${pathname === link.href ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FancyHeader;
