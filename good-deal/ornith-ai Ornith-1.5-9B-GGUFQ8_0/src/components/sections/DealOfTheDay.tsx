import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { CountdownTimer } from "../CountdownTimer";
import { Button } from "../ui/Button";
import { ProductVisual } from "../ProductVisual";
import { useCountdown } from "../../hooks/useCountdown";
import { DEALS } from "../../data/mockData";

export function DealOfTheDay() {
  const [fav, setFav] = useState(false);
  // Fixed end time at 18:00 UTC today + 1 day buffer so the countdown always shows live.
  const endAt = Date.UTC(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate(),
    18, 0, 0,
  ) + 86_400_000; // +1 day so it always shows a live countdown

  const countdown = useCountdown(endAt);
  // d1 is always featured in the mock data, so the fallback is safe.
  const deal = (DEALS.find((d) => d.featured) ?? DEALS[0])!;

  return (
    <section id="deal-of-the-day" className="section-pad">
      <div className="container-narrow">
        <div className="card relative overflow-hidden bg-slate-900 text-white">
          <div className="grid lg:grid-cols-2 lg:gap-0">
            {/* Promo panel */}
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14">
              <span className="self-start inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                Deal of the day
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {deal.title}
              </h2>

              <p className="mt-2 text-slate-300">
                From {deal.store} · price-checked and about to expire. Only a handful left in stock.
              </p>

              <div className="mt-6">
                <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-brand-200">Ends in</p>
                <CountdownTimer countdown={countdown} />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="w-full sm:w-auto">
                  Grab this deal
                </Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Set a reminder
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Was</p>
                  <p className="text-lg font-semibold text-slate-300 line-through">${deal.originalPrice.toFixed(2)}</p>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Now</p>
                  <p className="text-2xl font-extrabold text-white">${deal.price.toFixed(2)}</p>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">You save</p>
                  <p className="text-lg font-bold text-emerald-400">
                    −${Math.round(deal.originalPrice - deal.price)} ({deal.discount}%)
                  </p>
                </div>
              </div>
            </div>

            {/* Product panel */}
            <div className="relative flex min-h-full items-center justify-center bg-gradient-to-br from-brand-600 to-indigo-700 p-8 lg:p-12">
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
              <div className="relative transition-transform duration-500 hover:scale-105">
                <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur">
                  <ProductVisual icon={deal.icon} gradient={deal.gradient} className="h-56 w-full" />
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-brand-100">{deal.store}</p>
                      <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-100">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-white">{deal.rating.toFixed(1)}</span>
                        <span className="text-brand-100">({deal.reviews.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFav((v) => !v)}
                      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${fav ? "bg-rose-500 text-white" : "bg-white/15 text-white hover:bg-white/25"}`}
                    >
                      <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
