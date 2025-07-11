// Import your data and fetching logic
import { allPackagesData, getPackageById } from '@/components/data/packages';
// Import the Client Component
import PackageDetailsClient from '@/components/details/PackageDetailsClient'; // Assuming you created this component

// --- Function to pre-render static pages at build time ---
export async function generateStaticParams() {
  return allPackagesData.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}

// --- Main Page Component (Server Component) ---
const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
    const packageId = parseInt(params.id, 10);
    const packageDetails = getPackageById(packageId);

    if (!packageDetails) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Package not found!</h1>
            </div>
        );
    }

    const relatedPackages = allPackagesData.filter(p => p.id !== packageId).slice(0, 3);

    // Render the Client Component and pass the data as props
    return <PackageDetailsClient packageDetails={packageDetails} relatedPackages={relatedPackages} />;
};

export default PackageDetailsPage;
