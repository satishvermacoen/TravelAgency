const Destinations = () => {
    const destinations = [
      {
        name: 'Paris, France',
        image: 'https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/1064/2022/07/destination-1.jpg',
      },
      {
        name: 'Santorini, Greece',
        image: 'https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/1064/2022/07/destination-2.jpg',
      },
      {
        name: 'Rome, Italy',
        image: 'https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/1064/2022/07/destination-3.jpg',
      },
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Popular Destinations</h2>
            <p className="text-gray-600 mt-2">Explore the world with us. Here are some of our most popular destinations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.name} className="relative rounded-lg overflow-hidden shadow-lg">
                <img src={destination.image} alt={destination.name} className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Destinations;