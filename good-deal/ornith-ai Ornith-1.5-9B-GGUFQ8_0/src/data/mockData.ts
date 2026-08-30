export type IconName =
  | "Cpu"
  | "Smartphone"
  | "Headphones"
  | "Gamepad"
  | "Watch"
  | "Camera"
  | "Shirt"
  | "Sneaker"
  | "Bag"
  | "Glasses"
  | "Microwave"
  | "Speaker"
  | "Dumbbell"
  | "Plane"
  | "Car"
  | "Coffee"
  | "Search"
  | "Zap"
  | "Gift";

export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  icon: IconName;
  accent: string;
  accentText: string;
  accentSoft: string;
}

export interface Deal {
  id: string;
  title: string;
  store: string;
  originalPrice: number;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  icon: IconName;
  gradient: string;
  tags: string[];
  shipping: string;
  featured?: boolean;
  badge?: string;
}

export interface Store {
  name: string;
  domain: string;
  initials: string;
  color: string;
  accent: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
  color: string;
}

export interface Metric {
  value: string;
  label: string;
  hint: string;
  icon: "users" | "deals" | "stores" | "saved";
}

export interface Step {
  order: number;
  title: string;
  description: string;
  icon: IconName;
  accent: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Phones, laptops & gadgets",
    count: 1842,
    icon: "Cpu",
    accent: "#3b5bff",
    accentText: "text-brand-700",
    accentSoft: "bg-brand-50",
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Style for every season",
    count: 3210,
    icon: "Shirt",
    accent: "#e11982",
    accentText: "text-rose-600",
    accentSoft: "bg-rose-50",
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Cozy everything",
    count: 1567,
    icon: "Microwave",
    accent: "#0ea5a0",
    accentText: "text-teal-600",
    accentSoft: "bg-teal-50",
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Level up your setup",
    count: 982,
    icon: "Gamepad",
    accent: "#7c3aed",
    accentText: "text-violet-600",
    accentSoft: "bg-violet-50",
  },
  {
    id: "travel",
    name: "Travel",
    description: "Fares, stays & more",
    count: 645,
    icon: "Plane",
    accent: "#f59e0b",
    accentText: "text-amber-600",
    accentSoft: "bg-amber-50",
  },
  {
    id: "food",
    name: "Food & Drink",
    description: "Tasty savings",
    count: 1103,
    icon: "Coffee",
    accent: "#ea580c",
    accentText: "text-orange-600",
    accentSoft: "bg-orange-50",
  },
];

export const DEALS: Deal[] = [
  {
    id: "d1",
    title: "Studio Pro Wireless Headphones",
    store: "SoundLab",
    originalPrice: 249.99,
    price: 149.0,
    discount: 40,
    rating: 4.8,
    reviews: 2341,
    icon: "Headphones",
    gradient: "from-indigo-500 to-sky-400",
    tags: ["Best Seller", "Free Shipping"],
    shipping: "2-day",
    featured: true,
    badge: "Top Deal",
  },
  {
    id: "d2",
    title: "27\" UltraSharp 4K Gaming Monitor",
    store: "PixelForge",
    originalPrice: 499.0,
    price: 329.0,
    discount: 34,
    rating: 4.6,
    reviews: 890,
    icon: "Cpu",
    gradient: "from-slate-700 to-slate-900",
    tags: ["Limited Time"],
    shipping: "3-day",
  },
  {
    id: "d3",
    title: "AeroFlex Running Sneakers",
    store: "Stride",
    originalPrice: 139.95,
    price: 74.95,
    discount: 46,
    rating: 4.7,
    reviews: 1567,
    icon: "Sneaker",
    gradient: "from-rose-400 to-pink-500",
    tags: ["Trending"],
    shipping: "Free",
  },
  {
    id: "d4",
    title: "Nova Mechanical Keyboard",
    store: "KeyWorks",
    originalPrice: 159.0,
    price: 99.0,
    discount: 38,
    rating: 4.9,
    reviews: 612,
    icon: "Gamepad",
    gradient: "from-violet-500 to-fuchsia-500",
    tags: ["Staff Pick"],
    shipping: "2-day",
  },
  {
    id: "d5",
    title: "CityView 7-Day Travel Pass",
    store: "Wanderly",
    originalPrice: 89.0,
    price: 47.0,
    discount: 47,
    rating: 4.5,
    reviews: 423,
    icon: "Plane",
    gradient: "from-sky-400 to-cyan-400",
    tags: ["Travel Deal"],
    shipping: "Instant",
  },
  {
    id: "d6",
    title: "Zenith Fitness Smartwatch",
    store: "VitalFit",
    originalPrice: 199.0,
    price: 119.0,
    discount: 40,
    rating: 4.4,
    reviews: 1088,
    icon: "Watch",
    gradient: "from-emerald-400 to-teal-500",
    tags: ["New Arrival"],
    shipping: "Free",
  },
  {
    id: "d7",
    title: "Artisan Pour-Over Coffee Set",
    store: "BrewHaus",
    originalPrice: 64.0,
    price: 38.0,
    discount: 41,
    rating: 4.8,
    reviews: 334,
    icon: "Coffee",
    gradient: "from-amber-500 to-orange-500",
    tags: ["Gift Idea"],
    shipping: "Free",
  },
  {
    id: "d8",
    title: "ProGrade DSLR Camera Kit",
    store: "Shutter",
    originalPrice: 1199.0,
    price: 899.0,
    discount: 25,
    rating: 4.7,
    reviews: 276,
    icon: "Camera",
    gradient: "from-slate-600 to-zinc-800",
    tags: ["Premium"],
    shipping: "2-day",
  },
];

