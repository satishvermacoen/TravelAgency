import { destinationsData, getDestinationBySlug } from "@/components/data/destinationDetails";
import DestinationDetailsClient from "@/components/pages/DestinationDetailsClient";

export async function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

// --- Main Page Component (Server Component) ---
// The fix is to define the props type directly (inline) here.
// This makes the expected props explicit and resolves the TypeScript error.
const DestinationDetailsPage = ({ params }: { params: { slug: string } }) => { 
    const destination = getDestinationBySlug(params.slug);

    if (!destination) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Destination not found!</h1>
            </div>
        );
    }

    // This component now correctly receives the destination data.
    return (
        <DestinationDetailsClient destination={destination} />
    );
}

export default DestinationDetailsPage;