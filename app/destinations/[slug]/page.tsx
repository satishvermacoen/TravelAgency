import DestinationDetailsClient from "@/components/pages/DestinationDetailsClient";
import { destinationDetailsData } from "@/components/data/destinationDetails";
import { topDestinationsData } from "@/components/data/topdestination";

// This function tells Next.js which pages to pre-render at build time
export async function generateStaticParams() {
  return topDestinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

// Helper function to get all data for a destination
const getDestinationData = (slug: string) => {
    const basicInfo = topDestinationsData.find(dest => dest.slug === slug);
    const detailedInfo = destinationDetailsData[slug as keyof typeof destinationDetailsData];

    if (!basicInfo || !detailedInfo) {
        return null;
    }

    // Combine the data from both sources
    return {
        ...basicInfo,
        ...detailedInfo,
    };
};


// --- Main Page Component (Server Component) ---
const DestinationPage = ({ params }: { params: { slug: string } }) => {
    const destination = getDestinationData(params.slug);

    if (!destination) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Destination not found!</h1>
            </div>
        );
    }

    // Render the Client Component and pass the combined data as props
    return <DestinationDetailsClient destination={destination} />;
};

export default DestinationPage;
