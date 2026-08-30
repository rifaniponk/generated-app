import {
  Camera,
  Coffee,
  Gamepad,
  Microwave,
  Plane,
  Shirt,
  Cpu,
} from "lucide-react";
import { CATEGORIES, type Category } from "../../data/mockData";

interface CategoryCardProps {
  category: Category;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Gamepad,
  Smartphone: Camera,
  Headphones: Camera,
  Watch: Camera,
  Camera,
  Shirt,
  Sneaker: Shirt,
  Bag: Shirt,
  Glasses: Shirt,
  Microwave,
  Speaker: Microwave,
  Dumbbell: Microwave,
  Plane,
  Car: Plane,
  Coffee,
};

function CategoryCard({ category, index }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? Cpu;
  return (
    <a
      href="#deals"
      style={{ animationDelay: `${index * 60}ms` }}
      className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-soft-lg"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover/card:scale-110"
        style={{ backgroundColor: `${category.accent}1f`, color: category.accent }}
      >
        <Icon className="h-7 w-7" strokeWidth={1.8} />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{category.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{category.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400">
          {category.count.toLocaleString()} deals
        </span>
        <span
          className="flex items-center gap-1 text-sm font-semibold transition-colors"
          style={{ color: category.accent }}
        >
          Browse
          <span className="transition-transform duration-300 group-hover/card:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}

export function Categories() {
  return (
    <section id="categories" className="section-pad">
      <div className="container-narrow">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Shop by category</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Every deal, sorted by what you actually want
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
