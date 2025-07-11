"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // To detect the active page
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import { Compass, Menu, X } from 'lucide-react';

// You'll need to install framer-motion: npm install framer-motion

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  const navLinks = [
    { href: "/destinations", label: "Destinations" },
    { href: "/tours", label: "Tours" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    exit: { opacity: 0, y: -20 }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-900/10">
      <div className="container mx-auto px-6">
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Compass className="text-blue-600 h-8 w-8" />
            <span className="text-2xl font-bold text-gray-900">BTF</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'} transition-colors duration-300 hover:text-blue-600`}
                >
                  {link.label}
                  {/* Underline effect for active and hovered links */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="underline" // Animate the underline between links
                      initial={false}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* CTA Button for desktop */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-7 w-7 text-gray-800" /> : <Menu className="h-7 w-7 text-gray-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <nav className="flex flex-col pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-md text-lg font-medium ${pathname === link.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {/* CTA Button for mobile */}
                <motion.div variants={linkVariants} className="pt-4 px-4">
                   <button className="w-full bg-blue-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md">
                      Book Now
                   </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
