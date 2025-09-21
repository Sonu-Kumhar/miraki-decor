import React from "react";
import { StickyScroll } from "../components/StickyScroll";

const Services = () => {
  const servicesContent = [
    {
      title: "Interior Designing",
      description:
        "Transform your space with modern interior design solutions tailored to your lifestyle.",
      content: (
        <img
          src="/img1.jpg"
          alt="Interior Designing"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Modular Kitchens",
      description:
        "Experience functionality and elegance with our modular kitchen designs.",
      content: (
        <img
          src="/img2.jpg"
          alt="Modular Kitchens"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Office Spaces",
      description:
        "We design inspiring office spaces that boost creativity and productivity.",
      content: (
        <img
          src="/img3.jpg"
          alt="Office Spaces"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Living Rooms",
      description:
        "Create warm, inviting living rooms that reflect your personality and style.",
      content: (
        <img
          src="/img4.jpg"
          alt="Living Rooms"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Bedrooms",
      description:
        "Turn your bedroom into a peaceful retreat with our custom interior solutions.",
      content: (
        <img
          src="/img5.jpg"
          alt="Bedrooms"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Decor Accessories",
      description:
        "Stylish home decor accessories that add charm and character to your interiors.",
      content: (
        <img
          src="/img6.jpg"
          alt="Decor Accessories"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Custom Furniture",
      description:
        "Handcrafted furniture pieces that perfectly fit your space and aesthetics.",
      content: (
        <img
          src="/img7.jpg"
          alt="Custom Furniture"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Renovation Projects",
      description:
        "Bring new life to your old spaces with our complete renovation services.",
      content: (
        <img
          src="/img8.jpg"
          alt="Renovation Projects"
          className="h-full w-full object-cover"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  py-40 px-6 pt-32 relative z-10">

      <h1 className="mb-16 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-lg">
        Our Premium Services
      </h1>
      <StickyScroll
        content={servicesContent}
        textContainerClass="backdrop-blur-md bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20 transition-all duration-500"
        imageClass="rounded-2xl shadow-2xl object-cover"
        syncScroll={true} // ✅ ensures text & image scroll together
      />
    </div>
  );
};

export default Services;
