import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Deal } from '../types';
import { deals } from '../data';
import DealCard from './DealCard';

interface TrendingDealsProps {
  onDealClick: (deal: Deal) => void;
  onFavorite: (deal: Deal) => void;
}

export default function TrendingDeals({ onDealClick, onFavorite }: TrendingDealsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'electronics' | 'gaming'>('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const filteredDeals = activeTab === 'all'
    ? deals
    : deals.filter((deal) => deal.category.toLowerCase() === activeTab.toLowerCase());

  const paginatedDeals = filteredDeals.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const tabs = [
    { id: 'all', label: 'All Deals' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'gaming', label: 'Gaming' },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Trending Deals</h2>
            <p className="text-slate-600">The hottest deals right now, curated for you</p>
          </div>
          <div className="flex space-x-2 mt-4 sm:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as typeof activeTab);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedDeals.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              onClick={onDealClick}
              onFavorite={onFavorite}
            />
          ))}
        </div>

        {/* Pagination */}
        {filteredDeals.length > itemsPerPage && (
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-slate-700">
              Page {page} of {Math.ceil(filteredDeals.length / itemsPerPage)}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(Math.ceil(filteredDeals.length / itemsPerPage), p + 1))}
              disabled={page >= Math.ceil(filteredDeals.length / itemsPerPage)}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
