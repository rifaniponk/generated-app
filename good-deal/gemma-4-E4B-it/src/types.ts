export interface Deal {
  id: number;
  title: string;
  storeName: string;
  description: string;
  imagePlaceholder: string; // Placeholder for an image URL or icon
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  isFeatured: boolean;
  isUrgent: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ElementType; // Lucide Icon component
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Metric {
  value: string;
  label: string;
  icon: React.ElementType; // Lucide Icon component
}

export interface NewsletterFormState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}