import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const servicesContent = [
    {
      title: "Interior Designing",
      description:
        "Transform your space with modern interior design solutions tailored to your lifestyle.",
      img: "/img1.jpg",
    },
    {
      title: "Modular Kitchens",
      description:
        "Experience functionality and elegance with our modular kitchen designs.",
      img: "/img2.jpg",
    },
    {
      title: "Office Spaces",
      description:
        "We design inspiring office spaces that boost creativity and productivity.",
      img: "/img3.jpg",
    },
    {
      title: "Living Rooms",
      description:
        "Create warm, inviting living rooms that reflect your personality and style.",
      img: "/img4.jpg",
    },
    {
      title: "Bedrooms",
      description:
        "Turn your bedroom into a peaceful retreat with our custom interior solutions.",
      img: "/img5.jpg",
    },
    {
      title: "Decor Accessories",
      description:
        "Stylish home decor accessories that add charm and character to your interiors.",
      img: "/img6.jpg",
    },
    {
      title: "Custom Furniture",
      description:
        "Handcrafted furniture pieces that perfectly fit your space and aesthetics.",
      img: "/img7.jpg",
    },
    {
      title: "Renovation Projects",
      description:
        "Bring new life to your old spaces with our complete renovation services.",
      img: "/img8.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32 px-6">
      <h1 className="mb-16 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-lg">
        Our Premium Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesContent.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-2xl font-bold text-[#b68a59] mb-2">
                {service.title}
              </h2>
              <p className="text-base text-white">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
