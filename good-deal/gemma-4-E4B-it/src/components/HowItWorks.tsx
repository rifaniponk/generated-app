import React from 'react';
import { Search, TrendingUp, Save } from 'lucide-react';

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: Search,
    title: 'Search Everything',
    description: 'Use our powerful search bar to look for specific products, brands, or general keywords across all supported stores.',
  },
  {
    number: 2,
    icon: TrendingUp,
    title: 'Compare Smartly',
    description: 'Instantly compare prices, check historical data, and find the best possible deal from multiple retailers.',
  },
  {
    number: 3,
    icon: Save,
    title: 'Save & Track',
    description: 'Bookmark your favorite deals, set price alerts, and ensure you never miss a discount again.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Simple. Powerful. Smart.</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            How Good Deal Works
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Finding massive savings is simple. Our three-step process gets you from browsing to buying smarter.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center p-8 border border-gray-100 rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-6 border-4 border-indigo-100">
                <step.icon size={36} className="transition-transform hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;