import { notFound } from 'next/navigation';
import { getDestinations, getDestinationBySlug } from "@/components/data/destinations/destinationDetails";
import { allPackages } from '@/components/data/packagesIndia';
import DestinationDetailsClient from "@/components/pages/DestinationDetailsClient";

// A type for the page's props, which is a good practice for type safety.

// This function generates the static paths for all destinations at build time.
export function generateStaticParams() {
  const destinations = getDestinations();
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

// checkFields<Diff<PageProps, FirstArg<TEntry['default']>, 'default'>>()
const DestinationDetailsPage = async ({ params }: {params: Promise<{slug:string}>;
}) => { 
    const { slug } = await params;
    
    // Fetch the destination details on the server.
    const destination = getDestinationBySlug( slug );
    
    // If no destination is found for the given slug, render a 404 page.
    if (!destination) {
        notFound();
    }

    // Filter all packages to find tours that are in the current destination's location.
    const relatedTours = allPackages
      .filter(pkg => pkg.location.includes(destination.name))
      .map(pkg => ({ // Map the full package object to the simpler RelatedTour type
          slug: pkg.slug,
          title: pkg.title,
          duration: `${pkg.duration} Days`,
          destination: destination.name,
          price: pkg.price,
      }));

    // Pass the fetched data as props to the client component for rendering.
    return (
        <DestinationDetailsClient 
          destination={destination} 
          relatedTours={relatedTours} 
        />
    );
}

export default DestinationDetailsPage;
