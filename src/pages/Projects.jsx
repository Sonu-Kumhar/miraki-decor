import React from "react";
import { useParams, Link } from "react-router-dom";

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
  },
  consultancy: {
    title: "Design & Consultancy",
    mainImg: "/ser5.jpg",
    desc: "End-to-end consultancy services for spaces that blend aesthetics and practicality with timeless design.",
    gallery: ["/ser51.jpg", "/ser52.jpg", "/ser53.jpg", "/ser54.jpg"],
  },
};

const Projects = () => {
  const { category } = useParams();
  const project = projectData[category];

  // Case 1: /projects (no category → show all categories)
  if (!category) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <p className="text-gray-600 mb-10">
          Explore our work across Residential, Commercial, Corporate, Modular
          Kitchens, and Consultancy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(projectData).map(([key, proj]) => (
            <Link
              key={key}
              to={`/projects/${key}`}
              className="block rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={proj.mainImg}
                alt={proj.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Case 2: /projects/:category (valid project)
  if (project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10">
          {project.title}
        </h1>

        {/* Main Section */}
        <div className="mb-12">
          <img
            src={project.mainImg}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-6"
          />
          <p className="text-lg text-gray-700 text-center">{project.desc}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {project.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    );
  }

  // Case 3: invalid category
  return (
    <div className="text-center py-20 text-gray-600">
      <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
      <p>The project category you are looking for doesn’t exist.</p>
    </div>
  );
};

export default Projects;
