import { Deal, Category, Testimonial, Metric } from '../types';
import { Zap, Headphones, Shirt, Gamepad, Globe, Utensils, Monitor, Smartphone, Watch, Package, Truck, ShoppingCart, Star } from 'lucide-react';

export const MOCK_CATEGORIES: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: Monitor },
  { id: 'fashion', name: 'Fashion', icon: Shirt },
  { id: 'home', name: 'Home', icon: Package },
  { id: 'gaming', name: 'Gaming', icon: Gamepad },
  { id: 'travel', name: 'Travel', icon: Globe },
  { id: 'food', name: 'Food & Drink', icon: Utensils },
];

export const MOCK_TRENDING_DEALS: Deal[] = [
  {
    id: 1,
    title: 'Noise-Cancelling Wireless Headphones',
    storeName: 'AudioWorld',
    description: 'Immerse yourself in sound with industry-leading cancellation.',
    imagePlaceholder: '🎧',
    originalPrice: 199.99,
    discountedPrice: 129.99,
    discountPercentage: 35,
    rating: 4.8,
    isFeatured: true,
    isUrgent: true,
  },
  {
    id: 2,
    title: 'Ultra-Wide 34-inch Curved Monitor',
    storeName: 'TechDeals HQ',
    description: 'Perfect for gaming and productivity.',
    imagePlaceholder: '💻',
    originalPrice: 699.00,
    discountedPrice: 559.99,
    discountPercentage: 20,
    rating: 4.5,
    isFeatured: false,
    isUrgent: false,
  },
  {
    id: 3,
    title: 'Minimalist Leather Sneakers',
    storeName: 'StyleHub',
    description: 'Timeless design meets modern comfort.',
    imagePlaceholder: '👟',
    originalPrice: 140.00,
    discountedPrice: 89.99,
    discountPercentage: 36,
    rating: 4.9,
    isFeatured: false,
    isUrgent: false,
  },
  {
    id: 4,
    title: '4K Ultra HD Smart TV (55")',
    storeName: 'MediaGiant',
    description: 'Vibrant colors and stunning clarity.',
    imagePlaceholder: '📺',
    originalPrice: 899.00,
    discountedPrice: 719.00,
    discountPercentage: 20,
    rating: 4.3,
    isFeatured: true,
    isUrgent: true,
  },
  {
    id: 5,
    title: 'Ergonomic Mechanical Keyboard',
    storeName: 'InputPro',
    description: 'Type faster and more comfortably.',
    imagePlaceholder: '⌨️',
    originalPrice: 120.00,
    discountedPrice: 95.00,
    discountPercentage: 21,
    rating: 4.6,
    isFeatured: false,
    isUrgent: false,
  },
  {
    id: 6,
    title: 'Bali All-Inclusive Package',
    storeName: 'VoyageBook',
    description: 'Escape to paradise for less.',
    imagePlaceholder: '🌴',
    originalPrice: 2500.00,
    discountedPrice: 1999.00,
    discountPercentage: 20,
    rating: 4.7,
    isFeatured: true,
    isUrgent: true,
  },
];

export const MOCK_DEAL_OF_THE_DAY: Deal = {
  id: 100,
  title: 'Latest Model Smartphone Pro',
  storeName: 'GlobalTech',
  description: 'Experience next-generation speed and camera quality.',
  imagePlaceholder: '📱',
  originalPrice: 1199.00,
  discountedPrice: 899.00,
  discountPercentage: 25,
  rating: 4.8,
  isFeatured: true,
  isUrgent: true,
};


export const MOCK_TRUST_METRICS: Metric[] = [
  { value: '50K+', label: 'Active Shoppers', icon: ShoppingCart },
  { value: '12K+', label: 'Deals Tracked', icon: Zap },
  { value: '500+', label: 'Partner Stores', icon: Truck },
  { value: '$2M+', label: 'Saved by Users', icon: Star },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Good Deal is a game changer! I saved hundreds on my recent electronics purchase. It’s incredibly easy to use.',
    name: 'Sarah K.',
    role: 'Tech Enthusiast',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: 'Found the perfect travel deal to Italy. The countdown feature kept me motivated to book immediately!',
    name: 'Mark D.',
    role: 'Travel Blogger',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    quote: 'Finally, one place for all my shopping comparisons. The interface is clean and professional.',
    name: 'Liam P.',
    role: 'Casual Buyer',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
];

export const MOCK_STORE_PARTNERS: string[] = [
  'ElectroMega',
  'StyleVault',
  'TravelGlobe',
  'HomeHaven',
  'GamingNexus',
  'GlobalMart',
];

export const MOCK_NEWSLETTER_STATE: NewsletterFormState = {
  email: '',
  isSubmitting: false,
  isSuccess: false,
  error: null,
};