import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import bgAll from "../assets/bg-all.png"; // Hero background

// Project data
const projectData = {
  residential: {
    title: "Residential Interiors",
    mainImg: "/ser1.jpg",
    desc: "We design homes that reflect your lifestyle, personality, and sense of comfort. From layouts to lighting, materials to mood—every detail is thoughtfully crafted.",
    gallery: ["/ser11.jpg", "/ser12.jpg", "/ser13.jpg", "/ser14.jpg"],
  },
  commercial: {
    title: "Commercial Spaces",
    mainImg: "/ser2.jpg",
    desc: "Every business has a story—we help you tell it through design. From cafes to salons, retail stores to studios, our projects are customer-focused and visually striking.",
    gallery: ["/ser21.jpg", "/ser22.jpg", "/ser23.jpg", "/ser24.jpg"],
  },
  corporate: {
    title: "Corporate Interiors",
    mainImg: "/ser3.jpg",
    desc: "Workspaces designed for productivity, collaboration, and comfort. Every element is tailored to reflect your brand identity and culture.",
    gallery: ["/ser31.jpg", "/ser32.jpg", "/ser33.jpg", "/ser34.jpg"],
  },
  modular: {
    title: "Modular Kitchens",
    mainImg: "/ser4.jpg",
    desc: "Stylish, functional, and space-saving modular kitchens tailored to your taste and lifestyle.",
    gallery: ["/ser41.jpg", "/ser42.jpg", "/ser43.jpg", "/ser44.jpg"],
  }
};

// 🔹 Component to render each project block
const ProjectSection = ({ title, mainImg, desc, gallery }) => (
  <div className="mb-20">
    <h2 className="text-3xl text-[#ffcc66] font-semibold mb-6 text-center">{title}</h2>
    <img
      src={mainImg}
      alt={title}
      className="w-full h-[400px] rounded-xl border-white p-1.5 border-2 object-cover shadow-lg mb-6"
    />
    <p className="text-xl text-white text-center mb-8">{desc}</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {gallery.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} ${idx + 1}`}
          className="w-full h-96 object-cover border-2 border-white p-1.5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  </div>
);

const Projects = () => {
  const { category } = useParams();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (category && projectData[category]) {
      document.title = `${projectData[category].title} | Miraki Decor`;
    } else if (category && !projectData[category]) {
      document.title = "Project Not Found | Miraki Decor";
    } else {
      document.title = "All Projects | Miraki Decor";
    }
  }, [category]);

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
        className="relative min-h-[60vh] w-full flex items-start justify-center text-center overflow-hidden pt-32" // pt-32 pushes content below navbar
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
            {category ? projectData[category]?.title || "Project Not Found" : "All Projects"}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white">
            {category
              ? projectData[category]?.desc || "The project category you are looking for doesn’t exist."
              : "Explore our diverse range of interior design projects tailored for homes, offices, and commercial spaces."}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-20">
        {/* Single category */}
        {category ? (
          projectData[category] ? (
            <>
              <ProjectSection {...projectData[category]} />
              <div className="text-center mt-12">
                <Link
                  to="/projects"
                  className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700 transition font-bold"
                >
                  ← Back to All Projects
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-20 text-gray-600">
              <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
              <p>The project category you are looking for doesn’t exist.</p>
              <Link
                to="/projects"
                className="inline-block mt-6 px-6 py-3 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700 transition"
              >
                ← Back to All Projects
              </Link>
            </div>
          )
        ) : (
          // All projects
          Object.values(projectData).map((project, idx) => (
            <ProjectSection key={idx} {...project} />
          ))
        )}

        {/* SEO Footer */}
        <div className="mt-20 text-center text-sm text-white">
          best interior design company virar | Mumbai | Miraki Decor
        </div>
      </div>
    </div>
  );
};

export default Projects;