export const STORES: Store[] = [
  { name: "SoundLab", domain: "soundlab.co", initials: "SL", color: "bg-indigo-500", accent: "text-indigo-600" },
  { name: "PixelForge", domain: "pixelforge.io", initials: "PF", color: "bg-slate-700", accent: "text-slate-700" },
  { name: "Stride", domain: "stride.app", initials: "ST", color: "bg-rose-500", accent: "text-rose-600" },
  { name: "KeyWorks", domain: "keyworks.dev", initials: "KW", color: "bg-violet-500", accent: "text-violet-600" },
  { name: "Wanderly", domain: "wanderly.com", initials: "WL", color: "bg-sky-500", accent: "text-sky-600" },
  { name: "VitalFit", domain: "vitalfit.com", initials: "VF", color: "bg-emerald-500", accent: "text-emerald-600" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amara Okafor",
    role: "Freelance photographer",
    location: "Lisbon, Portugal",
    rating: 5,
    initials: "AO",
    color: "bg-amber-500",
    quote: "I almost never leave a purchase without checking Good Deal first. Found a monitor I was about to overpay for — saved $170 on a Tuesday.",
  },
  {
    id: "t2",
    name: "Diego Ramírez",
    role: "Product manager",
    location: "Mexico City",
    rating: 5,
    initials: "DR",
    color: "bg-sky-600",
    quote: "The countdown on the Deal of the Day is genuinely useful. It created urgency I actually respect because the deals are real.",
  },
  {
    id: "t3",
    name: "Priya Nair",
    role: "Graduate student",
    location: "Bangalore, India",
    rating: 5,
    initials: "PN",
    color: "bg-fuchsia-600",
    quote: "Every month my budget looks healthier. The categories make it easy to find deals only when I'm shopping for them.",
  },
];

export const METRICS: Metric[] = [
  { value: "50K+", label: "Active shoppers", hint: "and counting", icon: "users" },
  { value: "12K+", label: "Deals tracked", hint: "updated daily", icon: "deals" },
  { value: "500+", label: "Partner stores", hint: "in one place", icon: "stores" },
  { value: "$2M+", label: "Saved by users", hint: "last year alone", icon: "saved" },
];

export const STEPS: Step[] = [
  {
    order: 1,
    title: "Search",
    description: "Type a product or store name. Good Deal scans hundreds of retailers in milliseconds.",
    icon: "Search",
    accent: "#3b5bff",
  },
  {
    order: 2,
    title: "Compare",
    description: "See the lowest price, discount, and shipping option side by side — with honest ratings.",
    icon: "Gift",
    accent: "#0ea5a0",
  },
  {
    order: 3,
    title: "Save",
    description: "Bookmark deals, get instant price-drop alerts, and check out where your money goes further.",
    icon: "Zap",
    accent: "#e11982",
  },
];
