// lib/data.ts
import { Package, Destination } from '@/types';
import packagesIndia  from '@/components/data/packagesIndia'; // Keeping original for simulation
import  destinationDetailsDometic  from '@/components/data/destinations/destinationDetailsDometic';
import  destinationDetailsInternational from '@/components/data/destinations/destinationDetailsInternational';
import { internationalPackages } from '@/components/data/packagesInternational'; // Assuming you have this file

// --- SIMULATED CMS DATA ---
// In a real application, this data would come from a Headless CMS like Sanity or Strapi.
// We are consolidating and simulating that here.

const allPackages: Package[] = [
    ...packagesIndia.map(p => ({ ...p, category: 'domestic' as const })),
    ...internationalPackages.map(p => ({ ...p, category: 'international' as const })),
];

const allDestinations: Destination[] = [
    ...destinationDetailsDometic.map(d => ({ ...d, category: 'domestic' as const })),
    ...destinationDetailsInternational.map(d => ({ ...d, category: 'international' as const })),
];


// --- DATA FETCHING FUNCTIONS ---
// These functions simulate fetching data from an API.
// You would replace the logic inside with actual API calls to your CMS.

/**
 * Fetches all tour packages.
 * @returns A promise that resolves to an array of all packages.
 */
export const getPackages = async (): Promise<Package[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return allPackages;
};

/**
 * Fetches a single tour package by its slug.
 * @param slug The slug of the package to fetch.
 * @returns A promise that resolves to the package or null if not found.
 */
export const getPackageBySlug = async (slug: string): Promise<Package | null> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  const pkg = allPackages.find((p) => p.slug === slug);
  return pkg || null;
};

/**
 * Fetches all destinations.
 * @returns A promise that resolves to an array of all destinations.
 */
export const getDestinations = async (): Promise<Destination[]> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return allDestinations;
};

/**
 * Fetches a single destination by its slug.
 * @param slug The slug of the destination to fetch.
 * @returns A promise that resolves to the destination or null if not found.
 */
export const getDestinationBySlug = async (slug: string): Promise<Destination | null> => {
  await new Promise(resolve => setTimeout(resolve, 100));
  const destination = allDestinations.find((d) => d.slug === slug);
  return destination || null;
};
