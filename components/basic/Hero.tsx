const Hero = () => {
  return (
    <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/StockCake-Luxurious Coastal Mansion_1752260926.jpg")' }}
      >
      
      <div className="absolute z-10 inset-0 bg-black/40"></div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Explore the Unseen
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Embark on journeys to the world's most breathtaking destinations. Your next great adventure starts here.
        </p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
          Find Your Next Trip
        </button>
      </div>
    </section>
  );
};

export default Hero;