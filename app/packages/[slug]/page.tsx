import { getPackages, getPackageBySlug } from '@/components/data/packagesIndia';
import PackageDetailsClient from '@/components/pages/PackageDetailsClient'; // Assuming this client component exists

// This function tells Next.js which pages to pre-render at build time
export async function generateStaticParams() {
  const packages = getPackages();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

// --- Main Page Component (Server Component) ---
const PackagePage = ({ params }: { params: { slug: string } }) => {
    const packageDetails = getPackageBySlug(params.slug);
    const allPackages = getPackages();

    if (!packageDetails) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Package not found!</h1>
            </div>
        );
    }

    // Filter out the current package to show other related packages
    const relatedPackages = allPackages.filter(p => p.slug !== params.slug).slice(0, 3);

    // Render the Client Component and pass the data as props
    return <PackageDetailsClient packageDetails={packageDetails} relatedPackages={relatedPackages} />;
};

export default PackagePage;
