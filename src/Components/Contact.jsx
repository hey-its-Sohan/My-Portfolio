import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();


  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        toast.success('Message sent successfully! I’ll get back to you soon.');
        form.current.reset();

      },
      (error) => {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div id="contact" className="max-w-screen-xl mx-auto scroll-mt-14 px-5 lg:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Let's Talk</h2>
      <p className="text-center text-gray-600 mb-10">
        Have a project in mind, a question, or just want to connect? I'm always open to new opportunities and collaborations.
      </p>



      {/* Contact Info */}
      <div className="grid sm:grid-cols-3 text-center mb-16 gap-6">
        <div
          onClick={() =>
            window.open(
              'https://mail.google.com/mail/?view=cm&fs=1&to=its.sohan.dev@gmail.com',
              '_blank'
            )
          }
          className="flex flex-col cursor-pointer hover:text-primary items-center text-gray-700">
          <Mail className="w-7 h-7 mb-2 text-primary" />
          <p className="font-medium">its.sohan.dev@gmail.com</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <Phone className="w-7 h-7 mb-2 text-primary" />
          <p className="font-medium">+880 1863-918621</p>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <MapPin className="w-7 h-7 mb-2 text-primary" />
          <p className="font-medium">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-gray-200"
      >
        <input type="hidden" name="date" value={new Date().toLocaleString()} />

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          <Send className="w-5 h-5" /> Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
