import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#faf3dd] py-12 px-4 md:px-12 lg:px-24 mt-30">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get in touch and let the transformation begin.
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Send us a message for a Quotation. Fill out the form below and we’ll
          get back to you within 24 hours.
        </p>

        {/* Form */}
        <form className="bg-[#eee7cd] shadow-md p-8 space-y-6 border-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full mt-2 p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="w-full mt-2 p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full mt-2 p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Budget
            </label>
            <select className="w-full mt-2 p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500">
              <option>8 to 10 lakh</option>
              <option>10 to 15 lakh</option>
              <option>15 to 20 lakh</option>
              <option>20+ lakh</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full mt-2 p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition"
          >
            Send Message
          </button>
        </form>

        {/* Free Consultation */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-2">To Book a Free Consultation</h3>
          <p className="text-gray-600 mb-4">
            For urgent questions or immediate assistance, don’t hesitate to
            reach out directly.
          </p>
          <p className="font-semibold text-lg">Call Now: 9076309696</p>
          <p className="font-semibold text-lg">Call Now: 9930919696</p>
        </div>

        {/* Location */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold mb-2">Our Location</h3>
          <p className="text-gray-600 mb-6">
            Shop no. G 2 & 3, <br />
            The Malange Ground, <br />
            B2, Jaatak Naka, <br />
            Virar West, Maharashtra – 401303
          </p>

          {/* Google Map Embed */}
          <div className="w-full h-72 overflow-hidden shadow-md">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.818041157173!2d72.81191831537492!3d19.457827886874464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a96a0412d4d1%3A0x93d49e0f44f1f7c1!2sVirar%20West%2C%20Maharashtra%20401303!5e0!3m2!1sen!2sin!4v1695113851704!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
