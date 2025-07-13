// app/destinations/[slug]/page.tsx

import { destinationsData, getDestinationBySlug } from "@/components/data/destinationDetails";
import DestinationDetailsClient from "@/components/pages/DestinationDetailsClient";

// Define a type for the page's props
type DestinationDetailsPageProps = {
  params: {
    slug: string;
  };
  // You could also include searchParams if the page uses them
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

// Use the newly defined type for the component's props
const DestinationDetailsPage = ({ params }: DestinationDetailsPageProps) => { 
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        // ...
    }

    return (
        <DestinationDetailsClient destination={destination} />
    );
}

export default DestinationDetailsPage;