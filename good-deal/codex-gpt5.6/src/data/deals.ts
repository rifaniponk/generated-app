import {
  Armchair,
  BadgePercent,
  Gamepad2,
  Headphones,
  Home,
  Keyboard,
  Laptop,
  Plane,
  Shirt,
  Smartphone,
  Soup,
  Sparkles,
  Star,
  Tv,
  Watch,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface Category {
  name: string;
  deals: number;
  icon: LucideIcon;
  accent: string;
}

export interface Deal {
  id: number;
  title: string;
  store: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  rating: number;
  badge?: string;
  category: string;
  icon: LucideIcon;
  palette: string;
  spotlight?: boolean;
}

export interface Testimonial {
  name: string;
  meta: string;
  quote: string;
  initials: string;
  color: string;
}

export const categories: Category[] = [
  { name: 'Electronics', deals: 214, icon: Smartphone, accent: 'bg-skyglass text-sky-800' },
  { name: 'Fashion', deals: 179, icon: Shirt, accent: 'bg-rose-100 text-rose-800' },
  { name: 'Home', deals: 143, icon: Home, accent: 'bg-wheat text-amber-900' },
  { name: 'Gaming', deals: 96, icon: Gamepad2, accent: 'bg-violet-100 text-violet-800' },
  { name: 'Travel', deals: 62, icon: Plane, accent: 'bg-mint text-moss' },
  { name: 'Food', deals: 118, icon: Soup, accent: 'bg-orange-100 text-orange-800' },
];

export const trendingDeals: Deal[] = [
  {
    id: 1,
    title: 'Auralux Pro Noise-Canceling Headphones',
    store: 'SoundBay',
    originalPrice: 249,
    discountedPrice: 149,
    discount: 40,
    rating: 4.8,
    badge: 'Hot drop',
    category: 'Electronics',
    icon: Headphones,
    palette: 'from-[#DDFBE7] to-[#E6F7FF]',
    spotlight: true,
  },
  {
    id: 2,
    title: '27-inch SwiftFrame 165Hz Gaming Monitor',
    store: 'PixelNest',
    originalPrice: 389,
    discountedPrice: 269,
    discount: 31,
    rating: 4.7,
    category: 'Gaming',
    icon: Tv,
    palette: 'from-[#ECE7FF] to-[#F8E9FF]',
  },
  {
    id: 3,
    title: 'Northline Runner Knit Sneakers',
    store: 'ModeHaus',
    originalPrice: 140,
    discountedPrice: 84,
    discount: 40,
    rating: 4.6,
    badge: 'Staff pick',
    category: 'Fashion',
    icon: Zap,
    palette: 'from-[#FFE8DE] to-[#FFF3C7]',
  },
  {
    id: 4,
    title: 'NimbleType Low-Profile Mechanical Keyboard',
    store: 'KeyStreet',
    originalPrice: 159,
    discountedPrice: 99,
    discount: 38,
    rating: 4.9,
    category: 'Electronics',
    icon: Keyboard,
    palette: 'from-[#E7F4FF] to-[#F0F7E2]',
  },
  {
    id: 5,
    title: 'Vista Mini Smartphone 256GB',
    store: 'CellarTech',
    originalPrice: 799,
    discountedPrice: 629,
    discount: 21,
    rating: 4.5,
    category: 'Electronics',
    icon: Smartphone,
    palette: 'from-[#F8F0FF] to-[#DEF7FF]',
  },
  {
    id: 6,
    title: 'Coastal Escape Weekend Flight Bundle',
    store: 'Roamly',
    originalPrice: 420,
    discountedPrice: 289,
    discount: 31,
    rating: 4.4,
    badge: 'Ends soon',
    category: 'Travel',
    icon: Plane,
    palette: 'from-[#E4FAF0] to-[#F7E4B4]',
  },
];

export const dealOfTheDay: Deal = {
  id: 99,
  title: 'FlexWork UltraBook 14 with OLED Display',
  store: 'TechCart',
  originalPrice: 1299,
  discountedPrice: 849,
  discount: 35,
  rating: 4.9,
  badge: 'Deal of the Day',
  category: 'Electronics',
  icon: Laptop,
  palette: 'from-[#DDFBE7] via-[#E6F7FF] to-[#FFF0D0]',
  spotlight: true,
};

export const partnerStores = ['TechCart', 'ModeHaus', 'PixelNest', 'Roamly', 'HomeLoop', 'Snackly', 'SoundBay', 'KeyStreet'];

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Reynolds',
    meta: 'Austin, TX',
    quote: 'I was comparing laptop prices across five tabs. Good Deal found a better bundle and a coupon I would have missed.',
    initials: 'MR',
    color: 'bg-coral',
  },
  {
    name: 'Daniel Cho',
    meta: 'Remote designer',
    quote: 'The alerts are specific enough that I actually keep them on. I saved $180 on a monitor without watching sale pages all week.',
    initials: 'DC',
    color: 'bg-moss',
  },
  {
    name: 'Priya Shah',
    meta: 'Chicago, IL',
    quote: 'It feels less noisy than coupon sites. The verified labels and price history make it easier to know when to buy.',
    initials: 'PS',
    color: 'bg-sky-600',
  },
];

export const trustMetrics = [
  { label: 'active shoppers', value: '50K+', icon: Sparkles },
  { label: 'deals tracked daily', value: '12K+', icon: BadgePercent },
  { label: 'partner stores', value: '500+', icon: Armchair },
  { label: 'saved by users', value: '$2M+', icon: Star },
];
