import React, { useState } from "react";
import bgAll from "../assets/bg-all.png"; // Hero background

const Contact = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  return (
    <div className="text-white overflow-x-hidden"> {/* ✅ Prevent horizontal scroll */}
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] w-full flex items-start justify-center text-center overflow-hidden pt-32"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `url(${bgAll})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-6 drop-shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-[#ffcc66] mt-10">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white leading-relaxed">
            Send us a message for a quotation. Fill out the form below and we’ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <div className="min-h-screen py-12 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 mt-20">
          {/* Left: Form */}
          <form className="flex-1 bg-black/40 backdrop-blur-sm border border-white/20 shadow-lg p-8 space-y-6 ">
            <div>
              <label className="block text-sm font-semibold text-white">Name *</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full mt-2 p-3 border border-gray-600  shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-gray-300 bg-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white">Phone Number *</label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="w-full mt-2 p-3 border border-gray-600  shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-gray-300 bg-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white">Email *</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full mt-2 p-3 border border-gray-600  shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-gray-300 bg-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white">Budget</label>
              <select
                className="w-full mt-2 p-3 border border-gray-600  shadow-sm focus:ring-2 focus:ring-yellow-500 text-white bg-black/5"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your Budget
                </option>
                <option className="text-black bg-white">8 to 10 lakh</option>
                <option className="text-black bg-white">10 to 15 lakh</option>
                <option className="text-black bg-white">15 to 20 lakh</option>
                <option className="text-black bg-white">20+ lakh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full mt-2 p-3 border border-gray-600  shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-gray-300 bg-transparent text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ffcc66] hover:bg-yellow-500 text-black font-semibold py-3  shadow-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Right: Details + Map */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Free Consultation */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 shadow-lg p-6 ">
              <h3 className="text-2xl font-bold mb-2 text-white">To Book a Free Consultation</h3>
              <p className="text-gray-300 mb-2">
                For urgent questions or immediate assistance, don’t hesitate to reach out directly.
              </p>
              <p className="font-semibold text-lg text-white">Call Now: 9076309696</p>
              <p className="font-semibold text-lg text-white">Call Now: 9930919696</p>
            </div>

            {/* Location */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 shadow-lg p-6 ">
              <h3 className="text-2xl font-bold mb-2 text-white">Our Location</h3>
              <p className="text-gray-300 mb-4">
                Shop no. G 2 & 3, <br />
                The Malange Ground, <br />
                B2, Jaatak Naka, <br />
                Virar West, Maharashtra – 401303
              </p>

              {/* Google Map Embed */}
              <div className="w-full h-72 overflow-hidden  shadow-md">
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
      </div>
    </div>
  );
};

export default Contact;
