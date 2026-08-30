import React from 'react';
import { Search, TrendingUp, Smartphone } from 'lucide-react';
import { Button } from './ui/Button'; // Assuming a generic Button component exists or will be created
import { MOCK_TRENDING_DEALS } from '../data/mockData';
import DealCard from './DealCard';

// Mock Button component for simplicity, replacing a full UI library implementation
const Button: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
    <button 
        onClick={onClick}
        className={`px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 active:scale-[0.99] ${className}`}
    >
        {children}
    </button>
);


interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="pt-20 pb-24 bg-gray-50 sm:pt-32 sm:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
          Never Pay Full Price Again.
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Good Deal aggregates the best discounts, offers, and limited-time deals from thousands of stores—all in one place.
        </p>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="max-w-4xl mx-auto flex flex-col sm:flex-row shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <input
            type="search"
            placeholder="Search for headphones, sneakers, or travel deals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg focus:ring-0 focus:outline-none"
          />
          <Button className="sm:w-auto px-8 py-4 flex items-center justify-center text-lg">
            <Search size={20} className="mr-2" /> Find Deals
          </Button>
        </form>

        {/* Secondary CTAs */}
        <div className="mt-8 flex justify-center space-x-4">
            <Button className="text-base py-3 px-6">Browse All Categories</Button>
            <a href="#trending-deals" className="text-indigo-600 font-medium text-base hover:text-indigo-800 transition flex items-center">
                <TrendingUp size={18} className="mr-1" /> See Trending Now
            </a>
        </div>

        {/* Visual Presentation (Mock Deal Showcase) */}
        <div className="mt-20 max-w-6xl mx-auto">
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-indigo-50/50 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 text-left mb-6 lg:mb-0">
                    <h2 className="text-4xl font-bold text-gray-900">The Perfect Upgrade Awaits</h2>
                    <p className="mt-3 text-lg text-gray-600">
                        From cutting-edge electronics to luxury travel, Good Deal finds the best price on everything you want. Stop wasting time comparing; start saving money.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-700">
                        <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> Guaranteed Lowest Price Tracker</li>
                        <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> Real-time Discount Monitoring</li>
                        <li className="flex items-center"><Check size={20} className="text-green-500 mr-2" /> Seamless Cross-Store Comparison</li>
                    </ul>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                    <div className="w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center shadow-inner border-4 border-indigo-300">
                        <Smartphone size={120} className="text-indigo-400 opacity-60" />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

// Helper component for checks (assuming Lucide is available)
const Check = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default HeroSection;