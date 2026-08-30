import React from 'react';
import { MOCK_CATEGORIES } from '../data/mockData';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = category.icon;

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transition duration-300 ease-in-out transform hover:shadow-xl hover:border-indigo-300 cursor-pointer group">
      <div className="p-4 bg-indigo-100 rounded-full transition duration-300 group-hover:bg-indigo-600 group-hover:text-white">
        <IconComponent size={32} className="text-indigo-600 transition duration-300 group-hover:text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 transition duration-300 group-hover:text-indigo-600">
        {category.name}
      </h3>
      <p className="text-sm text-gray-500 mt-1">Discover the best deals in {category.name}</p>
    </div>
  );
};


const DealCategories: React.FC = () => {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Explore By Interest</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Find Deals by Category
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Whether you need a new gadget, wardrobe refresh, or vacation, we have the deals you're looking for.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {MOCK_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealCategories;