import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMic, FiMicOff } from "react-icons/fi"; // Mic icons
import heroBg from "../assets/bg-home.png";

const Home = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [soundEnabled, setSoundEnabled] = useState({}); // track which video has sound enabled
  const videoRefs = useRef({}); // store video element references

  const videos = [
    {
      src: "/video1.mp4",
      title: "Luxury Residential Spaces",
      desc: "Our residential projects combine comfort, functionality, and aesthetics to create homes that truly reflect your lifestyle. From cozy apartments to expansive family homes, every detail is designed with care to ensure your space is elegant, warm, and inviting. Experience interiors that feel personalized and timeless.",
    },
    {
      src: "/video2.mp4",
      title: "Modern Commercial Designs",
      desc: "We design workspaces that enhance productivity and creativity, offering unique solutions for businesses of all sizes. Each office, cafe, or retail space is carefully curated to balance style and function, creating environments that inspire both employees and customers alike. Your brand comes alive through our designs.",
    },
    {
      src: "/video3.mp4",
      title: "Turnkey Interior Solutions",
      desc: "From planning to execution, we deliver complete interior solutions tailored to your budget and vision. Our team manages every aspect of your project, ensuring seamless integration of design, materials, and finishes. Enjoy stress-free, beautifully crafted interiors that exceed expectations and elevate your lifestyle.",
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
    <div className=" text-white">
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffffff]">
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
      <section className=" text-black px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Welcome to MIRAKI DECOR
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            We are one of the leading Interior Designers in Virar dedicated to
            crafting beautiful, functional, and personalized spaces. Whether
            you’re looking to renovate your home or design a new corporate
            office, our team of experts provides complete turnkey interior
            solutions tailored to your vision and budget.
          </p>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="bg-[#] text-white px-6 pb-20 pt-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-3xl font-bold text-center text-[#b68a59] mb-10">
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
                  className="w-full h-[70vh] object-cover rounded-xl transition-all duration-500"
                  ref={(el) => (videoRefs.current[i] = el)}
                />
                {/* Mic Icon */}
                <div
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full cursor-pointer text-white text-2xl hover:bg-black/70 transition-colors"
                  onClick={() => toggleSound(i)}
                >
                  {soundEnabled[i] ? <FiMic /> : <FiMicOff />}
                </div>
              </div>

              {/* Text */}
              <motion.div
                className={`text-center md:text-left`}
                initial={{ opacity: 0, x: i % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-[#b68a59]">{item.title}</h3>
                <p className="mt-4 text-xl leading-relaxed">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
