import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const navItems = [
  { name: 'Deals', href: '#categories' },
  { name: 'Categories', href: '#categories' },
  { name: 'Stores', href: '#stores' },
  { name: 'How It Works', href: '#how-it-works' },
];

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Wordmark */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-extrabold text-indigo-600 tracking-tighter">
              Good Deal
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150"
              >
                {item.name}
              </a>
            ))}
            <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Find Deals
            </button>
            <a href="/signin" className="text-gray-600 hover:text-indigo-600 text-sm ml-4 hidden sm:block">
              Sign In
            </a>
          </nav>

          {/* Search Bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-grow max-w-md mx-8">
            <input
              type="search"
              placeholder="Search products or stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <button type="submit" className="p-3 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition">
              <Search size={20} />
            </button>
          </form>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative hidden sm:flex items-center">
                 <input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 pl-10 border border-gray-300 rounded-full text-sm focus:ring-indigo-500 focus:border-indigo-500 w-40"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600">
                    <Search size={18} />
                </button>
            </form>


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-indigo-600 transition"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                {item.name}
              </a>
            ))}
             <a href="/signin" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition mt-2">
                Sign In
            </a>
            <button className="w-full mt-3 px-3 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                Find Deals
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;