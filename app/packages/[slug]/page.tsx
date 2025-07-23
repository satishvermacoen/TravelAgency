// app/packages/[slug]/page.tsx
import { getPackageBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PackageDetailsClient from '@/components/pages/PackageDetailsClient';

type Props = {
  params: {
    slug: string;
  };
};

// This function generates the page metadata (title, description)
export async function generateMetadata({ params }: Props) {
    const pkg = await getPackageBySlug(params.slug);
    if (!pkg) {
        return {
            title: 'Package Not Found',
        };
    }
    return {
        title: `${pkg.title} | Travel Agency`,
        description: pkg.description,
    };
}

export default async function PackageDetailsPage({ params }: Props) {
  const { slug } = params;
  const pkg = await getPackageBySlug(slug);

  // If the package is not found, render the 404 page
  if (!pkg) {
    notFound();
  }

  return (
    <div>
        <div className="relative h-96 w-full">
            <Image
                src={pkg.imageUrl}
                alt={pkg.title}
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white text-center">{pkg.title}</h1>
            </div>
        </div>
        {/* Pass the fetched data to the client component */}
        <PackageDetailsClient packageData={pkg} />
    </div>
  );
}
