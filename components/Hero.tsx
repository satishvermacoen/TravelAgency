const Hero = () => {
    return (
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/StockCake-Luxurious Coastal Mansion_1752260926.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Life is an adventure</h1>
          <p className="text-lg md:text-xl mb-8">Travel far enough, you meet yourself</p>
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
            Book Your Trip
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;