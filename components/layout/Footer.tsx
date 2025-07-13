import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

// You'll need to add these icons to your project if you haven't already:
// npm install lucide-react

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Brontofly</h3>
                    <p>Crafting unforgettable journeys in Incredible India.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
                        <li><Link href="/packages" className="hover:text-white">Packages</Link></li>
                        <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Mail size={16} /> info@brontofly.com</li>
                        <li className="flex items-center gap-2"><Phone size={16} /> +91 123 456 7890</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                <p>&copy; {new Date().getFullYear()} Brontofly. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
