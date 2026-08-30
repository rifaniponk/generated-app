import { Heart, Star, Clock, ShoppingCart } from 'lucide-react';
import type { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
  onClick: (deal: Deal) => void;
  onFavorite: (deal: Deal) => void;
}

export default function DealCard({ deal, onClick, onFavorite }: DealCardProps) {
  const isFlash = deal.isFlash;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(deal)}
    >
      {/* Flash sale badge */}
      {isFlash && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 animate-pulse">
          Flash Deal
        </div>
      )}

      {/* Hot deal badge */}
      {deal.isHot && (
        <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          🔥 Hot Deal
        </div>
      )}

      {/* Favorite button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onFavorite(deal);
        }}
        className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm border border-slate-100 hover:bg-rose-50 transition-colors z-10"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            deal.isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-rose-500'
          }`}
        />
      </button>

      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img
          src={deal.imageUrl}
          alt={deal.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Store badge */}
        <div className="flex items-center space-x-1 mb-2">
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            {deal.store}
          </span>
          <span className="text-xs text-slate-400">• {deal.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {deal.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-medium text-slate-900">{deal.rating}</span>
          <span className="text-xs text-slate-500">({deal.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price section */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-500 line-through mb-0.5">
              ${deal.originalPrice.toFixed(2)}
            </p>
            <p className="text-xl font-bold text-slate-900">
              ${deal.discountedPrice.toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-emerald-600">
              -{deal.discountPercent}%
            </p>
            <p className="text-xs text-slate-500">off</p>
          </div>
        </div>

        {/* Footer with time remaining if flash */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
          {isFlash ? (
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-medium text-rose-600">Ends soon</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-500">Deal active</span>
            </div>
          )}
          <button className="text-sm font-medium text-slate-600 group-hover:text-emerald-600 transition-colors flex items-center space-x-1">
            <span>View Deal</span>
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
