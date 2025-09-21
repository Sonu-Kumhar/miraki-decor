import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen py-12 px-4 md:px-12 lg:px-24 font-sans text-white mt-30">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get in touch and let the transformation begin.
                </h2>
                <p className="text-gray-200 text-lg">
                    Send us a message for a Quotation. Fill out the form below and we’ll get back to you within 24 hours.
                </p>
            </div>

            {/* Two-column layout */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Left: Form */}
                <form className="flex-1 bg-[#eee7cd]/90 backdrop-blur-sm shadow-lg p-8 space-y-6 rounded-lg border border-yellow-200">
                    <div>
                        <label className="block text-sm font-semibold text-gray-800">Name *</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full mt-2 p-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800">Phone Number *</label>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            className="w-full mt-2 p-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800">Email *</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full mt-2 p-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800">Budget</label>
                        <select className="w-full mt-2 p-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-yellow-500 text-black">
                            <option value="" disabled selected>
                                Select Your Budget
                            </option>
                            <option>8 to 10 lakh</option>
                            <option>10 to 15 lakh</option>
                            <option>15 to 20 lakh</option>
                            <option>20+ lakh</option>
                        </select>
                    </div>


                    <div>
                        <label className="block text-sm font-semibold text-gray-800">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            rows="4"
                            className="w-full mt-2 p-3 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-yellow-500 placeholder-black"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded shadow-lg transition"
                    >
                        Send Message
                    </button>
                </form>


                {/* Right: Details + Map */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Free Consultation */}
                    <div className="bg-[#eee7cd]/90 backdrop-blur-sm shadow-lg p-6 rounded-lg border border-yellow-200">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">To Book a Free Consultation</h3>
                        <p className="text-gray-700 mb-2">
                            For urgent questions or immediate assistance, don’t hesitate to reach out directly.
                        </p>
                        <p className="font-semibold text-lg text-gray-800">Call Now: 9076309696</p>
                        <p className="font-semibold text-lg text-gray-800">Call Now: 9930919696</p>
                    </div>

                    {/* Location */}
                    <div className="bg-[#eee7cd]/90 backdrop-blur-sm shadow-lg p-6 rounded-lg border border-yellow-200">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Our Location</h3>
                        <p className="text-gray-700 mb-4">
                            Shop no. G 2 & 3, <br />
                            The Malange Ground, <br />
                            B2, Jaatak Naka, <br />
                            Virar West, Maharashtra – 401303
                        </p>

                        {/* Google Map Embed */}
                        <div className="w-full h-72 overflow-hidden rounded-md shadow-md">
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

            {/* Animated Gradient Background */}
            <style>
                {`
          body {
            font-family: 'Cinzel', serif;
            background: linear-gradient(180deg, #2C1B0F 0%, #5A2E17 35%, #A35B2A 70%, #E3B77A 100%);
            background-size: 300% 300%;
            animation: gradientMove 12s ease infinite;
            min-height: 100vh;
            margin: 0;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
            </style>
        </div>
    );
};

export default Contact;
