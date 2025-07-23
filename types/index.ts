/**
 * Represents a single item in the itinerary for a tour package.
 */
export interface ItineraryItem {
  day: number;
  title: string;
  details: string;
}

/**
 * Represents a tour package.
 */
export interface Package {
  id: number;
  slug: string;
  title: string;
  location: string;
  price: number | null;
  duration: number;
  rating: number;
  type: string;
  imageUrl: string;
  description: string;
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
  category: 'domestic' | 'international'; // Added category
}

/**
 * Represents a travel destination.
 */
export interface Destination {
    id: number;
    slug: string;
    name: string;
    tagline: string;
    imageUrl: string;
    description: string;
    highlights: string[];
    bestTimeToVisit: string;
    currency: string;
    language: string;
    category: 'domestic' | 'international'; // Added category
}

/**
 * Represents the structure for FAQ items.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Represents the structure for "Why Choose Us" items.
 */
export interface WhyChooseUsItem {
    id: number;
    title: string;
    description: string;
}
