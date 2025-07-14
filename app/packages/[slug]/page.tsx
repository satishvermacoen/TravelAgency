import { getPackages, getPackageBySlug } from '@/components/data/packagesIndia';
import PackageDetailsClient from '@/components/pages/PackageDetailsClient';
import { notFound } from 'next/navigation';

// This function tells Next.js which pages to pre-render at build time.
export function generateStaticParams() {
  const packages = getPackages();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

// --- Main Page Component (Server Component) ---
const PackagePage = async ({ params }: { params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params ;

    const packageDetails = getPackageBySlug( slug );
    
    // If no package is found, render the 404 page.
    if (!packageDetails) {
        notFound();
    }

    // Filter out the current package to show other related packages.
    const relatedPackages = getPackages()
        .filter(p => p.slug !== slug  && p.type === packageDetails.type)

    // Render the Client Component and pass the data as props.
    return (
        <PackageDetailsClient 
            packageDetails={packageDetails} 
            relatedPackages={relatedPackages} 
        />
    );
};

export default PackagePage;

