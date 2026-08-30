import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    products: [
      'Deals',
      'Categories',
      'Trending Offers',
      'Price Tracker',
    ],
    company: [
      'About Us',
      'Careers',
      'Press',
      'Contact',
    ],
    resources: [
      'Help Center',
      'API',
      'Affiliates',
      'Sitemap',
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Mail, href: '#' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 mt-10 border-t border-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-3xl font-extrabold text-indigo-400 tracking-tighter">
              Good Deal
            </h4>
            <p className="text-sm mt-2 max-w-xs">
              Your ultimate destination for discovering the best discounts and value online.
            </p>
          </div>

          {/* Link Columns */}
          {Object.keys(footerLinks).map((key) => (
            <div key={key}>
              <h5 className="text-lg font-semibold text-white mb-4 capitalize">{key}</h5>
              <ul className="space-y-3 text-sm">
                {footerLinks[key].map((link) => (
                  <li key={link}>
                    <a href={`#${key}-${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-indigo-400 transition duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Icons */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
            <div className="flex space-x-5">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} aria-label={`Follow us on ${link.icon.displayName}`} className="text-gray-400 hover:text-indigo-400 transition duration-150">
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Good Deal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;