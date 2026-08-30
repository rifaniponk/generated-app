import React from 'react';
import { Deal } from '../types';
import { Tag, Star, Heart, Zap } from 'lucide-react';

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const {
    title,
    storeName,
    originalPrice,
    discountedPrice,
    discountPercentage,
    rating,
    isFeatured,
    isUrgent,
  } = deal;

  return (
    <div className={`bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl ${isFeatured ? 'ring-2 ring-indigo-200' : 'hover:scale-[1.01]'}`}>
      <div className="relative h-48 flex items-center justify-center bg-gray-50">
        {/* Image Placeholder */}
        <div className="text-6xl opacity-70">{deal.imagePlaceholder}</div>
        
        {/* Badges */}
        {isUrgent && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
            <Zap size={14} className="mr-1" /> Limited Time
          </span>
        )}
        {isFeatured && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            ⭐ Top Deal
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Title and Store */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-indigo-600 font-medium mb-3">{storeName}</p>
        
        {/* Price Display */}
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold text-red-600 mr-2">${discountedPrice.toFixed(2)}</span>
          <span className="text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          <span className="ml-3 text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{discountPercentage}% OFF</span>
        </div>

        {/* Rating and Actions */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex space-x-3">
            <button className="text-gray-400 hover:text-red-500 transition" aria-label="Add to favorites">
              <Heart size={20} />
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500">
              View Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;