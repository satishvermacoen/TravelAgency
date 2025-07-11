const Services = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">What We Offer</h2>
            <p className="text-gray-600 mt-2">We offer a variety of services to make your trip unforgettable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2-6H3m18 6h-2m2-6h-2M5 15H3m2 6H3m18-6h-2m2 6h-2m-7-4l-3-3-3 3m6 0v6m-3-3h6"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Itineraries</h3>
              <p className="text-gray-600">We create custom travel plans based on your interests and budget.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 0V4m0 16v-4m-8-8H4m16 0h-4"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guides</h3>
              <p className="text-gray-600">Our knowledgeable guides will show you the best of every destination.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2m10 0H7"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">We are always available to help you with any issues or questions.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;