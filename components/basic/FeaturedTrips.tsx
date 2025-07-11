const TripCard = ({ image, title, price, duration }: { image: string, title: string, price: string, duration: string }) => (
  <div className="group">
    <div className="overflow-hidden rounded-lg mb-4">
      <img src={image} alt={title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-lg font-bold text-blue-600">{price}</p>
    </div>
    <p className="text-gray-500">{duration}</p>
  </div>
);

const FeaturedTrips = () => {
  const trips = [
    { image: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=2070', title: 'Parisian Dreams', price: '$1,900', duration: '7 Days' },
    { image: 'https://images.unsplash.com/photo-1533929736458-ca588912961e?q=80&w=2070', title: 'Ancient Rome', price: '$2,200', duration: '10 Days' },
    { image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070', title: 'Kyoto Cherry Blossoms', price: '$2,500', duration: '8 Days' },
    { image: 'https://images.unsplash.com/photo-1540202404-1b4293T8pI?q=80&w=1974', title: 'Swiss Alps Adventure', price: '$3,100', duration: '12 Days' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Trips</h2>
          <p className="text-gray-600 mt-2">Discover curated journeys to the most amazing places on Earth.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.map(trip => (
            <TripCard key={trip.title} {...trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;