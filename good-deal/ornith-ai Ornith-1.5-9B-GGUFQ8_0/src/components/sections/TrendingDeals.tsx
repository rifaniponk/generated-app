import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";
import { DealCard } from "../DealCard";
import { DEALS } from "../../data/mockData";

export function TrendingDeals() {
  const [favs, setFavs] = useState<Record<string, boolean>>({});

  return (
    <section id="deals" className="bg-slate-100/60">
      <div className="section-pad">
        <div className="container-narrow">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Trending now</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The deals people are grabbing this week
              </h2>
            </div>
            <Button variant="ghost" size="sm" className="shrink-0">
              View all deals <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DEALS.map((deal, i) => (
              <DealCard
                key={deal.id}
                deal={deal}
                isFav={!!favs[deal.id]}
                onToggleFav={(id) => setFavs((prev) => ({ ...prev, [id]: !prev[id] }))}
                variant={i % 3 === 0 ? "compact" : "default"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
