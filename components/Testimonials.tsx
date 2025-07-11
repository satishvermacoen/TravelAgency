const Testimonials = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2">We are proud to have happy clients from all over the world.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"The trip was amazing! Everything was perfectly organized, and the guides were fantastic. I can't wait to book my next trip with you."</p>
              <div className="flex items-center">
                <img src="https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/1064/2022/07/client-1.jpg" alt="Client 1" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">John Doe</h4>
                  <p className="text-gray-500">New York, USA</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"A once in a lifetime experience! The attention to detail and personalized service made our vacation truly special. Highly recommended!"</p>
              <div className="flex items-center">
                <img src="https://websitedemos.net/travel-and-tourism-02/wp-content/uploads/sites/1064/2022/07/client-2.jpg" alt="Client 2" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                  <p className="text-gray-500">London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;