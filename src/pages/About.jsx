import React from "react";
import founderImg from "/founder.jpg"; // image in public folder
import coFounderImg from "/co-founder.jpg";

const About = () => {
  return (
    <div className="bg-[] text-black">
      {/* Hero Section */}
      <section className="bg-[#] py-40 px-6  text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#b68a59]">
          We Are Miraki Decor: Designing Your Dreams into Reality
        </h1>
        <p className="mt-6 text-white max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          At Miraki Decor, we believe that a well-designed space can transform not just a home or office, but a life. We are a team of passionate interior designers in Virar | Mumbai dedicated to turning your vision into a stunning and functional reality.
        </p>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b68a59] text-center">
          Our Design Philosophy & Core Values
        </h2>
        <p className="mt-6 text-white text-lg md:text-xl leading-relaxed text-center">
          Inspired by the elegance of the peacock, Miraki Decor blends grace, creativity, and bold expression in every space we design. Just like the peacock symbolizes beauty, renewal, and individuality, our interiors reflect timeless charm, thoughtful details, and a vibrant spirit—transforming homes and workspaces into soulful experiences.
        </p>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 bg-[#]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b68a59] text-center">
          Meet Our Founder & Lead Designer
        </h2>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Founder */}
          <div className="flex flex-col items-center max-w-sm text-center">
            <img
              src={founderImg}
              alt="Sanidhya Kandalgaonkar"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold text-[#b68a59]">
              Sanidhya Kandalgaonkar
            </h3>
            <p className="text-lg font-medium text-[#d0b89c]">(Founder)</p>
            <p className="mt-2 text-white text-base md:text-lg leading-relaxed">
              A young and dynamic interior designer with over 4 years of hands-on experience, Sanidhya blends creativity with functionality. His fresh ideas and detailed design sensibility drive Miraki Décor’s mission of creating soulful and elegant spaces.
            </p>
          </div>

          {/* Co-Founder */}
          <div className="flex flex-col items-center max-w-sm text-center">
            <img
              src={coFounderImg}
              alt="Vinesh Desai"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-semibold text-[#b68a59]">
              Vinesh Desai
            </h3>
            <p className="text-lg font-medium text-[#d0b89c]">(Co-Founder)</p>
            <p className="mt-2 text-base text-white md:text-lg leading-relaxed">
              With a strong background in the construction and architectural industry, Vinesh brings decades of wisdom, precision, and structural insight to Miraki Décor. His leadership and experience are the foundation on which the studio stands.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
