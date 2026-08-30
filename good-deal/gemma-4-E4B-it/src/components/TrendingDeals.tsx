import React from 'react';
import DealCard from './DealCard';
import { MOCK_TRENDING_DEALS } from '../data/mockData';

const TrendingDeals: React.FC = () => {
  return (
    <section id="trending-deals" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Trending Right Now</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            🔥 Hot Deals You Can't Miss
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            See what other savvy shoppers are saving on this week. Deals refresh daily!
          </p>
        </div>

        {/* Deal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {MOCK_TRENDING_DEALS.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="#categories" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition group">
                See thousands more deals
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingDeals;