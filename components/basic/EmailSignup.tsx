// import { useState } from "react";

const EmailSignup = () => {
  // const [emailadd, setEmailadd] = useState("")

  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Join Our Travel Community</h2>
        <p className="max-w-xl mx-auto mb-8">
          Get the latest travel deals, tips, and inspiration sent straight to your inbox.
        </p>
        <form className="max-w-md mx-auto flex">
          <input 
            type="email"
            placeholder="Enter your email address"
            className="w-full text-gray-800 rounded-l-full px-6 py-3 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white font-bold px-8 py-3 rounded-r-full hover:bg-gray-900 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;