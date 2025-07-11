import Link from 'next/link';
import { Compass, Facebook, Twitter, Instagram, Send } from 'lucide-react';

// You'll need to add these icons to your project if you haven't already:
// npm install lucide-react

const Footer = () => {
  return (
    <footer className="bg-gray-900 sticky text-gray-400">
      <div className="container mx-auto px-6 py-12">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Compass className="text-blue-500 h-8 w-8" />
              <span className="text-2xl font-bold text-white">BTF</span>
            </Link>
            <p className="text-sm">
              Passionate travel experts dedicated to creating unforgettable experiences for our clients worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/tours" className="hover:text-white transition-colors">Tours</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Travel Lane, Adventure City</li>
              <li>Email: info@btf-travel.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h4>
            <p className="mb-4 text-sm">Get travel deals and inspiration delivered to your inbox.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom section with copyright and social links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} BTF Travel. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
