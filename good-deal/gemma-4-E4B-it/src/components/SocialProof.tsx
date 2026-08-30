import React from 'react';
import { MOCK_STORE_PARTNERS, MOCK_TRUST_METRICS } from '../data/mockData';
import { ShoppingCart, Zap, Truck, Star } from 'lucide-react';
import { Metric } from '../types';

interface TrustMetricProps {
  metric: Metric;
}

const TrustMetric: React.FC<TrustMetricProps> = ({ metric }) => {
  const IconComponent = metric.icon;
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:scale-[1.02] text-center">
      <div className="flex justify-center mb-3">
        <IconComponent size={40} className="text-indigo-600" />
      </div>
      <p className="text-4xl font-extrabold text-gray-900 mb-1">{metric.value}</p>
      <p className="text-lg font-medium text-gray-500">{metric.label}</p>
    </div>
  );
};


const StoreLogos: React.FC = () => {
    return (
        <section id="stores" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Trusted by Top Retailers</h2>
                    <p className="mt-2 text-lg text-gray-500">
                        We aggregate deals from partners worldwide to ensure you get the best price possible.
                    </p>
                </div>
                {/* Generic Logo Display Area - Using text to simulate logos */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 opacity-70 grayscale">
                    {MOCK_STORE_PARTNERS.map((name, index) => (
                        <div key={index} className="text-3xl font-black text-gray-300 hover:opacity-100 transition duration-300 cursor-pointer">
                            {name.split('').map((char, i) => (
                                <span key={i} style={{ color: `hsl(${index * 30}, 50%, 30%)` }} className="transform hover:scale-110 transition-transform">
                                    {char}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TrustMetrics: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Why Shoppers Trust Good Deal
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Millions of users trust us to find them the best value, every single time.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {MOCK_TRUST_METRICS.map((metric) => (
            <TrustMetric key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { StoreLogos, TrustMetrics };