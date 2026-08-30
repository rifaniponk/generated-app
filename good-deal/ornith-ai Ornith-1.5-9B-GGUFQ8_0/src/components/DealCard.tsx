import { Star, Heart, Truck } from "lucide-react";
import { Button } from "./ui/Button";
import type { Deal } from "../data/mockData";
import { ProductVisual } from "./ProductVisual";

interface DealCardProps {
  deal: Deal;
  isFav: boolean;
  onToggleFav: (id: string) => void;
  variant?: "default" | "compact";
}

function Rating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-500">
      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      <span className="font-semibold text-slate-700">{rating.toFixed(1)}</span>
      <span>({reviews.toLocaleString()})</span>
    </div>
  );
}

export function DealCard({ deal, isFav, onToggleFav, variant = "default" }: DealCardProps) {
  const savings = Math.round(deal.originalPrice - deal.price);
  return (
    <article className="card group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-soft-lg">
      <div className="relative">
        <ProductVisual icon={deal.icon} gradient={deal.gradient} className="h-48 w-full sm:h-52" />
        <button
          type="button"
          onClick={() => onToggleFav(deal.id)}
          aria-label={isFav ? "Remove deal from favorites" : "Add deal to favorites"}
          className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-all duration-200 ${
            isFav
              ? "bg-rose-500 text-white shadow-md"
              : "bg-white/85 text-slate-600 hover:bg-white hover:text-rose-500"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFav ? "fill-current" : ""}`} />
        </button>
        {deal.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {deal.badge}
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-4 sm:p-5 ${variant === "compact" ? "" : ""}`}>
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{deal.store}</p>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600">
            −{deal.discount}%
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-slate-800 group-hover:text-brand-700">
          {deal.title}
        </h3>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {deal.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500"
            >
              {t}
            </span>
          ))}
        </div>

        <Rating rating={deal.rating} reviews={deal.reviews} />

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="text-xs text-slate-400 line-through">${deal.originalPrice.toFixed(2)}</p>
            <p className="text-xl font-extrabold text-slate-900">${deal.price.toFixed(2)}</p>
            <p className="text-xs font-medium text-emerald-600">You save ${savings}</p>
          </div>
          <Button size="sm" onClick={() => window.open("#", "_self")}>
            <Truck className="h-4 w-4" />
            Buy
          </Button>
        </div>
      </div>
    </article>
  );
}
