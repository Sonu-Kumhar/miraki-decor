import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
  },
  consultancy: {
    title: "Design & Consultancy",
    mainImg: "/ser5.jpg",
    desc: "End-to-end consultancy services for spaces that blend aesthetics and practicality with timeless design.",
    gallery: ["/ser51.jpg", "/ser52.jpg", "/ser53.jpg", "/ser54.jpg"],
  },
};

// 🔹 Component to render each project block
const ProjectSection = ({ title, mainImg, desc, gallery }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
    <img
      src={mainImg}
      alt={title}
      className="w-full h-[400px] object-cover shadow-lg mb-6"
    />
    <p className="text-lg text-gray-700 text-center mb-8">{desc}</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {gallery.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`${title} ${idx + 1}`}
      className="w-full h-96 object-cover shadow-md hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>
  </div>
);

const Projects = () => {
  const { category } = useParams();

  // 🔹 Update document title dynamically
  useEffect(() => {
    if (category && projectData[category]) {
      document.title = `${projectData[category].title} | Miraki Decor`;
    } else if (category && !projectData[category]) {
      document.title = "Project Not Found | Miraki Decor";
    } else {
      document.title = "All Projects | Miraki Decor";
    }
  }, [category]);

  // 🔹 If single category is requested
  if (category) {
    const project = projectData[category];
    if (!project) {
      return (
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
      );
    }
    return (
      <div className="max-w-6xl mx-auto px-6 py-36">
        {/* Category Title */}
        {/* <h1 className="text-4xl font-bold text-center mb-12">{project.title}</h1> */}

        {/* Single Project */}
        <ProjectSection {...project} />

        {/* Back to All Projects */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-xl shadow hover:bg-yellow-700 transition"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  // 🔹 If no category → show all projects
  return (
    <div className="max-w-6xl mx-auto px-6 py-36">
      <h1 className="text-4xl font-bold text-center mb-8">All Projects</h1>
      {Object.values(projectData).map((project, idx) => (
        <ProjectSection key={idx} {...project} />
      ))}
    </div>
  );
};

export default Projects;
