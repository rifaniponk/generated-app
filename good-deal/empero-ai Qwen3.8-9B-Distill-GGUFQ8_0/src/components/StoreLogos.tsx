import { stores } from '../data';

export default function StoreLogos() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-6">
          Trusted by millions across these stores
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {stores.map((store) => (
            <div
              key={store.id}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-all duration-300">
                {store.logo}
              </div>
              <span className="mt-2 text-xs font-medium text-slate-600 group-hover:text-emerald-600 transition-colors">
                {store.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
