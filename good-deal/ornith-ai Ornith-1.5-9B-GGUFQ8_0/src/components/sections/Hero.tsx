import { ArrowRight, ShieldCheck, Sparkles, Search } from "lucide-react";
import { Button } from "../ui/Button";
import { ProductVisual } from "../ProductVisual";

export function Hero() {
  return (
    <section id="top" className="section-pad">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              Aggregating 500+ stores in one search
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Never Pay{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">Full Price</span>
                <span className="absolute bottom-2 left-0 h-3 w-full skew-y-[-6deg] bg-brand-200/70" />
              </span>{" "}
              Again
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Good Deal hunts down the best prices, coupons, and limited-time offers
              across hundreds of online stores — so every purchase actually saves you
              money.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                Find Deals
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary">
                See How It Works
              </Button>
            </div>

            <form
              className="mt-8 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-soft focus-within:border-brand-400 focus-within:ring-4 focus-within:ring-brand-100"
              onSubmit={(e) => e.preventDefault()}
            >
              <Search className="ml-4 h-5 w-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search products or stores…"
                className="w-full min-w-0 bg-transparent px-2 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                aria-label="Search products or stores"
              />
              <Button variant="ghost" size="sm" type="submit" className="rounded-xl">
                Search
              </Button>
            </form>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-slate-100 pt-6">
              <div>
                <dt className="text-xs font-medium text-slate-400">Trusted by</dt>
                <dd className="mt-1 text-lg font-bold text-slate-900">50K+</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Deals tracked</dt>
                <dd className="mt-1 text-lg font-bold text-slate-900">12K+</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">User savings</dt>
                <dd className="mt-1 text-lg font-bold text-slate-900">$2M+</dd>
              </div>
            </dl>
          </div>

          <div className="relative animate-fade-in-up lg:pl-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft-lg">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="ml-3 text-xs font-medium text-slate-400">gooddeal.app</span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4">
                <div className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <ProductVisual icon="Headphones" gradient="from-indigo-500 to-sky-400" className="h-28 w-full" />
                  <div className="p-3">
                    <p className="text-xs text-slate-400">SoundLab</p>
                    <p className="font-bold text-slate-900">$149 <span className="text-slate-400 line-through text-xs">$249</span></p>
                  </div>
                </div>
                <div className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <ProductVisual icon="Sneaker" gradient="from-rose-400 to-pink-500" className="h-28 w-full" />
                  <div className="p-3">
                    <p className="text-xs text-slate-400">Stride</p>
                    <p className="font-bold text-slate-900">$74 <span className="text-slate-400 line-through text-xs">$139</span></p>
                  </div>
                </div>
                <div className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <ProductVisual icon="Gamepad" gradient="from-violet-500 to-fuchsia-500" className="h-28 w-full" />
                  <div className="p-3">
                    <p className="text-xs text-slate-400">KeyWorks</p>
                    <p className="font-bold text-slate-900">$99 <span className="text-slate-400 line-through text-xs">$159</span></p>
                  </div>
                </div>
                <div className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <ProductVisual icon="Watch" gradient="from-emerald-400 to-teal-500" className="h-28 w-full" />
                  <div className="p-3">
                    <p className="text-xs text-slate-400">VitalFit</p>
                    <p className="font-bold text-slate-900">$119 <span className="text-slate-400 line-through text-xs">$199</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-brand-600 px-4 py-3 text-white">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4" /> Price-verified across stores
                </span>
                <span className="text-xs font-semibold">Updated just now</span>
              </div>
            </div>

            <div className="absolute -right-3 -top-3 rounded-2xl bg-white p-3 shadow-neon animate-count-pulse">
              <p className="text-[11px] font-medium text-slate-400">Saved just now</p>
              <p className="text-lg font-extrabold text-emerald-600">−$170 💥</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
