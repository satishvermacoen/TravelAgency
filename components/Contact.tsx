const Contact = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mt-2">Have a question or want to book a trip? Send us a message!</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-lg"/>
              <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-lg"/>
              <textarea placeholder="Your Message" rows={5} className="p-3 border border-gray-300 rounded-lg"></textarea>
              <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;