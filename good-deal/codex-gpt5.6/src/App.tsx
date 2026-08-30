import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  ArrowRight,
  BadgePercent,
  Bell,
  ChevronDown,
  Clock3,
  Facebook,
  Heart,
  Instagram,
  Mail,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Twitter,
  X,
} from 'lucide-react';
import {
  categories,
  dealOfTheDay,
  partnerStores,
  testimonials,
  trendingDeals,
  trustMetrics,
  type Deal,
} from './data/deals';

const navItems = ['Deals', 'Categories', 'Stores', 'How It Works'];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function scrollToSection(label: string) {
  const id = label.toLowerCase().replaceAll(' ', '-');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled ? 'border-ink/10 bg-white/[0.92] shadow-sm backdrop-blur-xl' : 'border-transparent bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        <button
          className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
          onClick={() => scrollToSection('hero')}
          aria-label="Good Deal home"
        >
          <span className="grid size-10 place-items-center rounded-md bg-ink text-citrus shadow-sm">
            <ShoppingBag size={22} aria-hidden="true" />
          </span>
          <span className="text-xl font-black tracking-normal text-ink">Good Deal</span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-sm font-semibold text-ink/70 transition hover:text-ink focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-moss"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-md px-4 py-2 text-sm font-bold text-ink transition hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss">
            Sign In
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-md bg-coral px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ed5939] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            onClick={() => scrollToSection('Trending Deals')}
          >
            Find Deals <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-md border border-ink/10 text-ink lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-white px-4 py-4 shadow-sm lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                className="rounded-md px-3 py-3 text-left text-sm font-bold text-ink hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
                onClick={() => {
                  scrollToSection(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </button>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button className="rounded-md border border-ink/10 px-4 py-3 text-sm font-bold text-ink">Sign In</button>
              <button className="rounded-md bg-coral px-4 py-3 text-sm font-black text-white" onClick={() => scrollToSection('Trending Deals')}>
                Find Deals
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ProductVisual({ deal, size = 'md' }: { deal: Deal; size?: 'sm' | 'md' | 'lg' }) {
  const Icon = deal.icon;
  const sizes = {
    sm: 'h-36',
    md: 'h-48',
    lg: 'h-64 md:h-80',
  };

  return (
    <div className={`relative overflow-hidden rounded-md bg-gradient-to-br ${deal.palette} ${sizes[size]}`}>
      <div className="absolute left-4 top-4 rounded-md bg-white/80 px-3 py-1 text-xs font-black text-ink shadow-sm">{deal.discount}% off</div>
      <div className="absolute inset-x-8 bottom-5 top-12 rounded-[18px] border border-white/70 bg-white/45 shadow-float backdrop-blur-sm" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid size-24 place-items-center rounded-full bg-ink text-citrus shadow-float md:size-28">
          <Icon size={size === 'lg' ? 56 : 46} strokeWidth={1.8} aria-hidden="true" />
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-md bg-white px-3 py-2 text-xs font-black text-ink shadow-sm">
        <ShieldCheck size={14} className="text-moss" aria-hidden="true" /> Verified
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FBFCF6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 md:pb-20 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-md border border-moss/15 bg-white px-3 py-2 text-sm font-bold text-moss shadow-sm">
            <BadgeDot /> Live price drops from 500+ stores
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Never Pay Full Price Again
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68 sm:text-xl">
            Good Deal tracks discounts, coupons, and limited-time offers across trusted stores so you can compare prices and buy at the right moment.
          </p>

          <form className="mt-8 max-w-2xl rounded-md border border-ink/10 bg-white p-2 shadow-crisp" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="hero-search">
              Search products or stores
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
                <Search size={20} className="shrink-0 text-ink/45" aria-hidden="true" />
                <input
                  id="hero-search"
                  className="w-full bg-transparent text-base font-semibold text-ink outline-none placeholder:text-ink/38"
                  placeholder="Search headphones, sneakers, flights..."
                />
              </div>
              <button className="rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-moss active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
                Search Deals
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-md bg-coral px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ed5939] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              onClick={() => scrollToSection('Trending Deals')}
            >
              Find Today's Deals <ArrowRight size={17} aria-hidden="true" />
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-black text-ink transition hover:border-ink/30 hover:bg-ink/5 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              onClick={() => scrollToSection('How It Works')}
            >
              See How It Works <ChevronDown size={17} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-[610px]">
          <div className="absolute inset-0 rounded-[32px] bg-mint" />
          <div className="absolute left-3 right-3 top-4 rounded-[24px] border border-ink/10 bg-white p-4 shadow-crisp sm:left-8 sm:right-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-moss/70">Price watch</p>
                <p className="text-lg font-black text-ink">Auralux Pro</p>
              </div>
              <span className="rounded-md bg-citrus px-3 py-1 text-sm font-black text-ink">-40%</span>
            </div>
            <ProductVisual deal={trendingDeals[0]} size="md" />
            <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4">
              <div>
                <p className="text-sm font-semibold text-ink/55 line-through">$249</p>
                <p className="text-4xl font-black text-ink">$149</p>
              </div>
              <button className="rounded-md bg-ink px-4 py-3 text-sm font-black text-white transition hover:bg-moss active:scale-[0.98]">
                View Deal
              </button>
            </div>
          </div>

          <div className="absolute bottom-7 left-0 w-[58%] rounded-md border border-ink/10 bg-white p-4 shadow-float sm:left-2">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-md bg-skyglass text-sky-800">
                <Bell size={21} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-black text-ink">Price alert</p>
                <p className="text-xs font-semibold text-ink/55">Keyboard dropped below $100</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-24 right-0 w-[48%] rounded-md bg-ink p-4 text-white shadow-float sm:right-3">
            <p className="text-xs font-bold text-white/65">Average shopper saves</p>
            <p className="mt-1 text-3xl font-black">$312</p>
            <div className="mt-3 h-2 rounded-full bg-white/15">
              <div className="h-2 w-3/4 rounded-full bg-citrus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeDot() {
  return <span className="relative flex size-2.5 rounded-full bg-coral after:absolute after:inset-0 after:animate-ping after:rounded-full after:bg-coral/60" aria-hidden="true" />;
}

function Categories() {
  const [selected, setSelected] = useState('Electronics');

  return (
    <section id="categories" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">Browse faster</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Deal categories that stay fresh</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-ink/62">
            Pick a category to tune the deal feed. Good Deal ranks offers by savings, store reliability, and price history.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const active = selected === category.name;
            return (
              <button
                key={category.name}
                className={`group rounded-md border p-4 text-left transition hover:-translate-y-1 hover:shadow-crisp focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss ${
                  active ? 'border-moss bg-mint' : 'border-ink/10 bg-white'
                }`}
                onClick={() => setSelected(category.name)}
                aria-pressed={active}
              >
                <span className={`mb-5 grid size-11 place-items-center rounded-md ${category.accent}`}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="block text-base font-black text-ink">{category.name}</span>
                <span className="mt-1 block text-sm font-semibold text-ink/52">{category.deals} live deals</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DealCard({ deal, favorite, onToggle }: { deal: Deal; favorite: boolean; onToggle: (id: number) => void }) {
  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-md border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-crisp ${deal.spotlight ? 'border-coral/40 lg:col-span-2' : 'border-ink/10'}`}>
      {deal.badge && <div className="absolute left-4 top-4 z-10 rounded-md bg-ink px-3 py-1 text-xs font-black text-white">{deal.badge}</div>}
      <button
        className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-md bg-white/[0.92] text-ink shadow-sm transition hover:bg-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        onClick={() => onToggle(deal.id)}
        aria-label={`${favorite ? 'Remove' : 'Save'} ${deal.title}`}
        aria-pressed={favorite}
      >
        <Heart size={19} className={favorite ? 'fill-coral text-coral' : ''} aria-hidden="true" />
      </button>
      <ProductVisual deal={deal} size={deal.spotlight ? 'lg' : 'md'} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-black text-moss">{deal.store}</span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-ink/62">
            <Star size={15} className="fill-citrus text-ink" aria-hidden="true" /> {deal.rating}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-black leading-snug text-ink">{deal.title}</h3>
        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-ink/45 line-through">{formatCurrency(deal.originalPrice)}</p>
              <p className="text-3xl font-black text-ink">{formatCurrency(deal.discountedPrice)}</p>
            </div>
            <span className="rounded-md bg-citrus px-3 py-2 text-sm font-black text-ink">Save {deal.discount}%</span>
          </div>
          <button className="mt-5 w-full rounded-md bg-ink px-4 py-3 text-sm font-black text-white transition hover:bg-moss active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
            View Deal
          </button>
        </div>
      </div>
    </article>
  );
}

function TrendingDeals() {
  const [favorites, setFavorites] = useState<number[]>([1]);
  const toggleFavorite = (id: number) => setFavorites((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  return (
    <section id="deals" className="bg-[#FBFCF6] py-16 sm:py-20">
      <div id="trending-deals" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[0.82fr_1fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">Trending now</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Deals worth opening a new tab for</h2>
          </div>
          <p className="text-base leading-7 text-ink/62 md:max-w-xl md:justify-self-end">
            Every deal here is modeled after real shopping behavior: meaningful discounts, recognizable product types, and clear store context.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trendingDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} favorite={favorites.includes(deal.id)} onToggle={toggleFavorite} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DealOfTheDay() {
  const target = useMemo(() => Date.now() + 9 * 60 * 60 * 1000 + 24 * 60 * 1000 + 18 * 1000, []);
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-black text-citrus">
            <Clock3 size={17} aria-hidden="true" /> Deal of the Day
          </div>
          <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">{dealOfTheDay.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
            A verified TechCart flash offer with price history trending at its lowest point this month.
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-5">
            <div>
              <p className="text-base font-semibold text-white/45 line-through">{formatCurrency(dealOfTheDay.originalPrice)}</p>
              <p className="text-5xl font-black text-citrus">{formatCurrency(dealOfTheDay.discountedPrice)}</p>
            </div>
            <span className="mb-2 rounded-md bg-coral px-4 py-2 text-base font-black text-white">{dealOfTheDay.discount}% off</span>
          </div>
          <div className="mt-8 grid max-w-sm grid-cols-3 gap-3" aria-label="Deal countdown">
            {[
              ['Hours', hours],
              ['Minutes', minutes],
              ['Seconds', seconds],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.08] p-4 text-center">
                <p className="text-3xl font-black text-white">{String(value).padStart(2, '0')}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/50">{label}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 w-fit rounded-md bg-citrus px-6 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-[#d6ff65] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus">
            Claim Deal
          </button>
        </div>
        <div className="rounded-[28px] bg-white p-3 text-ink shadow-float">
          <ProductVisual deal={dealOfTheDay} size="lg" />
          <div className="grid gap-3 p-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <p className="text-sm font-black text-moss">{dealOfTheDay.store}</p>
              <p className="mt-1 font-bold text-ink/62">Free express shipping, verified coupon included.</p>
            </div>
            <div className="rounded-md bg-mint p-3 text-center">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-moss/70">Stock</p>
              <p className="text-xl font-black text-ink">Limited</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Search', text: 'Look up a product, category, or store and see live offers in one clean view.', icon: Search },
    { title: 'Compare', text: 'Check price history, store signals, ratings, and coupon stackability before buying.', icon: ShieldCheck },
    { title: 'Save', text: 'Claim the best offer or set alerts when the price drops below your target.', icon: BadgePercent },
  ];

  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">How it works</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">A calmer way to catch real discounts</h2>
            <p className="mt-5 text-base leading-7 text-ink/62">
              Good Deal removes the tab overload. The workflow is simple enough for a quick purchase and detailed enough for bigger decisions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-ink/10 md:block" />
            <div className="grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="relative grid gap-4 rounded-md border border-ink/10 bg-[#FBFCF6] p-5 md:grid-cols-[4rem_1fr] md:items-center">
                    <div className="grid size-14 place-items-center rounded-md bg-ink text-citrus shadow-sm">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-coral">Step {index + 1}</p>
                      <h3 className="mt-1 text-xl font-black text-ink">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-ink/62">{step.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreLogos() {
  return (
    <section id="stores" className="border-y border-ink/10 bg-[#FBFCF6] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-sm font-black uppercase tracking-[0.18em] text-ink/45">Tracking offers across partner marketplaces</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {partnerStores.map((store) => (
            <div key={store} className="flex min-h-16 items-center justify-center rounded-md border border-ink/10 bg-white px-3 text-center text-sm font-black text-ink/68">
              {store}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustProof() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:items-center">
        <div className="rounded-[28px] bg-moss p-8 text-white shadow-crisp">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-citrus">Trusted by careful shoppers</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">$2M+ kept in customers' wallets</h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            Good Deal favors verified discounts, clear expiration data, and price context over coupon clutter.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className={`rounded-md border border-ink/10 p-5 ${index === 1 ? 'bg-citrus' : 'bg-[#FBFCF6]'}`}>
                <Icon size={24} className="text-coral" aria-hidden="true" />
                <p className="mt-5 text-4xl font-black text-ink">{metric.value}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-ink/50">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#FBFCF6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">What shoppers say</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Built for people who compare before they buy</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
              <blockquote className="text-lg font-bold leading-8 text-ink">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className={`grid size-12 place-items-center rounded-full ${testimonial.color} text-sm font-black text-white`}>{testimonial.initials}</div>
                <div>
                  <p className="font-black text-ink">{testimonial.name}</p>
                  <p className="text-sm font-semibold text-ink/52">{testimonial.meta}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? 'success' : 'error');
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[28px] bg-ink p-6 text-white shadow-crisp md:grid-cols-[0.9fr_1fr] md:p-10 md:items-center">
          <div>
            <div className="grid size-12 place-items-center rounded-md bg-citrus text-ink">
              <Mail size={24} aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-normal sm:text-4xl">Get deal alerts that match your list</h2>
            <p className="mt-4 text-base leading-7 text-white/68">Weekly highlights, price drops, and expiring offers. No backend here, just client-side validation.</p>
          </div>
          <form className="rounded-md bg-white p-3" onSubmit={submit} noValidate>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                className="min-h-12 flex-1 rounded-md border border-ink/10 px-4 font-semibold text-ink outline-none placeholder:text-ink/38 focus:border-moss focus:ring-2 focus:ring-moss/20"
                placeholder="you@example.com"
                aria-invalid={status === 'error'}
                aria-describedby="newsletter-message"
              />
              <button className="rounded-md bg-coral px-5 py-3 text-sm font-black text-white transition hover:bg-[#ed5939] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
                Create Alert
              </button>
            </div>
            <p
              id="newsletter-message"
              className={`mt-3 text-sm font-bold ${status === 'error' ? 'text-red-700' : status === 'success' ? 'text-moss' : 'text-ink/50'}`}
              aria-live="polite"
            >
              {status === 'error' && 'Enter a valid email address to create a deal alert.'}
              {status === 'success' && 'Deal alert created. Watch your inbox for the best finds.'}
              {status === 'idle' && 'Choose alerts for categories, stores, and specific products after signup.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const groups = {
    Product: ['Deals', 'Categories', 'Stores', 'Price Alerts'],
    Company: ['About', 'Careers', 'Contact', 'Press'],
    Resources: ['Savings Guide', 'Browser Extension', 'Help Center', 'API'],
  };

  return (
    <footer className="bg-[#101611] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-md bg-citrus text-ink">
                <ShoppingBag size={22} aria-hidden="true" />
              </span>
              <span className="text-xl font-black">Good Deal</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/58">A fictional deal discovery platform for smarter online shopping.</p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#hero"
                  className="grid size-10 place-items-center rounded-md border border-white/12 text-white/72 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
                  aria-label={['Twitter', 'Instagram', 'Facebook'][index]}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(groups).map(([title, links]) => (
              <div key={title}>
                <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white/42">{title}</h2>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a className="text-sm font-semibold text-white/68 transition hover:text-white" href="#hero">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Good Deal. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#hero" className="hover:text-white">
              Privacy
            </a>
            <a href="#hero" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Categories />
        <TrendingDeals />
        <DealOfTheDay />
        <HowItWorks />
        <StoreLogos />
        <TrustProof />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
