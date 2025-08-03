import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto scroll-mt-14 px-5 lg:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">Let's Talk</h2>
      <p className="text-center text-gray-600 mb-10">
        Have a project in mind, a question, or just want to connect? Feel free to reach out!
      </p>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-3 text-center mb-12 gap-6">
        <div className="flex flex-col items-center text-gray-700">
          <Mail className="w-6 h-6 mb-1 text-primary" />
          <p>its.sohan.dev@gmail.com</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <Phone className="w-6 h-6 mb-1 text-primary" />
          <p>+880 1XXX-XXXXXX</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <MapPin className="w-6 h-6 mb-1 text-primary" />
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form (non-functional by default) */}
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
