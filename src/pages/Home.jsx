import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "../assets/bg-home.png";

const Home = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState({}); // track which video has enabled sound
  const videoRefs = useRef({}); // store video element references

  const videos = [
    {
      src: "/video1.mp4",
      title: "Luxury Residential Spaces",
      desc: "Our residential projects combine comfort, functionality, and aesthetics to create homes that truly reflect your lifestyle.",
    },
    {
      src: "/video2.mp4",
      title: "Modern Commercial Designs",
      desc: "We design workspaces that enhance productivity and creativity, offering unique solutions for businesses of all sizes.",
    },
    {
      src: "/video3.mp4",
      title: "Turnkey Interior Solutions",
      desc: "From planning to execution, we deliver complete interior solutions tailored to your budget and vision.",
    },
  ];

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  const handleEnableSound = (i) => {
    const videoEl = videoRefs.current[i];
    if (videoEl) {
      videoEl.muted = false;
      videoEl.play();
      setSoundEnabled((prev) => ({ ...prev, [i]: true }));
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 px-6 text-white drop-shadow-lg">
          <h2 className="text-4xl md:text-6xl font-bold text-[#b68a59]">
            Style And Comfort For Your Home.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            As one of the leading Interior Designers in Virar, we specialize in
            creating custom interiors that are tailored to your needs and preferences.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block px-6 py-3 bg-[#b68a59] text-black font-semibold rounded-lg hover:bg-white hover:text-black transition-colors shadow-lg"
          >
            Let’s Connect
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-[#faf3dd] text-black px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#b68a59]">
            Welcome to MIRAKI DECOR
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            We are one of the leading Interior Designers in Virar dedicated to
            crafting beautiful, functional, and personalized spaces. Whether
            you’re looking to renovate your home or design a new corporate
            office, our team of experts provides complete turnkey interior
            solutions tailored to your vision and budget.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      {/* <section className="bg-white text-black px-6 pb-16">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#bb9364]">
            Our End-to-End Interior Design Services
          </h2>
          <p className="mt-4">
            Discover our complete house interior design services, tailored to
            make your home beautiful, comfortable, and uniquely yours. From
            design and execution to decor solutions, we’ve got you covered.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-block px-6 py-3 bg-[#b68a59] text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </motion.div>
      </section> */}

      {/* Video Section */}
      <section className="bg-[#faf3dd] text-black px-6 pb-20 pt-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Our Latest Residential & Commercial Projects
          </h2>

          {videos.map((item, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Video */}
              <div
                className={`relative overflow-hidden rounded-xl shadow-lg ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-[80vh] object-cover rounded-xl transition-all duration-500"
                  ref={(el) => (videoRefs.current[i] = el)}
                  onMouseEnter={(e) => {
                    if (soundEnabled[i]) e.currentTarget.muted = false;
                  }}
                  onMouseLeave={(e) => {
                    if (soundEnabled[i]) e.currentTarget.muted = true;
                  }}
                />
                {!soundEnabled[i] && (
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer text-white font-bold text-lg"
                    onClick={() => handleEnableSound(i)}
                  >
                    Click to Enable Sound
                  </div>
                )}
              </div>

              {/* Text */}
              <motion.div
                className={`text-center md:text-left ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#b68a59]">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
