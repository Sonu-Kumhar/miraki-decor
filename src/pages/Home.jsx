import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import heroBg from "../assets/bg-home.png";

const Home = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState({});
  const videoRefs = useRef({});

  const videos = [
    {
      src: "/video1.mp4",
      title: "Luxury Residential Spaces",
      desc: "Our residential projects combine comfort, functionality, and aesthetics to create homes that truly reflect your lifestyle. From cozy apartments to expansive family homes, every detail is designed with care.",
    },
    {
      src: "/video2.mp4",
      title: "Modern Commercial Designs",
      desc: "We design workspaces that enhance productivity and creativity, offering unique solutions for businesses of all sizes. Each office, cafe, or retail space is curated to balance style and function.",
    },
    {
      src: "/video3.mp4",
      title: "Turnkey Interior Solutions",
      desc: "From planning to execution, we deliver complete interior solutions tailored to your budget and vision. Our team ensures seamless integration of design, materials, and finishes.",
    },
  ];

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  const toggleSound = (i) => {
    const videoEl = videoRefs.current[i];
    if (videoEl) {
      videoEl.muted = !videoEl.muted;
      setSoundEnabled((prev) => ({ ...prev, [i]: !videoEl.muted }));
      if (!videoEl.paused) videoEl.play();
    }
  };

  return (
    <div className="text-white overflow-x-hidden"> {/* ✅ Prevent horizontal scroll */}
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] md:min-h-screen w-full flex items-center justify-center text-center overflow-hidden"
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
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-3 sm:px-6 text-white drop-shadow-lg">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug">
            Style And Comfort For Your Home.
          </h2>
          <p className="mt-3 max-w-sm sm:max-w-2xl mx-auto text-sm sm:text-lg md:text-xl">
            As one of the leading Interior Designers in Virar, we specialize in
            creating custom interiors tailored to your needs and preferences.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold  hover:font-bold hover:text-black transition-colors shadow-lg text-sm sm:text-base"
          >
            Let’s Connect
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-black px-3 sm:px-6 py-10 sm:py-16">
        <motion.div
          className="max-w-3xl sm:max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#ffcc66]">
            Welcome to MIRAKI DECOR
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-white">
            We are one of the leading Interior Designers in Virar dedicated to
            crafting beautiful, functional, and personalized spaces. Whether
            you’re renovating your home or designing a new office, our team
            provides turnkey interior solutions tailored to your vision.
          </p>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="px-3 sm:px-6 pb-12 sm:pb-20 pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-[#ffcc66] mb-6 sm:mb-10">
            Explore Our Latest Residential & Commercial Projects
          </h2>

          {videos.map((item, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Video */}
              <div
                className={`relative overflow-hidden  transition-shadow duration-500 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
                style={{
                  boxShadow:
                    "10px 10px 20px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,0.2)",
                }}
              >
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-[25vh] sm:h-[50vh] md:h-[70vh] object-cover "
                  ref={(el) => (videoRefs.current[i] = el)}
                />
                {/* Volume Toggle */}
                <div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50  cursor-pointer text-base sm:text-2xl hover:bg-black/70 transition-colors"
                  onClick={() => toggleSound(i)}
                >
                  {soundEnabled[i] ? <FiVolume2 /> : <FiVolumeX />}
                </div>
              </div>

              {/* Text */}
              <motion.div
                className="text-center md:text-left px-1 sm:px-0 mt-4 md:mt-0"
                initial={{ opacity: 0, x: i % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-3xl font-bold text-[#ffcc66]">
                  {item.title}
                </h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
