import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgAll from "../assets/bg-all.png";

const Services = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  const services = [
    {
      title: "Residential Interior",
      key: "residential",
      desc: "We design homes that reflect your lifestyle, personality, and sense of comfort. Whether it’s a minimal city apartment or a spacious family home, we tailor each space to feel warm, functional, and distinctly yours.",
      img: "/ser1.jpg",
      action: "View Projects",
    },
    {
      title: "Commercial Spaces",
      key: "commercial",
      desc: "Every business has a story—and we help you tell it through design. Whether it’s a café, salon, retail store, or studio, we create customer-centric environments that are both visually striking and purpose-driven.",
      img: "/ser2.jpg",
      action: "View Projects",
    },
    {
      title: "Corporate Interiors",
      key: "corporate",
      desc: "We create workspaces that balance functionality, comfort, and brand identity. Our designs are tailored to encourage focus, collaboration, and a sense of belonging—whether it’s a sleek executive suite or an open-plan office.",
      img: "/ser3.jpg",
      action: "View Projects",
    },
    {
      title: "Modular Kitchen",
      key: "modular",
      desc: "We specialize in creating stylish, space-saving, and fully customizable modular kitchens tailored to your taste and lifestyle. Whether you’re remodeling or building from scratch, our expert designers work closely with you to bring your dream kitchen to life.",
      img: "/ser4.jpg",
      action: "View Projects",
    },
    {
      title: "Design & Consultancy",
      key: null,
      desc: "We provide end-to-end design and consultancy services for modular kitchens—combining aesthetics, ergonomics, and practicality to transform your kitchen into a high-performance, stylish space.",
      img: "/ser5.jpg",
      action: "Contact Now",
      link: "/contact",
    },
  ];

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] w-full flex items-center justify-center text-center overflow-hidden"
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
          <h1 className="text-5xl md:text-6xl mt-12 font-bold text-[#ffcc66]">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            Explore our wide range of interior design solutions tailored to
            your lifestyle, business, and home.
          </p>
          {/* <Link
            to="/contact"
            className="mt-6 inline-block px-6 py-3 bg-[#cc6d00] text-white font-semibold rounded-lg hover:bg-[#a85600] transition-colors shadow-lg"
          >
            Contact Us
          </Link> */}
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-6xl mx-auto px-6 pt-20 space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-16 md:gap-24 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <motion.div
              className="md:w-1/2 w-full relative overflow-hidden rounded-lg shadow-2xl"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                boxShadow: "15px 15px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-[450px] md:h-[500px] rounded-lg"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl text-[#ffcc66] font-semibold mb-4">
                {service.title}
              </h2>
              <p className="text-white mb-6 text-lg md:text-2xl leading-relaxed">
                {service.desc}
              </p>

              {service.key ? (
                <Link
                  to={service.key === "consultancy" ? "/contact" : `/projects/${service.key}`}
                  className="inline-block px-6 py-3 bg-[#cc6d00] text-white font-medium rounded-lg shadow-md hover:bg-[#a85600] transition duration-300"
                >
                  {service.action}
                </Link>
              ) : (
                <Link
                  to={service.link}
                  className="inline-block px-6 py-3 bg-[#cc6d00] text-white font-medium rounded-lg shadow-md hover:bg-[#a85600] transition duration-300"
                >
                  {service.action}
                </Link>
              )}
            </motion.div>
          </motion.div>
        ))}

        {/* SEO Footer */}
        <div className="mt-20 text-center text-sm text-white">
          best interior design company virar | Mumbai | Miraki Decor
        </div>
      </div>
    </div>
  );
};

export default Services;
