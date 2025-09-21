import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        {
            title: "Residential Interior",
            key: "residential",
            desc: "We design homes that reflect your lifestyle, personality, and sense of comfort. Whether it’s a minimal city apartment or a spacious family home, we tailor each space to feel warm, functional, and distinctly yours.",
            detail:
                "From layouts to lighting, materials to mood, every element is chosen with care. Our goal is to create interiors that feel effortless and lived-in—places you love coming home to, every single day.",
            img: "/ser1.jpg",
            action: "View Projects",
        },
        {
            title: "Commercial Spaces",
            key: "commercial",
            desc: "Every business has a story—and we help you tell it through design. Whether it’s a café, salon, retail store, or studio, we create customer-centric environments that are both visually striking and purpose-driven.",
            detail:
                "We focus on flow, branding, and experience—designing spaces that elevate your business, attract attention, and leave lasting impressions.",
            img: "/ser2.jpg",
            action: "View Projects",
        },
        {
            title: "Corporate Interiors",
            key: "corporate",
            desc: "We create workspaces that balance functionality, comfort, and brand identity. Our designs are tailored to encourage focus, collaboration, and a sense of belonging—whether it’s a sleek executive suite or an open-plan office.",
            detail:
                "From layout planning to material selection, we approach every project with a strategic mindset and an eye for detail. The result is a space that supports productivity while reflecting your company’s culture and values.",
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
            key: "consultancy",
            desc: "We provide end-to-end design and consultancy services for modular kitchens—combining aesthetics, ergonomics, and practicality to transform your kitchen into a high-performance, stylish space.",
            img: "/ser5.jpg",
            action: "Contact Now",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-38">
            <h1 className="text-4xl font-bold text-center mb-6">What We Offer</h1>
            <p className="text-lg text-center text-gray-600 mb-12">
                Interior design services tailored to how you live, work, and experience
                space.
            </p>

            <div className="space-y-16">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={service.img}
                                alt={service.title}
                                className={`object-cover w-full h-80 transform transition duration-500
                                        ${index % 2 === 0
                                        ? "hover:rotate-[-2deg] hover:scale-105 hover:shadow-2xl"
                                        : "hover:rotate-[2deg] hover:scale-105 hover:shadow-2xl"
                                    }`}
                            />
                        </div>

                        {/* Text */}
                        <div className="md:w-1/2 w-full">
                            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                            <p className="text-gray-700 mb-3">{service.desc}</p>
                            {service.detail && (
                                <p className="text-gray-600 mb-3">{service.detail}</p>
                            )}

                            {service.key ? (
                                <Link
                                    to={`/projects/${service.key}`}
                                    className="text-yellow-600 font-medium hover:underline"
                                >
                                    {service.action}
                                </Link>
                            ) : (
                                <button className="text-yellow-600 font-medium hover:underline">
                                    {service.action}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* SEO Footer */}
            <div className="mt-16 text-center text-sm text-gray-500">
                best interior design company virar | Mumbai | Miraki Decor
            </div>
        </div>
    );
};

export default Services;
