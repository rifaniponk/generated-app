import { STORES } from "../data/mockData";

interface StoreLogoProps {
  store: (typeof STORES)[number];
}

export function StoreLogo({ store }: StoreLogoProps) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
      aria-label={`Partner store ${store.name}`}
    >
      <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${store.color} text-sm font-bold text-white`}>
        {store.initials}
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold text-slate-800">{store.name}</p>
        <p className="text-[11px] font-medium text-slate-400">{store.domain}</p>
      </div>
    </div>
  );
}
