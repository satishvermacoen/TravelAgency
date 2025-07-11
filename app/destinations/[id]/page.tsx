// Import your data and fetching logic
import { destinationsData, getDestinationBySlug } from '@/components/data/destinations';
// Import the Client Component
import DestinationDetailsClient from '@/components/details/DestinationDetailsClient';

// --- Function to pre-render static pages at build time ---
export async function generateStaticParams() {
  return destinationsData.map((dest: { slug: any; }) => ({
    slug: dest.slug,
  }));
}

// --- Main Page Component (Server Component) ---
const DestinationDetailsPage = ({ params }: { params: { slug: string } }) => {
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Destination not found!</h1>
            </div>
        );
    }

    // Render the Client Component and pass the data as props
    return <DestinationDetailsClient destination={destination} />;
};

export default DestinationDetailsPage;