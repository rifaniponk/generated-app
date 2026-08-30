export interface Deal {
  id: string;
  title: string;
  store: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: string;
  isHot: boolean;
  isFlash: boolean;
  endsAt: Date;
  isFavorite: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Store {
  id: string;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
