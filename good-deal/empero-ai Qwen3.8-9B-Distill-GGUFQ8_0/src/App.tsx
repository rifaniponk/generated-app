import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import TrendingDeals from './components/TrendingDeals';
import DealOfDay from './components/DealOfDay';
import HowItWorks from './components/HowItWorks';
import StoreLogos from './components/StoreLogos';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import type { Deal } from './types';


function App() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  const toggleFavorite = (deal: Deal) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(deal.id)) {
        newSet.delete(deal.id);
      } else {
        newSet.add(deal.id);
      }
      return newSet;
    });
  };

  const handleDealClick = (deal: Deal) => {
    setSelectedDeal(deal);
  };

  const handleNewsletterSubmit = (_email: string): boolean => {
    // Simulate API call
    return true;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onNavigate={(path) => (window.location.href = path)} />

      <main>
        <Hero />

        <CategorySection />

        <TrendingDeals
          onDealClick={handleDealClick}
          onFavorite={toggleFavorite}
        />

        <DealOfDay />

        <HowItWorks />

        <StoreLogos />

        <Stats />

        <Testimonials />

        <Newsletter onSubmit={handleNewsletterSubmit} />
      </main>

      <Footer />

      {/* Deal Details Modal */}
      {selectedDeal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={() => setSelectedDeal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedDeal(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                ✕
              </button>
              <img
                src={selectedDeal.imageUrl}
                alt={selectedDeal.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-emerald-600 font-semibold">{selectedDeal.store}</span>
                  <p className="text-slate-500 text-sm">{selectedDeal.category}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(selectedDeal)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <span className={`text-2xl ${favorites.has(selectedDeal.id) ? 'text-rose-500' : 'text-slate-400'}`}>
                    ♥
                  </span>
                </button>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">{selectedDeal.title}</h2>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-slate-900">
                    ${selectedDeal.discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-slate-400 line-through">
                    ${selectedDeal.originalPrice.toFixed(2)}
                  </span>
                </div>
                <span className="text-emerald-600 font-bold text-lg">
                  -{selectedDeal.discountPercent}%
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <span className="text-amber-400">★</span>
                  <span className="font-medium">{selectedDeal.rating}</span>
                  <span className="text-sm text-slate-500">
                    ({selectedDeal.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                  Go to Store →
                </button>
                <button
                  onClick={() => toggleFavorite(selectedDeal)}
                  className="px-6 py-3 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  {favorites.has(selectedDeal.id) ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
