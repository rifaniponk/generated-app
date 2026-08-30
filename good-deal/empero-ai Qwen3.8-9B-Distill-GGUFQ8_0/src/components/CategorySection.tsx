import {
  Cpu,
  Shirt,
  Home,
  Gamepad2,
  Plane,
  Utensils,
} from 'lucide-react';

const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'cpu', color: 'bg-blue-500' },
  { id: 'fashion', name: 'Fashion', icon: 'shirt', color: 'bg-pink-500' },
  { id: 'home', name: 'Home', icon: 'home', color: 'bg-emerald-500' },
  { id: 'gaming', name: 'Gaming', icon: 'gamepad-2', color: 'bg-violet-500' },
  { id: 'travel', name: 'Travel', icon: 'plane', color: 'bg-amber-500' },
  { id: 'food', name: 'Food & Drink', icon: 'utensils', color: 'bg-orange-500' },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Browse by Category
          </h2>
          <p className="text-slate-600">
            Find deals in the categories you care about most
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#/${category.id}`}
              className="group relative flex flex-col items-center p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all duration-200 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                {category.icon === 'cpu' && <Cpu className="w-6 h-6 text-white" />}
                {category.icon === 'shirt' && <Shirt className="w-6 h-6 text-white" />}
                {category.icon === 'home' && <Home className="w-6 h-6 text-white" />}
                {category.icon === 'gamepad-2' && <Gamepad2 className="w-6 h-6 text-white" />}
                {category.icon === 'plane' && <Plane className="w-6 h-6 text-white" />}
                {category.icon === 'utensils' && <Utensils className="w-6 h-6 text-white" />}
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">
                {category.name}
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
