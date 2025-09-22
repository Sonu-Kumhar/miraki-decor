import React, { useState } from "react";
import founderImg from "/founder.jpg";
import coFounderImg from "/co-founder.jpg";
import bgAll from "../assets/bg-all.png"; // Hero background
import { motion } from "framer-motion";

const About = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const founders = [
    {
      img: founderImg,
      name: "Sanidhya Kandalgaonkar",
      role: "Founder",
      desc: "A young and dynamic interior designer with over 4 years of hands-on experience, Sanidhya blends creativity with functionality. His fresh ideas and detailed design sensibility drive Miraki Décor’s mission of creating soulful and elegant spaces.",
    },
    {
      img: coFounderImg,
      name: "Vinesh Desai",
      role: "Co-Founder",
      desc: "With a strong background in the construction and architectural industry, Vinesh brings decades of wisdom, precision, and structural insight to Miraki Décor. His leadership and experience are the foundation on which the studio stands.",
    },
  ];

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  return (
    <div className="text-white">
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
          <h1 className="text-5xl md:text-6xl font-bold text-[#ffcc66] mt-12">
            About Miraki Decor
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white leading-relaxed">
            At Miraki Decor, we believe that a well-designed space can transform not just a home or office, but a life. 
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-">
        {/* Design Philosophy */}
        <motion.section
          className="pt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffcc66] text-center">
            Our Design Philosophy & Core Values
          </h2>
          <p className="mt-6 text-white text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Inspired by the elegance of the peacock, Miraki Decor blends grace, creativity, and bold expression in every space we design. Just like the peacock symbolizes beauty, renewal, and individuality, our interiors reflect timeless charm, thoughtful details, and a vibrant spirit—transforming homes and workspaces into soulful experiences.
          </p>
        </motion.section>

        {/* Founders Section */}
        <motion.section
          className="py-20 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffcc66] text-center">
            Meet Our Founder & Lead Designer
          </h2>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-start gap-12 ">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-sm text-center p-6 rounded-xl shadow-lg bg-black/40"
              >
                {/* Image with subtle hover effect */}
                <motion.img
                  src={founder.img}
                  alt={founder.name}
                  className="w-full h-64 object-cover rounded-xl border-white border-2 mb-6 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Name split into first & last */}
                <h3 className="mt-2 text-2xl font-semibold text-[#ffcc66]">
                  {founder.name.split(" ")[0]} <br />
                  {founder.name.split(" ").slice(1).join(" ")}
                </h3>

                <p className="text-xl font-medium text-[#d0b89c] mb-4">({founder.role})</p>

                <p className="text-xl text-white text-center mb-2 leading-relaxed min-h-[140px]">
                  {founder.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
